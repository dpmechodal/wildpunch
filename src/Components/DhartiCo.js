import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/Dharti/Dharti FINAL-03.jpg";
import dharti1 from "../img/Dharti/1.mp4";
import dharti2 from "../img/Dharti/2.mp4";
import dharti3 from "../img/Dharti/Dharti FINAL-05.jpg";
import dharti4 from "../img/Dharti/Dharti FINAL-06.jpg";
import dharti5 from "../img/Dharti/Dharti FINAL-07.jpg";
import dharti6 from "../img/Dharti/5.mp4";
import dharti7 from "../img/Dharti/Dharti FINAL-08.jpg";
import dharti8 from "../img/Dharti/Dharti FINAL-09.jpg";
import dharti9 from "../img/Dharti/6.mp4";
import dharti10 from "../img/Dharti/Dharti FINAL-10.jpg";
import dharti11 from "../img/Dharti/Dharti FINAL-11.jpg";
import dharti12 from "../img/Dharti/Dharti FINAL-12.jpg";
import dharti13 from "../img/Dharti/Dharti FINAL-13.jpg";
import dharti14 from "../img/Dharti/Dharti FINAL-14.jpg";
import dharti15 from "../img/Dharti/Dharti FINAL-15.jpg";
import dharti16 from "../img/Dharti/Dharti FINAL-16.jpg";
import dharti17 from "../img/Dharti/Dharti FINAL-17.jpg";
import dharti18 from "../img/Dharti/3.mp4";
import dharti19 from "../img/Dharti/Dharti FINAL-19.jpg";
import dharti20 from "../img/Dharti/Dharti FINAL-20.jpg";
import dharti21 from "../img/Dharti/Dharti FINAL-21.jpg";
import dharti22 from "../img/Dharti/DhartiCo_Calm Capsules.mp4";
import dharti23 from "../img/Dharti/Dharti FINAL-22.jpg";
import dharti24 from "../img/Dharti/4.mp4";
import dharti25 from "../img/Dharti/Dharti FINAL-23.jpg";
import dharti26 from "../img/Dharti/DhartiCo_Pills.mp4";
// import dharti27 from "../img/Dharti/Dharti WebsiteVideothree.mp4";
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
        <title>Dharti Co. - Wildpunch Design & Digital</title>
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
      <div className="first-section bg-dark pt-0 mb-3">
        <div className="container py-200 main-head product-p">
            <div className="micro-bottom d-client-sector">
                <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                    <p>Client</p>
                    <h4>Dharti Co</h4>
                </div>
                <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                    <p>Sector</p>
                    <h4>Industrial</h4>
                </div>
                <div className="research microlit sdd" data-aos="fade-up" data-aos-duration="200">
                    <p>Role</p>
                    <h4><span>Strategy</span> <span>Branding</span> <span>Design</span> <span>Digital</span></h4>
                </div>
            </div>
            <h1 className="extra-size d-md-block d-none" data-aos="fade-up" data-aos-duration="200">
                From Nature to Nurture:
                <br />
                Ayurveda’s grand entry into modern age
            </h1>
            <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                From Nature to Nurture: <br />Ayurveda’s grand entry into modern age
            </h1>
            <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
            From ancient Ayurvedic wisdom to modern digital presence, Dharti Co.'s journey is one of transformation. They connected with us, seeking to bridge the gap between age-old tradition and today's audience. A stunning visual identity was framed, hooking up with an online audience, and luxurious product offerings became a cherry on the cake. Dig in and observe how we helped Dharti Co. blossom into a premium wellness brand category, attracting customers towards the perfect blend of heritage and modern design.</p>
            {showMore && (
                <p className="sec-section-white" data-aos="fade-up" data-aos-duration="300">
                    Dharti Co., an ayurveda brand lacking brand identity, partnered with us at WildPunch to create their digital connect. We crafted a vibrant identity for Dharti Co., encompassing luxurious packaging, modern design, and Instagram-worthy details, that made them more accessible to today's audience. This was complemented by a website and a compelling instagram presence featuring cohesive, scroll-stopping grid pictures. Captivating concept shoots showcased the products, blending natural beauty with modern elegance. Finally, a thoughtful gifting lineup with combo packages positioned Dharti Co. as the premier choice for luxurious ayurvedic gifts. The result was a successful launch into the digital landscape, establishing Dharti Co. as a premium ayurvedic brand with a loyal following. Their website and instagram presence became powerful tools for engagement, and helped them stand out in the wellness industry, demonstrating the power of combining ancient wisdom with modern design.
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
            <div className="col-12 mb-3 p-0">
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={dharti1} type="video/mp4" />
                </video>
            </div>    
        </div>     
    </div>  
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <video autoPlay muted loop className="img-fluid" data-aos="fade-up" data-aos-duration="200">
                    <source src={dharti2} type="video/mp4" />
                </video>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={dharti3} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={dharti4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row"> 
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={dharti5} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>   
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={dharti6} type="video/mp4" />
                </video>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={dharti7} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row"> 
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={dharti8} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>   
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={dharti9} type="video/mp4" />
                </video>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={dharti10} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={dharti11} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={dharti12} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={dharti13} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={dharti14} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={dharti15} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row"> 
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={dharti16} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={dharti17} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>  
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={dharti18} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row"> 
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={dharti19} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={dharti20} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>  
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={dharti21} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row"> 
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={dharti22} type="video/mp4" />
                </video>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={dharti23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>  
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={dharti24} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={dharti25} className="img-fluid w-100" alt="" data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={dharti26} type="video/mp4" />
                </video>
            </div> 
        </div>     
      </div>
      <Footer />
    </div>
  );
};

export default Home;
