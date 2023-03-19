import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('username', username);
        formData.append('password', password);
        try {
            const response = await axios.post('/api/signup', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Beth's Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <button type="submit">Login</button>
                </label>
            </form>
        </div>
    );
};

export default SignUp;
