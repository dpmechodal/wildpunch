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
                            <li className={location.pathname === '/' ? 'active' : ''}><NavLink to={"/"}>HOME</NavLink></li>
                            <li className={location.pathname === '/WildWeAre' ? 'active' : ''}><NavLink to={"/WildWeAre"}>WILD WE ARE</NavLink></li>
                            <li className={location.pathname === '/WildWeDo' ? 'active' : ''}><NavLink to={"/WildWeDo"}>WILD WE DO</NavLink></li>
                            <li className={location.pathname === '/WildWildWork' ? 'active' : ''}><NavLink to={"/WildWildWork"}>WILD WILD WORK</NavLink></li>
                            <li className={location.pathname === '/BeWildWithUs' ? 'active' : ''}><NavLink to={"/BeWildWithUs"}>BE WILD WITH US</NavLink></li>
                            <li className={location.pathname === '/Contact' ? 'active' : ''}><NavLink to={"/Contact"}>CONTACT</NavLink></li>
                            <li><NavLink class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa-solid fa-xmark"></i></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
