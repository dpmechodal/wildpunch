import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/SpringTek/grid-04.jpg";
import petals1 from "../img/SpringTek/grid-07.jpg";
import petals2 from "../img/SpringTek/grid-08.jpg";
import petals3 from "../img/SpringTek/grid-05.jpg";
import petals4 from "../img/SpringTek/grid-06.jpg";
import petals5 from "../img/SpringTek/grid-09.jpg";
import petals6 from "../img/SpringTek/grid-10.jpg";
import petals7 from "../img/SpringTek/grid-11.jpg";
import petals8 from "../img/SpringTek/3.mp4";
import petals9 from "../img/SpringTek/grid-14.jpg";
import petals10 from "../img/SpringTek/grid-12.jpg";
import petals11 from "../img/SpringTek/grid-13.jpg";
import petals12 from "../img/SpringTek/5.mp4";
import petals13 from "../img/SpringTek/grid-15.jpg";
import petals14 from "../img/SpringTek/2.mp4";
import petals15 from "../img/SpringTek/1.mp4";
import petals16 from "../img/SpringTek/grid-16.jpg";
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
            <title>SPRINGTEK - Wildpunch Design & Digital</title>
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
                        <h4>Springtek</h4>
                    </div>
                    <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                        <p>Sector</p>
                        <h4>Industrial</h4>
                    </div>
                    <div className="research microlit sdd" data-aos="fade-up" data-aos-duration="200">
                        <p>Role</p>
                        <h4><span>Strategy</span> <span>Design</span> <span>Digital</span></h4>
                    </div>
                </div>
                <h1 className="extra-size d-md-block d-none" data-aos="fade-up" data-aos-duration="200">
                    From Sleepy brand  
                    <br />
                    to Social star
                </h1>
                <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                    From Sleepy brand  <br />to Social star
                </h1>
                <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
                Springtek, a premium mattress company, connected with us to amplify their digital presence but struggled with lackluster engagement and brand recognition. Here we orchestrated a social media transformation, tailoring messaging for B2B and B2C audiences. A vibrant, pop-culture-driven strategy, featuring influencer collaborations and impactful campaigns like "Araam Hoga Toh Kaam Hoga," that drove Springtek from obscurity to digital stardom. We did much more than turning a simple sleep campaign into a cultural phenomenon, achieving over one million in organic reach and solidifying Springtek's position as a must-have for a well-rested life.
                </p>
                {showMore && (
                    <p className="sec-section-white" data-aos="fade-up" data-aos-duration="300">
                        Springtek, manufacturers and suppliers of high-quality mattresses, faced a challenge in translating their product's comfort and sleep solutions on the internet. Lacking brand recognition and struggling with low reach and engagement, they needed a significant social media boost. Since we stepped in, we've revamped Springtek's LinkedIn presence by creating targeted messaging. A fresh, pop culture-infused approach, including humor, relatability, and educational content, was implemented. Influencer collaborations and strategic campaigns. We handled everything from ideation and content creation to execution, ensuring Springtek's content resonated with audiences. The result was a dramatic increase in brand awareness, engagement, recognition, and reach, with organic reach exceeding millions. Digital campaigns transcended its initial purpose, evolving into a cultural movement that redefined how people perceive sleep, transforming Springtek from a mattress brand into an essential component of a well-rested lifestyle.
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
                <div className="col-12 mb-3 p-0">
                    <img src={petals1} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals2} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals3} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
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
                    <img src={petals7} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals8} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
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
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals12} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals13} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals14} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals15} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals16} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <Footer />
        </div>
  );
};

export default Home;
