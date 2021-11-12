import React, { useState } from "react";
import { useHistory } from "react-router";

const Register = ({}) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        console.log({username, password, name, location})
        const response = await fetch('/api/users/register' ,{
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({
                username,
                password,
                name,
                location
            
            })
        });
        const data = await response.json();
        localStorage.setItem('token', data.token);
        const token = localStorage.getItem('token');
        console.log({token})
        console.log('registerdata', data)
        history.push('/login')
    }

    return <>
    <h3>
        Register
    </h3>
    <form onSubmit={handleSubmit}>
        <input type="username" placeholder="username" value={username} onChange={(ev) => setUsername(ev.target.value)}></input>
        <input type="password" placeholder="password" value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
        <input type="name" placeholder="name" value={name} onChange={(ev) => setName(ev.target.value)}></input>
        <input type="location" placeholder="location" value={location} onChange={(ev) => setLocation(ev.target.value)}></input>
        <button type="register" className="register-btn">Register</button>
    </form>
</>
}

export default Register