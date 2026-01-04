const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const registerRoute = require('./routes/auth/register');
const loginRoute = require('./routes/auth/login');
const coursesRoutes = require('./routes/courses');
const courseRoutes = require('./routes/course');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
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
