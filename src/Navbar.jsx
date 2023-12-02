import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
        <nav className='navbar_main'>
            <div className='nav_containt'>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/tableEdit'>About</Link></li>
                    <li><Link to='tableShow'>TableShow</Link></li>
                    <li><Link to='watch'>Watch</Link></li>
                </ul>
            </div>
        </nav>
        <Outlet/>
    </div>
  )
}
