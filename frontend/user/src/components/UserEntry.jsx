import React, { useState } from 'react';
import axios from 'axios';

const UserEntry = () => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/users', { name })
            .then(response => {
                console.log('User saved', response.data);
                setName(''); // Reset form
            })
            .catch(error => {
                console.log('Error saving the user!', error);
            });
    };

    return (
        <div>
            <h1>Form Page!</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Enter name" 
                    required 
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserEntry;
