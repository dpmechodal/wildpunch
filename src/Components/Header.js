import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

const Header = () => {
    const location = useLocation();
    return (
        <div>
            <nav class="navbar  navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link to={"/"} className='logo'>
                        <img src={logo} className='img-fluid' alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    MENU
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className={location.pathname === '/' ? 'active' : ''}><NavLink to={"/"}>Home</NavLink></li>
                            <li className={location.pathname === '/Contact' ? 'active' : ''}><NavLink to={"/Contact"}>Contact Us</NavLink></li>
                            <li><NavLink class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa-solid fa-xmark"></i></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
