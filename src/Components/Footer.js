import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='py-200 pb-0 bg-dark'>
        <div className="container-fluid">
            <div className="row p-20 g-lg-4 g-3">
                <div className="col-lg-3 col-12 col-12 footer-logo">
                    <Link to={"/"}><img src={logo} alt="" className="img-fluid" /></Link>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                    <div className='find-us'>
                        <h6>FIND US</h6>
                        <div className="address">
                            <p>Address</p>
                            <h5>3/10, Ground Floor, Prem Apartments, Sapru Marg, Lucknow, UP 226001</h5>
                        </div>
                        <div className="address">
                            <p>Telephone</p>
                            <h5><a href="tel:+918377053855">+91 83770 53855</a></h5>
                        </div>
                        <div className="address">
                            <p>E-mail</p>
                            <h5><a href="mailto:info@wildpunch.in">info@wildpunch.in</a></h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='footer-link'>
                        <ul>
                            <li><Link to={"#"}>ABOUT US</Link></li>
                            <li><Link to={"#"}>WHAT WE DO</Link></li>
                            <li><Link to={"#"}>OUR TEAM</Link></li>
                            <li><Link to={"Contact"}>CONTACT US</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <div className='work-with-us'>
                        <h4>Work with us</h4>
                        <p><a href="mailto:jobs@wildpunch.in">jobs@wildpunch.in</a></p>
                        <h4>Follow us</h4>
                        <div className="social-link">
                            <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i class="fa-brands fa-behance"></i></a>
                            <a href="#"><i class="fa-brands fa-dribbble"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>© Copyright 2024 <Link to={"/"}>Wildpunch Design</Link> Pvt. Ltd. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
