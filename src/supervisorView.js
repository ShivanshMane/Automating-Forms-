import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SupervisorView = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        const fetchForms = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://127.0.0.1:8000/api/endline-package-quality-list/', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setForms(response.data);
            } catch (error) {
                console.error('Error fetching forms', error);
            }
        };

        fetchForms();
    }, []);

    return (
        <div>
            <h1>Supervisor View</h1>
            <ul>
                {forms.map(form => (
                    <li key={form.id}>{form.product} - {form.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default SupervisorView;
