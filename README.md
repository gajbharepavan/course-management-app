# 📚 Course Management App

A full-stack web application for managing online courses with user authentication and course CRUD operations.

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **SQLite** - Database with Sequelize ORM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-Origin Resource Sharing
- **express-validator** - Input validation

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling

### Deployment
- **Render** - Backend hosting
- **Netlify** - Frontend hosting
- **GitHub** - Version control

---

## ✨ Features

### 🔐 Authentication
- User registration with email validation
- User login with JWT token generation
- Secure password hashing with bcryptjs
- Token-based authorization for protected routes
- Token stored in browser localStorage

### 📖 Course Management
- **View Courses** - Display all available courses
- **Create Course** - Add new courses (authenticated users only)
- **Edit Course** - Update course details
- **Delete Course** - Remove courses from the system
- Real-time course list updates

### 💎 User Experience
- Responsive design (works on mobile and desktop)
- Clean and intuitive UI
- Form validation
- Error handling and user feedback
- Protected routes (only logged-in users can access dashboard)

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/gajbharepavan/course-management-app.git
cd course-management-app
```

#### 2. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create .env file (optional for local development)
# PORT=5001
# NODE_ENV=development
# JWT_SECRET=your_secret_key_here

# Start the backend server
npm start
```

**Backend will run on:** `http://localhost:5001`

#### 3. Setup Frontend (in a new terminal)

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

**Frontend will run on:** `http://localhost:5173`

#### 4. Access the Application

Open your browser and go to:
```
http://localhost:5173
```

### 📝 Testing the App Locally

1. **Register a new account**
   - Click "Register"
   - Enter Name, Email, and Password
   - Click "Register"

2. **Login**
   - Use your registered email and password
   - You'll be redirected to the Dashboard

3. **Manage Courses**
   - View all courses on the Dashboard
   - Click "Add New Course" to create a course
   - Click "Edit" to modify a course
   - Click "Delete" to remove a course

---

## 🌐 Live Deployment Links

- **Frontend (Netlify)**: https://transcendent-beijinho-af2499.netlify.app
- **Backend API (Render)**: https://course-management-app-uk61.onrender.com
- **GitHub Repository**: https://github.com/gajbharepavan/course-management-app

---

## 📸 Screenshots

### 1. Login Page
- Clean login interface with email and password fields
- Option to navigate to registration page
- Form validation and error handling

### 2. Registration Page
- User registration form
- Email validation
- Password strength requirements
- Success/error feedback

### 3. Dashboard
- Displays all available courses
- Course cards with title, instructor, duration
- Add, Edit, and Delete buttons
- Responsive grid layout
- Empty state message when no courses exist

### 4. Add Course Form
- Form to create new courses
- Fields: Title, Description, Instructor, Duration
- Form validation
- Submit and Cancel buttons

### 5. Edit Course Form
- Pre-filled form with existing course data
- Ability to update any field
- Save and Cancel options

### 6. Course Management UI
- Individual course cards
- Display course information
- Quick access to Edit and Delete actions
- Hover effects and responsive design

### 7. Responsive Mobile View
- Mobile-friendly navigation
- Stack-based layout
- Touch-friendly buttons
- Optimized for all screen sizes

---

## 📁 Project Structure

```
course-management-app/
├── backend/
│   ├── config/
│   │   └── database.js          # SQLite configuration
│   ├── models/
│   │   ├── user.js              # User model
│   │   └── course.js            # Course model
│   ├── routes/
│   │   ├── auth/
│   │   │   ├── login.js         # Login endpoint
│   │   │   └── register.js      # Registration endpoint
│   │   ├── course.js            # Single course routes (GET, PUT, DELETE)
│   │   └── courses.js           # Multiple courses routes (GET, POST)
│   ├── index.js                 # Express app setup
│   ├── package.json             # Backend dependencies
│   ├── .env                     # Environment variables (local)
│   └── render.yaml              # Render deployment config
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx        # Login page
    │   │   ├── Register.jsx     # Registration page
    │   │   ├── Dashboard.jsx    # Course dashboard
    │   │   └── CourseForm.jsx   # Add/Edit course form
    │   ├── components/
    │   │   └── Navbar.jsx       # Navigation bar
    │   ├── api.js               # Axios configuration
    │   ├── App.jsx              # Main app component
    │   ├── index.css            # Global styles
    │   └── main.jsx             # React entry point
    ├── package.json             # Frontend dependencies
    ├── vite.config.js           # Vite configuration
    ├── netlify.toml             # Netlify deployment config
    └── index.html               # HTML template
```

---

## 🔐 API Endpoints

### Authentication
```
POST /api/auth/register
- Body: { name, email, password }
- Response: { message, userId }

POST /api/auth/login
- Body: { email, password }
- Response: { token, user }
```

### Courses
```
GET /api/courses
- Response: Array of courses

POST /api/courses (requires auth)
- Body: { title, description, instructor, duration }
- Response: Created course object

GET /api/course/:id
- Response: Course object

PUT /api/course/:id (requires auth)
- Body: { title, description, instructor, duration }
- Response: Updated course object

DELETE /api/course/:id (requires auth)
- Response: { message }
```

---

## 🧪 Database Schema

### Users Table
```sql
CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### Courses Table
```sql
CREATE TABLE Courses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  instructor VARCHAR(255) NOT NULL,
  duration VARCHAR(255),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

---

## 📋 Environment Variables

### Backend (.env)
```
PORT=5001
NODE_ENV=development
JWT_SECRET=your_super_secret_key_change_in_production
```

### Frontend (Netlify Environment)
```
VITE_API_URL=https://course-management-app-uk61.onrender.com/api
```

---

## 🚢 Deployment Guide

### Deploy Backend on Render

1. Push code to GitHub
2. Go to https://render.com
3. Click "New" → "Web Service"
4. Select the repository
5. Set Root Directory to: `backend`
6. Build Command: `npm install`
7. Start Command: `npm start`
8. Add environment variables:
   - `NODE_ENV: production`
   - `JWT_SECRET: (generate secure key)`
9. Click "Create Web Service"

### Deploy Frontend on Netlify

1. Go to https://netlify.com
2. Click "New site from Git"
3. Select your GitHub repository
4. Set Base directory to: `frontend`
5. Build Command: `npm run build`
6. Publish directory: `dist`
7. Add environment variable:
   - `VITE_API_URL: https://course-management-app-uk61.onrender.com/api`
8. Click "Deploy"

---

## 🐛 Troubleshooting

### Registration fails on deployed version
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Check browser console (F12) for errors
- Ensure backend has been deployed

### Courses not loading
- Check if you're logged in
- Verify JWT token is valid
- Check browser console for API errors

### CORS errors
- Backend CORS is configured to allow all origins
- If issues persist, check Network tab in browser DevTools

---

##  License

ISC License

---

**Last Updated**: January 4, 2026
