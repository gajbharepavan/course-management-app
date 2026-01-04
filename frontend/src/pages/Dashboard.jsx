import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Dashboard = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const res = await api.get('/courses');
            setCourses(res.data);
        } catch (err) {
            console.error('Failed to fetch courses');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            try {
                await api.delete(`/course/${id}`);
                fetchCourses();
            } catch (err) {
                alert('Failed to delete course');
            }
        }
    };

    return (
        <div>
            <div className="dashboard-header">
                <h2>Available Courses</h2>
                <Link to="/add-course">
                    <button className="btn-primary" style={{ width: 'auto' }}>Add New Course</button>
                </Link>
            </div>
            
            {courses.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#666', marginTop: '2rem' }}>No courses available yet. Click "Add New Course" to create one.</p>
            ) : (
                <div className="course-grid">
                    {courses.map(course => (
                        <div key={course.id} className="course-card">
                            <h3>{course.title}</h3>
                            <div className="course-info">
                                <p><strong>Instructor:</strong> {course.instructor}</p>
                                <p><strong>Duration:</strong> {course.duration}</p>
                            </div>
                            <p style={{ flex: 1 }}>{course.description}</p>
                            <div className="course-actions">
                                <Link to={`/edit-course/${course.id}`} style={{ flex: 1, textDecoration: 'none' }}>
                                    <button className="btn-edit" style={{ width: '100%' }}>Edit</button>
                                </Link>
                                <button onClick={() => handleDelete(course.id)} className="btn-delete">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
