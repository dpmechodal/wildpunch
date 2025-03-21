import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/SiddharthAgro/Siddharth Agro-03.jpg";
import petals1 from "../img/SiddharthAgro/Siddharth Agro-04.jpg";
import petals2 from "../img/SiddharthAgro/Siddharth Agro-05.jpg";
import petals3 from "../img/SiddharthAgro/Siddharth Agro-06.jpg";
import petals4 from "../img/SiddharthAgro/2.mp4";
import petals5 from "../img/SiddharthAgro/Siddharth Agro-07.jpg";
import petals6 from "../img/SiddharthAgro/Siddharth Agro-08.jpg";
import petals7 from "../img/SiddharthAgro/3.mp4";
import petals8 from "../img/SiddharthAgro/Siddharth Agro-09.jpg";
import petals9 from "../img/SiddharthAgro/1.mp4";
import petals10 from "../img/SiddharthAgro/4.mp4";
import petals11 from "../img/SiddharthAgro/Siddharth Agro-10.jpg";
import petals12 from "../img/SiddharthAgro/Siddharth Agro-11.jpg";
import petals13 from "../img/SiddharthAgro/5.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation(); // Detect route changes
    const [showMore, setShowMore] = useState(false);
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
            <title>SIDDHARTH AGRO - Wildpunch Design & Digital</title>
          </Helmet>
          {/* <Splash /> */}
          <Header />
          <div className="container-fluid first-section pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">     
                    <img src={mainbanner} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="first-section bg-dark pt-0">
            <div className="container py-200 main-head product-p">
                <div className="micro-bottom d-client-sector">
                    <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                        <p>Client</p>
                        <h4>Siddharth Agro Organica</h4>
                    </div>
                    <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                        <p>Sector</p>
                        <h4>FMCG</h4>
                    </div>
                    <div className="research microlit sdd" data-aos="fade-up" data-aos-duration="200">
                        <p>Role</p>
                        <h4><span>Strategy</span> <span>Branding</span> <span>Print</span> <span>Design</span> <span>Digital</span></h4>
                    </div>
                </div>
                <h1 className="extra-size d-md-block d-none" data-aos="fade-up" data-aos-duration="200">
                    Cultivated a Brand Story
                </h1>
                <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                    Cultivated a Brand Story
                </h1>
                <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
                Siddharth Agro, a producer of premium organic products, reached us to enhance its presence and amplify its commitment to quality. They partnered to design a unified brand experience, spanning from a visually appealing website to innovative packaging and mockups. The goal was to showcase the brand's dedication to organic farming, quality ingredients, and flavor through a compelling visual and digital narrative. This multi-channel approach ensured a seamless and engaging brand story that resonated with customers across their consumer base.
                </p>
                {showMore && (
                    <p className="sec-section-white" data-aos="fade-up" data-aos-duration="300">
                        We at Wild Punch worked closely with Siddharth Agro to elevate their brand through a cohesive design strategy. We began by creating a user-friendly and visually striking website that showcased the brand's story, mission, and integrated their high-quality organic products. The website provided an engaging digital experience, providing customers a seamless experience to learn about the origins of the products, explore different offerings, and easily make purchases. Along with this, we also focused on tweaking Siddharth Agro's product packaging. The new designs not only highlighted the organic nature of the products but also featured vibrant, earthy tones that conveyed the brand's commitment to sustainability and natural goodness. Additionally, we developed detailed mockups to visualize how the packaging would translate across various product lines. This allowed Siddharth Agro to showcase their products in an impactful way. Through each touchpoint - website, packaging, and mockups we created a consistent and appealing brand identity that resonated with customers and reinforced Siddharth Agro's position as a trusted producer of quality, flavorful organic products.
                    </p>
                )}
    
          <div className="mt-50 sec-section-white">
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? "SHOW LESS" : "KNOW MORE"} 
              <i className="fa-solid fa-arrow-right ms-2 arrow1"></i>
            </button>
          </div>
            </div>
          </div>
          <div className="container-fluid pl-pr-5 mt-3">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals1} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals2} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals3} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals4} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals5} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals6} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals7} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals8} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals9} type="video/mp4" />
                    </video>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals10} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals11} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals12} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals13} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <Footer />
        </div>
  );
};

export default Home;
