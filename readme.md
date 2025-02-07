# Legsitai Evaluation Task/Assignment

This project consists of a Next.js 15 frontend and a Flask backend implementation.

## Project Structure

```
project-root/
├── src/          # Frontend Next.js application
└── backend/       # Flask application
```

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (Latest LTS version)
- Python 3.8 or higher
- npm (Node Package Manager)
- pip (Python Package Manager)

## Environment Variables

### Backend (.env)
```
AZURE_SQL_SERVER=your_server_name
AZURE_SQL_DATABASE=your_database_name
AZURE_SQL_USERNAME=your_username
AZURE_SQL_PASSWORD=your_password
AZURE_SQL_DRIVER=your_driver_name
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
# Replace with your own API URL if needed
```

## Frontend Setup

The frontend is built with Next.js 15. To get started:

1. Install front-end dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the frontend directory and add the environment variables.

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Backend Setup

The backend is built with Flask. To set up:

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file in the backend directory and add the environment variables.

4. Run the Flask application:
```bash
python app.test
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Users
- `GET /api/user` - Retrieves all users from the database

## Technology Stack

- **Frontend**:
  - Next.js 15
  - TypeScript
  - Tailwind CSS
  - ESLint

- **Backend**:
  - Flask
  - Azure SQL Database

## Note

- The `test.py` file in the backend directory can be ignored as it's not part of the main application.
- Make sure both frontend and backend servers are running simultaneously for the application to work properly.
- Ensure all environment variables are properly set before running the application.
- Never commit your `.env` or `.env.local` files to version control.

## Contact

For any additional questions or support, please refer to the project documentation or contact the project maintainers.