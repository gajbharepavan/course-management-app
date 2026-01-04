import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

const CourseForm = () => {
    const [course, setCourse] = useState({
        title: '',
        description: '',
        instructor: '',
        duration: ''
    });
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    useEffect(() => {
        if (isEdit) {
            fetchCourse();
        }
    }, [id]);

    const fetchCourse = async () => {
        try {
            const res = await api.get(`/course/${id}`);
            setCourse(res.data);
        } catch (err) {
            console.error('Failed to fetch course');
        }
    };

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEdit) {
                await api.put(`/course/${id}`, course);
            } else {
                await api.post('/courses', course);
            }
            navigate('/dashboard');
        } catch (err) {
            alert('Failed to save course');
        }
    };

    return (
        <div className="form-container">
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{isEdit ? 'Edit Course' : 'Add New Course'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        name="title" 
                        value={course.title} 
                        onChange={handleChange} 
                        required 
                        placeholder="e.g. Introduction to React"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        name="description" 
                        value={course.description} 
                        onChange={handleChange} 
                        required 
                        rows="4"
                        placeholder="Course content overview..."
                    />
                </div>
                <div className="form-group">
                    <label>Instructor</label>
                    <input 
                        name="instructor" 
                        value={course.instructor} 
                        onChange={handleChange} 
                        required 
                        placeholder="Instructor Name"
                    />
                </div>
                <div className="form-group">
                    <label>Duration</label>
                    <input 
                        name="duration" 
                        value={course.duration} 
                        onChange={handleChange} 
                        placeholder="e.g. 8 weeks"
                    />
                </div>
                <button type="submit">{isEdit ? 'Update Course' : 'Create Course'}</button>
            </form>
        </div>
    );
};

export default CourseForm;
