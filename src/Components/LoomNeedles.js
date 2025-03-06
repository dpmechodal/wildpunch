import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/LoomNeedles/mainbanner.mp4";
import LoomNeedles1 from "../img/LoomNeedles/Loom & Needles 4.mp4";
import LoomNeedles2 from "../img/LoomNeedles/Loom & Needles 5.mp4";
import LoomNeedles3 from "../img/LoomNeedles/sc_03.mp4";
import LoomNeedles4 from "../img/LoomNeedles/Website-08.jpg";
import LoomNeedles5 from "../img/LoomNeedles/Website-09.jpg";
import LoomNeedles6 from "../img/LoomNeedles/Website-10.jpg";
import LoomNeedles7 from "../img/LoomNeedles/Website-11.jpg";
import LoomNeedles8 from "../img/LoomNeedles/Website-12.jpg";
import LoomNeedles9 from "../img/LoomNeedles/Website-13.jpg";
import LoomNeedles10 from "../img/LoomNeedles/Loom & Needles 7.mp4";
import LoomNeedles11 from "../img/LoomNeedles/sc_02.mp4";
import LoomNeedles12 from "../img/LoomNeedles/Website-14.jpg";
import LoomNeedles13 from "../img/LoomNeedles/Loom & Needles 8.mp4";
import LoomNeedles14 from "../img/LoomNeedles/Website-18.jpg";
import LoomNeedles15 from "../img/LoomNeedles/Website-19.jpg";
import LoomNeedles16 from "../img/LoomNeedles/Website-20.jpg";
// import LoomNeedles17 from "../img/LoomNeedles/Dharti FINAL-17.jpg";
// import LoomNeedles18 from "../img/LoomNeedles/3.mp4";
// import LoomNeedles19 from "../img/LoomNeedles/Dharti FINAL-19.jpg";
// import LoomNeedles20 from "../img/LoomNeedles/Dharti FINAL-20.jpg";
// import LoomNeedles21 from "../img/LoomNeedles/Dharti FINAL-21.jpg";
// import LoomNeedles22 from "../img/LoomNeedles/6.mp4";
// import LoomNeedles23 from "../img/LoomNeedles/Dharti FINAL-22.jpg";
// import LoomNeedles24 from "../img/LoomNeedles/4.mp4";
// import LoomNeedles25 from "../img/LoomNeedles/Dharti FINAL-23.jpg";
// import LoomNeedles26 from "../img/LoomNeedles/6.mp4";
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
        <title>Loom Needles - Wildpunch Design & Digital</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="container-fluid first-section pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0" data-aos="fade-up" data-aos-duration="200">  
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={mainbanner} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="first-section bg-dark pt-0 mb-3">
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
                We made Room for Loom
            </h1>
            <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                We made Room for Loom
            </h1>
            <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
            Tired of counting sheep? Loom & Needles offered premium mattresses, but their message was lost in the noise. They connect with us to transform their brand into a sleep sanctuary. The digital campaign wasn't just about selling products; it was about selling better sleep. Discover how calming visuals, influencer collaborations, and a focus on the experience of rest propelled Loom & Needles from a mattress provider to a sleep revolution, capturing the hearts (and tired minds) of a nation. </p>
            {showMore && (
                <p className="sec-section-white" data-aos="fade-up" data-aos-duration="300">
                    Loom & Needles, a premium sleep solution, faced a challenge that their brand wasn't resonating with a market increasingly plagued by stress and sleepless nights. Their goal was to become the top choice for those seeking quality sleep. To achieve this, they launched the "Make Room for Loom" campaign, shifting their focus from simply selling mattresses to promoting a complete sleep experience. This involved creating a calming and minimalist aesthetic across all digital platforms, from social media to advertisements, mirroring the tranquility of restful sleep. Influencer collaborations showcased real sleep transformations, while engaging content addressed the widespread issue of fatigue. The campaign's impact was significant, boosting engagement, visibility, and conversions. By emphasizing the importance of sleep and using soothing visuals and storytelling, Loom & Needles became synonymous with peaceful nights and energized mornings, effectively transforming the brand into a movement for better sleep. "Making Room for Loom" ultimately meant making room for a more well-rested life.
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
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <video autoPlay muted loop className="img-fluid">
                    <source src={LoomNeedles1} type="video/mp4" />
                </video>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <video autoPlay muted loop className="img-fluid">
                    <source src={LoomNeedles2} type="video/mp4" />
                </video>
            </div>  
        </div>     
      </div> 
    <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={LoomNeedles3} type="video/mp4" />
                </video>
            </div>    
        </div>     
    </div> 
      <div className="container-fluid pl-pr-5">   
        <div className="row"> 
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={LoomNeedles4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>   
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={LoomNeedles5} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={LoomNeedles6} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row"> 
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={LoomNeedles7} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>   
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={LoomNeedles8} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={LoomNeedles9} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={LoomNeedles10} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={LoomNeedles11} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
            <img src={LoomNeedles12} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                {/* <video autoPlay muted loop className="img-fluid w-100">
                    <source src={LoomNeedles12} type="video/mp4" />
                </video> */}
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <video autoPlay muted loop className="img-fluid w-100">
                    <source src={LoomNeedles13} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={LoomNeedles14} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={LoomNeedles15} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={LoomNeedles16} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <Footer />
    </div>
  );
};

export default Home;
