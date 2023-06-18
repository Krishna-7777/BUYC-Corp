import React from 'react'

function Register() {
    return (
        <form>
            <input type="email" placeholder='Enter your Email Address' title='Please Enter your Email Address' required />
            <input type="text" placeholder='Enter Name' required minLength={3} />
            <input type="password" placeholder='Enter Password' minLength={8} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
            <input type="submit" value='Register'/>
        </form>
    )
}

export default Register