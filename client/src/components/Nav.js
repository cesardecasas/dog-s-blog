import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Header.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({authenticated, currentUser, className}) =>{
    return authenticated && currentUser ?  (
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
    ) : (
        <nav>
            <NavLink to='profile'>
                Profile
            </NavLink>
            <NavLink to='/pet'>
                My Pet
            </NavLink>
            <NavLink to='/discover'>
                Feed
            </NavLink>
        </nav>
    )
}