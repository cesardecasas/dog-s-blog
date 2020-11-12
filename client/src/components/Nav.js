import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/Header.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({authenticated, currentUser, className}) =>{
    return authenticated && currentUser ?  (

            <header className={className}>
                <nav>
                    <NavLink to='/profile'>
                        Profile
                    </NavLink>
                    <NavLink to='/pet'>
                        My Pet
                    </NavLink>
                    <NavLink to='/feed'>
                        Feed
                    </NavLink>
                    <NavLink
                        activeClassName="nav-active"
                        to="/"
                        onClick={() => localStorage.clear()}
                    >
                        Sign Out
                    </NavLink>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </header>
    ) : (
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