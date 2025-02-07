import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import urllib
from flask_sqlalchemy import SQLAlchemy
import bcrypt
from dotenv import load_dotenv
import pyodbc
import jwt
from datetime import datetime, timedelta

load_dotenv()

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your-secret-key')  # For simple token generation
CORS(app)

# Azure SQL connection configuration
driver = os.getenv('AZURE_SQL_DRIVER')
server = os.getenv('AZURE_SQL_SERVER')
database = os.getenv('AZURE_SQL_DATABASE')
username = os.getenv('AZURE_SQL_USERNAME')
password = os.getenv('AZURE_SQL_PASSWORD')

params = urllib.parse.quote_plus(
    f'Driver={{{driver}}};'
    f'Server=tcp:{server}'
    ',1433;'
    f'Database={database};'
    f'Uid={username};'
    f'Pwd={password};'
    'Encrypt=yes;'
    'TrustServerCertificate=no;'
    'Connection Timeout=30;'
)

app.config["SQLALCHEMY_DATABASE_URI"] = f"mssql+pyodbc:///?odbc_connect={params}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)

# User Model - Simple and focused on requirements
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)

# Create tables
with app.app_context():
    db.create_all()

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400

    # Check if user already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'message': 'Email already exists'}), 400

    # Hash the password
    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    try:
        new_user = User(email=email, password=hashed.decode('utf-8'))
        db.session.add(new_user)
        db.session.commit()
        
        # Generate token upon successful signup
        token = jwt.encode({
            'user_id': new_user.id,
            'exp': datetime.utcnow() + timedelta(days=1)
        }, app.config['JWT_SECRET_KEY'])
        print(jsonify({
            'message': 'User created successfully',
            'token': token,
            'user': {'id': new_user.id, 'email': new_user.email}
        }), 201)
        return jsonify({
            'message': 'User created successfully',
            'token': token,
            'user': {'id': new_user.id, 'email': new_user.email}
        }), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': str(e)}), 500

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({
            'message': 'User does not exist',
            'needsSignup': True
        }), 404

    if bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
        # Generate simple token
        token = jwt.encode({
            'user_id': user.id,
            'exp': datetime.utcnow() + timedelta(days=1)
        }, app.config['JWT_SECRET_KEY'])
        
        return jsonify({
            'message': 'Login successful',
            'token': token,
            'user': {'id': user.id, 'email': user.email}
        }), 200
    else:
        return jsonify({'message': 'Invalid password'}), 401

# create a route to show all users
@app.route('/api/users', methods=['GET'])
def users():
    users = User.query.all()
    return jsonify([{'id': user.id, 'email': user.email} for user in users])


if __name__ == '__main__':
    app.run(debug=True)