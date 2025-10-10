import React, {useState} from 'react'
import '../css/NavBar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function NavBar(){

  return (

    <nav className='navBar'>
        <div className='navBar-container'>
            <Link to='/' className='navBar-logo-text'>
                <img src={logo} className='logo' />   Trvl
            </Link>
            <div className='navBar-items-list' >
                <ul>
                    <li className='navBar-item'>
                        <Link to='/' className='navBar-links'>Home</Link>
                    </li>
                    <li className='navBar-item'>
                        <Link to='/' className='navBar-links'>Services</Link>
                    </li>
                    <li className='navBar-item'>
                        <Link to='/' className='navBar-links'>About</Link>
                    </li>
                </ul>

                <div className='navBar-signup-btn'>Sign Up</div>
            </div>

        </div>

    </nav>

  )
}

export default NavBar