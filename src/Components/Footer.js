import React, { useEffect } from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import CursorErrow from "./CursorErrow";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 200,
      once: false, // Whether animation should happen only once
      easing: "ease-in-out", // Default easing for AOS animations
    });
  }, []);
  return (
    <>
      <CursorErrow />
      <div className="py-200 pb-0 bg-dark">
        <div
          className="container-fluid">
          <div className="row p-20 g-lg-4 g-3">
            <div className="col-lg-3 col-12 col-12 footer-logo" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/"}>
                <img src={logo} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-12" data-aos="fade-up" data-aos-duration="200">
              <div className="find-us">
                <h6>FIND US</h6>
                <div className="address">
                  <p><i class="fa-solid fa-location-dot"></i></p>
                  <h5>
                    <a href="https://maps.app.goo.gl/CJbGe7iZEQxh4MQM8" target="_blank">3/10, Ground Floor, Prem Apartments, Sapru Marg, Lucknow, UP
                    226001</a>
                  </h5>
                </div>
                <div className="address">
                  <p><i class="fa-solid fa-phone"></i></p>
                  <h5>
                    <a href="tel:+918377053855">+91 83770 53855</a>
                  </h5>
                </div>
                <div className="address">
                  <p><i class="fa-solid fa-envelope"></i></p>
                  <h5>
                    <a href="mailto:info@wildpunch.in">info@wildpunch.in</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="300">
              <div className="footer-link">
                <ul>
                  <li>
                    <Link to={"/WildWeAre"}>WILD WE ARE</Link>
                  </li>
                  <li>
                    <Link to={"/WildWeDo"}>WHAT WE DO</Link>
                  </li>
                  <li>
                    <Link to={"/WildWildWork"}>WILD WILD WORK</Link>
                  </li>
                  <li>
                    <Link to={"/BeWildWithUs"}>BE WILD WITH US</Link>
                  </li>
                  <li>
                    <Link to={"/Contact"}>CONTACT</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="400">
              <div className="work-with-us">
                <h4>WORK WITH US</h4>
                <p>
                  <a href="mailto:jobs@wildpunch.in">jobs@wildpunch.in</a>
                </p>
                <div className="find-us">
                  <h6 className="mb-1">FOLLOW US ON</h6>
                </div>
                <div className="social-link">
                  <a href="https://www.facebook.com/wildpunchdesign">
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/wildpunch/">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/wildpunch-design/posts/?feedView=all">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © Copyright 2024 <Link to={"/"}>Wildpunch Design</Link> Pvt. Ltd.
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
