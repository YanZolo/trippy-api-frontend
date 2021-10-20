import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <div>
            <nav>
                <div className='brand'>Hotels</div>
                <ul>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink exact to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
