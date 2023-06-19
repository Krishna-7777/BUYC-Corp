import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate()

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
            password,
            email,
        };

        let data= await fetch('https://buyc-corp-g63s.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        data=await data.json()
        alert(data.msg)
        localStorage.setItem("type",data.type)   
        localStorage.setItem("name",data.name) 
        localStorage.setItem("token",data.token) 
        if(data.type==='user'){
          navigate('../market-place')
          document.location.reload()
        }
        if(data.type==='dealer'){
          navigate('../sell-cars')   
          document.location.reload()
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='Enter your Email Address' title='Please Enter your Email Address' onChange={handleEmailChange} required />
            <input type="password" placeholder='Enter Password' minLength={8} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required onChange={handlePasswordChange} />
            <input type="submit" value='Login'  />
        </form>
    )
}

export default Login