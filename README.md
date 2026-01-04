# 📚 Course Management App

A full-stack web application for managing courses with user authentication and CRUD operations.

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js, SQLite, JWT, bcryptjs  
**Frontend:** React 18, Vite, React Router, Axios  
**Deployment:** Render (Backend), Netlify (Frontend)

## ✨ Features

- User registration and login with JWT authentication
- Create, Read, Update, Delete courses
- Responsive design for desktop and mobile
- Protected routes for authenticated users

## 🚀 How to Run Locally

### Backend
```bash
cd backend
npm install
npm start
```
Server runs on `http://localhost:5001`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

## 🌐 Live Links

- **Frontend**: https://transcendent-beijinho-af2499.netlify.app
- **Backend API**: https://course-management-app-uk61.onrender.com
- **Repository**: https://github.com/gajbharepavan/course-management-app

## 📸 Screenshots

### 1. Login Page
![Login Page](./assets/01-login.png)

### 2. Registration Page
![Register Page](./assets/02-register.png)

### 3. Dashboard
![Dashboard](./assets/03-dashboard.png)

### 4. Add Course
![Add Course](./assets/04-add-course.png)

### 5. Edit Course
![Edit Course](./assets/05-edit-course.png)

### 6. Course Card
![Course Card](./assets/06-course-card.png)

### 7. Mobile View
![Mobile View](./assets/07-mobile-view.png)

## 🔐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/courses` | Get all courses |
| POST | `/api/courses` | Create course (auth required) |
| GET | `/api/course/:id` | Get single course |
| PUT | `/api/course/:id` | Update course (auth required) |
| DELETE | `/api/course/:id` | Delete course (auth required) |

## 📋 Environment Variables

### Backend (.env)
```
PORT=5001
NODE_ENV=development
JWT_SECRET=your_secret_key
```

## 📁 Project Structure
```
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   └── App.jsx
    └── package.json
```

## 🐛 Troubleshooting

- **Clear browser cache** if frontend doesn't load properly
- **Check browser console (F12)** for API errors
- **Ensure backend is running** before testing frontend

## 📄 License

ISC License
