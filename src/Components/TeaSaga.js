import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/TeaSaga/The Tea Saaga-03.jpg";
import petals1 from "../img/TeaSaga/1.mp4";
import petals2 from "../img/TeaSaga/The Tea Saaga-04.jpg";
import petals3 from "../img/TeaSaga/The Tea Saaga-05.jpg";
import petals4 from "../img/TeaSaga/The Tea Saaga-06.jpg";
import petals5 from "../img/TeaSaga/The Tea Saaga-07.jpg";
import petals6 from "../img/TeaSaga/The Tea Saaga-08.jpg";
import petals7 from "../img/TeaSaga/The Tea Saaga-09.jpg";
import petals8 from "../img/TeaSaga/2.mp4";
import petals9 from "../img/TeaSaga/The Tea Saaga-10.jpg";
import petals10 from "../img/TeaSaga/The Tea Saaga-11.jpg";
import petals11 from "../img/TeaSaga/The Tea Saaga-12.jpg";
import petals12 from "../img/TeaSaga/The Tea Saaga-13.jpg";
import petals13 from "../img/TeaSaga/The Tea Saaga-14.jpg";
import petals14 from "../img/TeaSaga/The Tea Saaga-15.jpg";
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
            <title>TEA SAGA - Wildpunch Design & Digital</title>
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
                        <h4>The Tea Saaga</h4>
                    </div>
                    <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                        <p>Sector</p>
                        <h4>FMCG</h4>
                    </div>
                    <div className="research microlit sdd" data-aos="fade-up" data-aos-duration="200">
                        <p>Role</p>
                        <h4><span>Strategy</span> <span>Design</span> <span>Print</span></h4>
                    </div>
                </div>
                <h1 className="extra-size d-md-block d-none" data-aos="fade-up" data-aos-duration="200">
                    Brewed a Brand Transformation
                </h1>
                <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                    Brewed a Brand Transformation
                </h1>
                <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
                    Tea Saaga, an online store specializing in flavorful herbal teas and in-house curated blends, reached out to enhance its brand presence and customer experience. They partnered to create a cohesive brand identity that reflected the essence of their premium offerings. The focus was on designing packaging that communicated quality and care while ensuring an engaging and memorable experience for tea connoisseurs.
                </p>
                {showMore && (
                    <p className="sec-section-white" data-aos="fade-up" data-aos-duration="300">
                        As they reached out to us, we at Wild Punch embarked on a strategic approach to elevate Tea Saaga's brand identity, starting with a complete redesign of their product packaging. We crafted visually striking packaging that not only highlighted the premium quality of their herbal blends but also told a story about the carefully curated nature of each tea. The new packaging was designed to be both aesthetically pleasing and practical, allowing customers to feel connected to the brand from the moment they receive their order. In addition to packaging, we developed an identity that brought the Tea Saaga brand to life. With vibrant visuals and engaging content, we showcased the variety of blends, the origins of the ingredients, and the health benefits of each tea. Each design element, included in the sophisticated packaging made it more engaging which was meticulously crafted to showcase Tea Saaga’s commitment to quality and flavor. This cohesive branding strategy has strengthened the brand’s connection with tea enthusiasts, increasing customer loyalty and driving sales.
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
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals1} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5 mt-3">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals2} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals3} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 p-0">
                    <img src={petals4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5 mt-3">   
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
                <div className="col-12 p-0">
                    <img src={petals7} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5 mt-3">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals8} type="video/mp4" />
                    </video>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals9} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals10} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals11} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals12} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals13} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals14} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <Footer />
        </div>
  );
};

export default Home;
