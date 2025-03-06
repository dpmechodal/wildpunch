import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import microlitlogo from "../img/Product/Logo.mp4";
import petals1 from "../img/Petals/Petals FINAL-01.jpg";
import petals2 from "../img/Petals/Petals FINAL-02.jpg";
import petals3 from "../img/Petals/1.mp4";
import petals4 from "../img/Petals/Petals FINAL-03.jpg";
import petals5 from "../img/Petals/2.mp4";
import petals6 from "../img/Petals/Petals WebsiteVideoone.mp4";
import petals7 from "../img/Petals/Petals FINAL-04.jpg";
import petals8 from "../img/Petals/Petals FINAL-05.jpg";
import petals9 from "../img/Petals/Petals WebsiteVideotwo.mp4";
import petals10 from "../img/Petals/Petals FINAL-06.jpg";
import petals11 from "../img/Petals/Petals FINAL-07.jpg";
import petals12 from "../img/Petals/Petals FINAL-08.jpg";
import petals13 from "../img/Petals/Petals WebsiteVideothree.mp4";
import petals14 from "../img/Petals/Petals FINAL-09.jpg";
import petals15 from "../img/Petals/Petals FINAL-10.jpg";
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
        <title>Petals Furniture - Wildpunch Design & Digital</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="container-fluid first-section pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">         
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={microlitlogo} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="first-section bg-dark pt-0">
        <div className="container py-200 main-head">
            <div className="row g-4 micro-bottom">
                <div className="col-lg-4 col-sm-6 col-6">
                    <div className="research microlit">
                        <p data-aos="fade-up" data-aos-duration="200">Client</p>
                        <h4 data-aos="fade-up" data-aos-duration="200">Microlit</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-6">
                    <div className="research microlit">
                        <p data-aos="fade-up" data-aos-duration="200">Sector</p>
                        <h4 data-aos="fade-up" data-aos-duration="200">Industrial</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-12">
                    <div className="research microlit sdd">
                        <p data-aos="fade-up" data-aos-duration="200">Role</p>
                        <h4 data-aos="fade-up" data-aos-duration="200"><span>Strategy</span> <span>Design</span> <span>Digital</span></h4>
                    </div>
                </div>
            </div>
            <h1 className="extra-size d-md-block d-none" data-aos="fade-up" data-aos-duration="200">
                Furniture in need 
                <br />
                of a Spotlight:
                <br />
                Journey from Zero to Hero
            </h1>
            <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                Furniture in need of a Spotlight:  <br />Journey from Zero to Hero
            </h1>
            <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
                Petals Furniture, suppliers of practical plastic yet stylish furniture, was facing a digital dilemma: a great product, but minimal online presence. We crafted a digital strategy, weaving together engaging social media content, influencer collaborations and website optimization. This resulted in Petals witnessing explosive growth, gaining followers and engagement like never before. Check out how we at WildPunch and our team transformed a brand's digital footprint and built a thriving online community.
            </p>
            {showMore && (
                <p className="sec-section-white" data-aos="fade-up" data-aos-duration="300">
                    Petals as a brand that provides high-quality plastic furniture with nationwide delivery, faced the challenge of establishing a strong online presence to drive sales. Lacking a digital footprint, they needed to build trust and showcase the stylish, as well as practical nature of their products. We welcomed them and a comprehensive digital strategy was created that involved focusing on social media, linkedin, and website optimization. The brand's online presence was transformed, incorporating authentic content like user-generated instagram reels and customer stories to connect with a wider audience. Along with this, strategic influencer partnerships further expanded their reach. Within a week or two of the first campaign, Petals Furniture saw remarkable growth, gaining 1K+ followers and experiencing significant engagement. This digital transformation not only increased their audience but also enhanced strong brand recall and built a community, demonstrating the power of combining quality products with effective digital marketing to drive conversions.
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
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={petals3} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={petals4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={petals5} type="video/mp4" />
                </video>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={petals6} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={petals7} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={petals8} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={petals9} type="video/mp4" />
                </video>
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
            <div className="col-12 mb-3 p-0">
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={petals13} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={petals14} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={petals15} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <Footer />
    </div>
  );
};

export default Home;
