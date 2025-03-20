import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import gif1 from "../img/Product/dhartico.gif";
import gif2 from "../img/Product/loom-and-needles.gif";
import gif3 from "../img/Product/microlit.gif";
import gif4 from "../img/Product/petals-furniture.gif";
import gif5 from "../img/Product/modern-school.gif";
import gif6 from "../img/Product/gate-way.gif";
import gif7 from "../img/Product/jabra.gif";
import gif8 from "../img/Product/rduc.svg";
import gif9 from "../img/Product/SIDDHARTH-AGRO.png";
import gif10 from "../img/Product/SPRINGTEK.svg";
import gif11 from "../img/Product/The-Tea-Saaga.svg";
import gif12 from "../img/Product/Trident-Hills.svg";
// import rducbanner from "../img/RDUC/RDUC reel_V01.mp4";
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
              <Link to={"/DhartiCo"}>
                <div className="work-one">
                  <img src={gif1} className="img-fluid" />
                  <h5>DHARTI CO.</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="400">
              <Link to={"/LoomNeedles"}>
                <div className="work-one">
                  <img src={gif2} className="img-fluid" />
                  <h5>LOOMS & NEEDLES</h5>
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
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/ModernSchool"}>
                <div className="work-one">    
                  <img src={gif5} className="img-fluid" />
                  <h5>MODERN SCHOOL</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="400">
              <Link to={"/PetalsFurniture"}>
                <div className="work-one"> 
                  <img src={gif4} className="img-fluid" />
                  <h5>PETALS FURNITURE</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="600">
              <Link to={"/RDUC"}>
                <div className="work-one">                    
                  {/* <video autoPlay muted loop className="img-fluid w-100">
                      <source src={rducbanner} type="video/mp4" />
                  </video> */}
                  <img src={gif8} className="img-fluid" />
                  <h5>RDUC</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/SiddharthAgro"}>
                <div className="work-one">   
                  <img src={gif9} className="img-fluid" />
                  <h5>SIDDHARTH AGRO</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="400">
              <Link to={"/SpringTek"}>
                <div className="work-one">   
                  <img src={gif10} className="img-fluid" />
                  <h5>SPRINGTEK</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="600">
              <Link to={"/TeaSaga"}>
                <div className="work-one">     
                  <img src={gif11} className="img-fluid" />
                  <h5>TEA SAGA</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/TridentHills"}>
                <div className="work-one">     
                  <img src={gif12} className="img-fluid" />
                  <h5>TRIDENT HILLS</h5>
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
