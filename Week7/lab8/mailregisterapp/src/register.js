import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        let newErrors = {};

        if (formData.name.trim().length < 5) {
            newErrors.name = "Name must be at least 5 characters long.";
        }

        if (!formData.email.includes('@') || !formData.email.includes('.')) {
            newErrors.email = "Email must contain '@' and '.'";
        }

        if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Registration successful!");
            // Optional: Reset form after submission
            setFormData({ name: '', email: '', password: '' });
            setErrors({});
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Name:</label><br />
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                </div>

                <div>
                    <label>Email:</label><br />
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                </div>

                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                </div>

                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
