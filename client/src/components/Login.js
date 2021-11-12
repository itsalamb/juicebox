import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = ({}) => {
    const history = useHistory();
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const response = await fetch('/api/users/login' ,{
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
        const data = await response.json();
        console.log('this is the date', data)
        localStorage.setItem('token', data.token);
        history.push('/home')
    }

    return <>
    <h3>
        Login
    </h3>
    <form onSubmit={handleSubmit}>
        <input type="username" placeholder="username" value={username} onChange={(ev) => setUsername(ev.target.value)}></input>
        <input type="password" placeholder="password" value={password} onChange={(ev) => setPassword(ev.target.value)}></input>
        <button type="Login" className="login-btn">Login</button>
    </form>
</>
}

export default Login