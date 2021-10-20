import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>
            
            <div className='wrapper-form'>
            <form action="/aut/login" method="post">
                <input type="email" name='email' placeholder='enter your email' />
                <input type="password" name='password' placeholder='enter your password' />
                <button type='submit'>Send</button>
            </form>
            </div>
        </div>
    )
}

export default Login
