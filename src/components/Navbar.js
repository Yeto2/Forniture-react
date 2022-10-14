import React from 'react'
import logo from '../images/logo/logo.png'

function Navbar() {
return (
    <nav>
        <div className='container d-flex justify-content-between'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <ul className='list'>
                <li>Home</li>
                <li>New Arrival</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div className="icons">
                icons here
            </div>
        </div>
    </nav>
)
}

export default Navbar