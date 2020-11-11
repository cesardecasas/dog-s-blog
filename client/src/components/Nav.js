import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Header.css'

export default ({authenticated, currentUser, className}) =>{
    return (
        <header className={className}>
            <nav>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to="/singup">
                    Sing Up
                </NavLink>
                <NavLink to='/login'>
                    Log In
                </NavLink>
            </nav>
        </header>
    )
}