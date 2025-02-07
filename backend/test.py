import pyodbc
# load from .env file
from dotenv import load_dotenv
import os
import urllib.parse
# load environment variables

load_dotenv()

driver = os.getenv('AZURE_SQL_DRIVER')
server = os.getenv('AZURE_SQL_SERVER')
database = os.getenv('AZURE_SQL_DATABASE')
username = os.getenv('AZURE_SQL_USERNAME')
password = os.getenv('AZURE_SQL_PASSWORD')
# a='Driver={ODBC Driver 18 for SQL Server};Server=tcp:legistai-test.database.windows.net,1433;Database=legistai-test;Uid=legistaitest;Pwd=admin@123;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'
# b=(    f'Driver={{{driver}}};'  # Note the triple curly braces
#     f'Server=tcp:{server}'
#     ',1433;'
#     f'Database={database};'
#     f'Uid={username};'
#     f'Pwd={password};'
#     'Encrypt=yes;'
#     'TrustServerCertificate=no;'
#     'Connection Timeout=30;')

# print(a+'\n')
# print(b)
# print(a==b)

# print("Available ODBC drivers:", pyodbc.drivers())
conn = pyodbc.connect(
       f'Driver={{{driver}}};'  # Note the triple curly braces
    f'Server=tcp:{server}'
    ',1433;'
    f'Database={database};'
    f'Uid={username};'
    f'Pwd={password};'
    'Encrypt=yes;'
    'TrustServerCertificate=no;'
    'Connection Timeout=30;'
)
cursor = conn.cursor()
cursor.execute("DROP TABLE users")
cursor.commit()
# cursor.execute("SELECT * FROM users")
# print(cursor.fetchall())
cursor.close()