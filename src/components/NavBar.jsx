import React, { useState } from 'react'
import '../css/NavBar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function NavBar() {


    return (

        <nav className='navBar'>
            <div className='navBar-container'>
                <ul className='nav-menu-left'>
                    <li className='navBar-item'>
                        <Link to='/' className='navBar-links'>Home</Link>
                    </li>
                    <li className='navBar-item'>
                        <Link to='/' className='navBar-links'>Services</Link>
                    </li>
                </ul>

                <Link to='/' className='navBar-logo-centered'>
                    <img src={logo} className='logo' alt="Bakers Bliss Logo" />
                </Link>

                <ul className='nav-menu-right'>
                    <li className='navBar-item'>
                        <Link to='/' className='navBar-links'>About</Link>
                    </li>
                    <li className='navBar-item'>
                        <Link to='/' className='navBar-links'>Reviews</Link>
                    </li>
                </ul>

            </div>

        </nav>

    )
}

export default NavBar