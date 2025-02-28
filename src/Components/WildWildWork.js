import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import a from "../img/work1.png";
import b from "../img/work2.png";
import c from "../img/work3.png";
import d from "../img/work4.png";
import e from "../img/work5.png";
import gif1 from "../img/Product/dhartico.gif";
import gif2 from "../img/Product/loom-and-needles.gif";
import gif3 from "../img/Product/microlit.gif";
import gif4 from "../img/Product/petals-furniture.mp4";
import CursorErrow from "./CursorErrow";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import Splash from "./Splash";

const WildWildWork = () => {
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 200,
      once: false, // Whether animation should happen only once
    });
    setTimeout(() => {
      AOS.refresh(); // Ensure AOS elements are reloaded after DOM changes
    }, 500); // Add a small delay if elements aren't detected immediately
  }, [location]);
  return (
    <div>
      <Helmet>
        <title>Wild Wild Work - Wildpunch Design & Digital</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="sec-section bg-third bg-black first-section">
        <div className="container py-200">
          <p data-aos="fade-up" data-aos-duration="200">WILD WILD WORK</p>
          <h2 className="mb-0 extra-size" data-aos="fade-up" data-aos-duration="400">
            <b>Brands and experiences built on bold ideas. Explore our work.</b>
          </h2>
        </div>
      </div>
      <div className="">
        <div className="container py-200">
          <div className="row g-lg-4 g-3">
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/Microlit"}>
                <div className="work-one">
                  <img src={gif1} className="img-fluid" />
                  <h5>DHARTI CO.</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="400">
              <Link to={"/Microlit"}>
                <div className="work-one">
                  <img src={gif2} className="img-fluid" />
                  <h5>LOOM & NEEDLES</h5>
                  <h6>Branding, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="600">
              <Link to={"/Microlit"}>
                <div className="work-one">
                  <img src={gif3} className="img-fluid" />
                  <h5>MICROLIT</h5>
                  <h6>Branding, Print, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="800">
              <Link to={"/Microlit"}>
                <div className="work-one">                  
                  <video autoPlay muted loop className="img-fluid">
                      <source src={gif4} type="video/mp4" />
                  </video>
                  <h5>PETALS FURNITURE</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-third">
        <div className="container py-200 main-head main-foot">
          <div className="wild-flex">
            <h1 className="mb-0 extra-size" data-aos="fade-up" data-aos-duration="200">
              <span>LET’S TALK.</span>
              <br />
              Got a project?
            </h1>
            <div className="sec-section d-flex" data-aos="fade-up" data-aos-duration="200">
              <a href="/Contact">
                Contact Us <i class="fa-solid fa-arrow-right ms-2 arrow1"></i>
              </a>
            </div>
          </div>
          <p className="mt-4 pt-4 mb-0 border-top border-bottom-0" data-aos="fade-up" data-aos-duration="300">
            Discover boundless opportunities for collaboration with us. We
            welcome brands from every sector to join us in crafting compelling
            stories and strategies. Let's transcend boundaries together and
            create impactful experiences that resonate with audiences worldwide.
            Your brand's journey begins here.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WildWildWork;
