# InFuture Backend API

A modular and professional Node.js/Express backend for the InFuture Application Admin System.

## 📁 Project Structure

```
backend/
├── src/
│   ├── auth/           # Authentication & authorization
│   │   ├── controller.js    # Login, register, token refresh
│   │   ├── middleware.js    # JWT auth middleware
│   │   ├── routes.js        # Auth route definitions
│   │   ├── utils.js         # JWT & password utilities
│   │   └── index.js         # Auth module exports
│   ├── config/         # Database and app configuration
│   │   └── database.js      # MongoDB connection setup
│   ├── controllers/    # Business logic controllers
│   │   ├── applicationController.js  # Application CRUD operations
│   │   ├── projectController.js      # Project management
│   │   └── userController.js         # User management (students, mentors, admins)
│   ├── middleware/     # Custom middleware
│   │   ├── errorHandler.js   # Global error handling
│   │   └── common.js         # Logging, CORS utilities
│   ├── models/         # Mongoose models
│   │   ├── Application.js    # Student application schema
│   │   ├── Project.js        # Website project schema
│   │   ├── User.js          # Unified user schema (students, mentors, admins)
│   │   └── index.js         # Model exports
│   ├── routes/         # API route definitions
│   │   ├── applications.js   # Application endpoints
│   │   ├── projects.js       # Project management endpoints
│   │   ├── users.js         # User management endpoints
│   │   └── index.js         # Route aggregation
│   ├── utils/          # Utility functions
│   │   └── helpers.js       # Validation, response, date utilities
│   └── app.js          # Main application setup
├── package.json        # Dependencies and scripts
├── .env.example        # Environment variables template
└── README.md          # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository and navigate to backend folder
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your configuration

5. Start the development server:
   ```bash
   npm run dev
   ```

## 📚 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - Student registration
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout

### Users (Students, Mentors, Admins)
- `GET /api/users` - Get all users (with role filter)
- `GET /api/users/students` - Get students only
- `GET /api/users/students/search` - Search students by skills
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Applications
- `GET /api/applications` - Get all applications
- `GET /api/applications/status/:status` - Get applications by status
- `GET /api/applications/:id` - Get application by ID
- `POST /api/applications` - Create new application
- `PUT /api/applications/:id` - Update application
- `DELETE /api/applications/:id` - Delete application

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### System
- `GET /api/health` - Health check
- `GET /` - API information and endpoints

## 🏗️ Architecture Features

### ✅ Implemented
- **Modular Structure** - Clean separation of concerns
- **Unified User Model** - Single model for students, mentors, and admins
- **Error Handling** - Comprehensive error middleware
- **Request Logging** - HTTP request logging
- **Environment Configuration** - Secure environment variable management
- **Database Models** - User, Application, and Project schemas with relationships
- **CRUD Operations** - Complete Create, Read, Update, Delete for all entities

### 🚧 TODO (Auth Framework Ready)
- **JWT Authentication** - Token-based authentication system
- **Password Hashing** - Secure password storage with bcrypt
- **Role-based Authorization** - Permission system for different user types
- **Token Refresh** - Automatic token renewal
- **Password Reset** - Email-based password recovery

## 🧪 Development

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm test` - Run tests (to be implemented)

### Environment Variables
Copy `.env.example` to `.env` and configure:
- `MONGO_URI` - MongoDB connection string
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)

## 🔧 Future Enhancements
- Unit and integration tests
- API documentation with Swagger
- Rate limiting
- File upload functionality
- Email notifications
- Monitoring and logging improvements

### Health Check
- `GET /api/health` - API health check

### Users (Students, Mentors, Admins)
- `GET /api/users` - Get all users (with optional role filter)
- `GET /api/users/students` - Get students only
- `GET /api/users/students/search?skills=react,node` - Search students by skills
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Applications
- `GET /api/applications` - Get all applications
- `GET /api/applications/status/:status` - Get applications by status
- `GET /api/applications/:id` - Get application by ID
- `POST /api/applications` - Create new application
- `PUT /api/applications/:id` - Update application
- `DELETE /api/applications/:id` - Delete application

## 🗃️ Data Models

### User Model
Unified model for all user types (students, mentors, admins) with role-based fields.

### Application Model
Manages student applications for internship positions.

### Project Model
Manages website building projects with client information.

## 🛠️ Features

- **Modular Architecture**: Clean separation of concerns
- **Error Handling**: Comprehensive error handling middleware
- **Validation**: Mongoose schema validation
- **Logging**: Request logging middleware
- **CORS**: Configurable cross-origin resource sharing
- **Environment Configuration**: Flexible environment setup

## 📝 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (to be implemented)

## 🔧 Environment Variables

See `.env.example` for required environment variables.

## 🤝 Contributing

1. Follow the existing code structure
2. Add proper error handling
3. Document new endpoints
4. Test your changes