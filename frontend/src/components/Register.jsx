import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('user');
    const navigate=useNavigate()

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const registrationData = {
            name,
            password,
            email,
            type,
        };

        let data= await fetch('https://buyc-corp-g63s.onrender.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registrationData),
        })
        data=await data.json()
        alert(data.msg)
        navigate('/login')   
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter your Email Address' title='Please Enter your Email Address' onChange={handleEmailChange} required />
            <input type="text" placeholder='Enter Name' required minLength={3} onChange={handleNameChange} />
            <input type="password" placeholder='Enter Password' minLength={8} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required onChange={handlePasswordChange} />
            <label htmlFor="type">I am here to :</label>
            <select name="type" id="type" onChange={handleTypeChange}>
                <option value="user">Buy used cars</option>
                <option value="dealer">Sell used cars</option>
            </select>
            <option value=""></option>
            <input type="submit" value='Register'  />
        </form>
    )
}

export default Register