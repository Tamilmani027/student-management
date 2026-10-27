# Student Management System API

A Node.js + Express + MongoDB backend for managing students and mentors in a student-management workflow.

## Features

- Create students
- Create mentors
- Assign a mentor to a student
- View unassigned students
- View a student's previous mentors
- Assign multiple students to a mentor
- List all students assigned to a mentor

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- CORS

## Project Structure

```bash
student-management-system/
├── controllers/
│   ├── mentor.controller.js
│   └── student.controller.js
├── database/
│   └── configDB.js
├── models/
│   ├── mentor.schema.js
│   └── student.schema.js
├── routers/
│   ├── mentor.router.js
│   └── student.router.js
├── index.js
├── package.json
├── .env
└── README.md
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB running locally or a MongoDB Atlas connection string
- A `.env` file configured

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/student-management-system
```

## Installation

```bash
npm install
```

## Run the Application

```bash
npm start
```

The server will start on the port specified in `.env` or default to `3000`.

## API Endpoints

### Student Routes

- `POST /api/student` - Create a student
- `GET /api/student/unassigned` - Get students with no assigned mentor
- `PUT /api/student/:studentId/assign-mentor` - Assign a mentor to a student
- `GET /api/student/:studentId/previous-mentor` - Get a student's previous mentors

### Mentor Routes

- `POST /api/mentor` - Create a mentor
- `PUT /api/mentor/:mentorId/assign-students` - Assign multiple students to a mentor
- `GET /api/mentor/:mentorId/students` - Get all students assigned to a mentor

## Example Requests

### Create Student

```http
POST /api/student
Content-Type: application/json

{
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

### Create Mentor

```http
POST /api/mentor
Content-Type: application/json

{
  "name": "Mr. Smith",
  "email": "smith@example.com"
}
```

### Assign Mentor to Student

```http
PUT /api/student/:studentId/assign-mentor
Content-Type: application/json

{
  "mentorId": "64f6c9b2d5a1f3e5aa1b2c3d"
}
```

## Notes

- The application uses `express.json()` and `express.urlencoded()` to parse incoming request data.
- MongoDB connection is established in `database/configDB.js` when the server starts.
- Error responses from the controllers follow a standard JSON format with `success`, `message`, and `data` keys where applicable.

## License

This project is licensed under the ISC License.
