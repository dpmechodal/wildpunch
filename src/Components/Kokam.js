import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/Kokam/Kokam-01.jpg";
import petals1 from "../img/Kokam/Kokam-02.jpg";
import petals2 from "../img/Kokam/Kokam-03.jpg";
import petals3 from "../img/Kokam/Kokam-04.jpg";
import petals4 from "../img/Kokam/Kokam-05.jpg";
import petals5 from "../img/Kokam/Kokam-06.jpg";
import petals6 from "../img/Kokam/Kokam-07.jpg";
import petals7 from "../img/Kokam/Kokam-08.jpg";
import petals8 from "../img/Kokam/Kokam-09.jpg";
import petals9 from "../img/Kokam/Kokam-10.jpg";
import petals10 from "../img/Kokam/Video 1_V01.mp4";
import petals11 from "../img/Kokam/Kokam-11.jpg";
import petals12 from "../img/Kokam/Kokam-12.jpg";
import petals13 from "../img/Kokam/Kokam-13.jpg";
import petals14 from "../img/Kokam/Kokam-14.jpg";
import petals15 from "../img/Kokam/Kokam-15.jpg";
import petals16 from "../img/Kokam/Video 2_V01.mp4";
import petals17 from "../img/Kokam/Video 3_V01.mp4";
import petals18 from "../img/Kokam/Kokam-16.jpg";
import petals19 from "../img/Kokam/Kokam-17.jpg";
import petals20 from "../img/Kokam/Kokam-18.jpg";
import petals21 from "../img/Kokam/Kokam-19.jpg";
import petals22 from "../img/Kokam/Kokam-20.jpg";
import petals23 from "../img/Kokam/Kokam-21.jpg";
import petals24 from "../img/Kokam/Kokam-22.jpg";
import petals25 from "../img/Kokam/Kokam-23.jpg";
import petals26 from "../img/Kokam/Kokam-24.jpg";
import petals27 from "../img/Kokam/Video 4_V01.mp4";
import petals28 from "../img/Kokam/Video 5_V01.mp4";
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
            <title>KOKAM PLY - Wildpunch Design & Digital</title>
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
                        <h4>KOKAM PLY</h4>
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
                Lorem Ipsum is simply
                dummy text of the printing
                and typesetting industry.
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
                    <img src={petals4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals5} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals6} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals7} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals8} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals9} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
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
                <div className="col-12 mb-3 p-0">
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
                    <img src={petals13} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals14} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals15} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals16} type="video/mp4" />
                    </video>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals17} type="video/mp4" />
                    </video>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals18} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals19} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals20} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals21} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals22} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                    <img src={petals24} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
                <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                    <img src={petals25} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div> 
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <img src={petals26} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals27} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <div className="container-fluid pl-pr-5">   
            <div className="row">
                <div className="col-12 mb-3 p-0">
                    <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                        <source src={petals28} type="video/mp4" />
                    </video>
                </div>    
            </div>     
          </div>
          <Footer />
        </div>
  );
};

export default Home;
