require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const registerRoute = require('./routes/auth/register');
const loginRoute = require('./routes/auth/login');
const coursesRoutes = require('./routes/courses');
const courseRoutes = require('./routes/course');

const app = express();
const PORT = process.env.PORT || 5001;

// CORS configuration to allow requests from Netlify
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:3000',
        'https://transcendent-beijinho-af2499.netlify.app',
        process.env.FRONTEND_URL
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api/auth/register', registerRoute);
app.use('/api/auth/login', loginRoute);
app.use('/api/courses', coursesRoutes);
app.use('/api/course', courseRoutes);

// Sync Database and Start Server
sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database sync error:', err);
    });
