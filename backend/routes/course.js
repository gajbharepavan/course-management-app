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

// Get Single Course
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Update Course
router.put('/:id', [
    authenticate,
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('description').optional().notEmpty().withMessage('Description cannot be empty'),
    body('instructor').optional().notEmpty().withMessage('Instructor cannot be empty'),
    body('duration').optional().notEmpty().withMessage('Duration cannot be empty')
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, instructor, duration } = req.body;
        const course = await Course.findByPk(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });

        course.title = title || course.title;
        course.description = description || course.description;
        course.instructor = instructor || course.instructor;
        course.duration = duration || course.duration;

        await course.save();
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete Course
router.delete('/:id', authenticate, async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });

        await course.destroy();
        res.json({ message: 'Course deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
