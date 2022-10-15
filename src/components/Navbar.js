import React from 'react'
// import logo from '../images/logo/logo.png'

function Navbar() {
return (
    <nav className='nav navbar my-3'>
        <div className='container d-flex justify-content-between'>
            <div className='logo'>
                Atatwla
            </div>
            <ul className='list'>
                <li>Home</li>
                <li>New Arrival</li>
                <li>Features</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <div className="icons">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-sharp fa-solid fa-gear"></i>
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    </nav>
)
}

export default Navbar