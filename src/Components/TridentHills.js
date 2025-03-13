import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/TridentHills/Trident Hills Final-04.jpg";
import petals1 from "../img/TridentHills/Trident Hills Final-07.jpg";
import petals2 from "../img/TridentHills/Trident Hills Final-08.jpg";
import petals3 from "../img/TridentHills/Trident Hills Final-05.jpg";
import petals4 from "../img/TridentHills/Trident Hills Final-06.jpg";
import petals5 from "../img/TridentHills/Trident Hills Final-09.jpg";
import petals6 from "../img/TridentHills/Trident Hills Final-10.jpg";
import petals7 from "../img/TridentHills/Trident Hills Final-11.jpg";
import petals8 from "../img/TridentHills/3.mp4";
import petals9 from "../img/TridentHills/Trident Hills Final-14.jpg";
import petals10 from "../img/TridentHills/Trident Hills Final-12.jpg";
import petals11 from "../img/TridentHills/Trident Hills Final-13.jpg";
import petals13 from "../img/TridentHills/Trident Hills Final-15.jpg";
import petals14 from "../img/TridentHills/2.mp4";
import petals15 from "../img/TridentHills/1.mp4";
import petals16 from "../img/TridentHills/Trident Hills Final-17.jpg";
import petals17 from "../img/TridentHills/Trident Hills Final-10.jpg";
import petals18 from "../img/TridentHills/4.mp4";
import petals19 from "../img/TridentHills/5.mp4";
import petals20 from "../img/TridentHills/6.mp4";
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
            <title>TRIDENT HILLS - Wildpunch Design & Digital</title>
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
            <div className="container py-200 main-head">
                <div className="micro-bottom d-client-sector">
                    <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                        <p>Client</p>
                        <h4>Trident Hills</h4>
                    </div>
                    <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                        <p>Sector</p>
                        <h4>Real Estate</h4>
                    </div>
                    <div className="research microlit sdd" data-aos="fade-up" data-aos-duration="200">
                        <p>Role</p>
                        <h4><span>Strategy</span> <span>Branding</span> <span>Print</span> <span>Design</span> <span>Digital</span></h4>
                    </div>
                </div>
                <h1 className="extra-size d-md-block d-none" data-aos="fade-up" data-aos-duration="200">
                    Masters in Premium Living
                </h1>
                <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                    Masters in Premium Living
                </h1>
                <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
                    Trindent Hills was peeping for the improvements in their brand identity and asked for the full launch. They inquired that we craft an enhanced brand experience by conducting events to digital presence? So we are into designing, then kick started by showcasing property's luxurious amenities and key features.We developed a user-friendly website, where we offered virtual tours and easy access to sales. Along with this, we also designed collaterals that made their brand more accessible to customers. Engaging social media campaigns, built brand awareness and drove traffic. Each element, from design to messaging, reflected the sophisticated nature of Trident Hills, positioning it as a premier destination for homeowners.                </p>
                {showMore && (
                    <p className="sec-section-white" data-aos="fade-up" data-aos-duration="300">
                        Followed by this, we at Wildpunch collected the knicks and knacks and made way for the Trident Hills launch. First step was about creating a comprehensive brand presence. The project commenced with a high-profile launch event that generated significant buzz and attracted potential buyers. While complementing the event, a modern and intuitive website was developed to provide visitors with detailed information, virtual tours, and easy access to sales representatives. Furthermore, strategic social media campaign projects called Wind Song were implemented to build brand awareness, engage target audiences, and drive traffic to the website and sales offices. Further, we created visually interactive brochures that showcased the property's luxuriousness. Each element of the campaign, from the design aesthetic to the messaging, was carefully curated to reflect the sophisticated nature of Trident Hills. All this played a major role in positioning them as they can give a premium vibe for living. This integration created an impactful launch, establishing Trident Hills as a leader in luxury living.
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
                    <img src={petals3} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals1} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals2} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals5} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals17} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
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
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals14} type="video/mp4" />
                    </video>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals7} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
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
                    <img src={petals9} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
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
                        <source src={petals8} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          {/* <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals16} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals18} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div> */}
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals16} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals18} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals19} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals20} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <Footer />
        </div>
  );
};

export default Home;
