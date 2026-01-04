const express = require('express');
const { body, validationResult } = require('express-validator');
const Course = require('../models/course');
const router = express.Router();
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

// Middleware to authenticate
const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).json({ error: 'Invalid token.' });
    }
};

// Create Course
router.post('/', [
    authenticate,
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('instructor').notEmpty().withMessage('Instructor is required'),
    body('duration').notEmpty().withMessage('Duration is required')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, instructor, duration } = req.body;
        const course = await Course.create({ title, description, instructor, duration });
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get All Courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
