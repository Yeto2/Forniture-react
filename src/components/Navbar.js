import React from 'react'
// import logo from '../images/logo/logo.png'

function Navbar() {
return (
    <nav className='nav navbar my-3'>
        <div className='container d-flex justify-content-between'>
            <div className='logo'>
                Stor<span>key</span>
            </div>
            <ul className='list'>
                <li className="home"><a src="">Home</a></li>
                <li><a src="">New Arrival</a></li>
                <li><a src="">Features</a></li>
                <li><a src="">Blog</a></li>
                <li><a src="">Contact</a></li>
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