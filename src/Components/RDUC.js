import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/RDUC/RDUC- WILDPUNCH 2-01.jpg";
import petals1 from "../img/RDUC/RDUC- WILDPUNCH 2-02.jpg";
import petals2 from "../img/RDUC/RDUC- WILDPUNCH 2-03.jpg";
import petals3 from "../img/RDUC/RDUC- WILDPUNCH 2-06.jpg";
import petals4 from "../img/RDUC/RDUC- WILDPUNCH 2-07.jpg";
import petals5 from "../img/RDUC/RDUC- WILDPUNCH 2-08.jpg";
import petals6 from "../img/RDUC/RDUC- WILDPUNCH 2-05.jpg";
import petals7 from "../img/RDUC/RDUC- WILDPUNCH 2-15.jpg";
import petals8 from "../img/RDUC/RDUC- WILDPUNCH 2-16.jpg";
import petals9 from "../img/RDUC/RDUC- WILDPUNCH 2-17.jpg";
import petals10 from "../img/RDUC/RDUC- WILDPUNCH 2-18.jpg";
import petals11 from "../img/RDUC/RDUC- WILDPUNCH 2-14.jpg";
import petals12 from "../img/RDUC/7.mp4";
import petals13 from "../img/RDUC/RDUC- WILDPUNCH 2-13.jpg";
import petals14 from "../img/RDUC/RDUC- WILDPUNCH 2-11.jpg";
import petals15 from "../img/RDUC/RDUC- WILDPUNCH 2-19.jpg";
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
        <title>RDUC - Wildpunch Design & Digital</title>
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
                    <h4>RDUC Jewels</h4>
                </div>
                <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                    <p>Sector</p>
                    <h4>Luxury</h4>
                </div>
                <div className="research microlit sdd" data-aos="fade-up" data-aos-duration="200">
                    <p>Role</p>
                    <h4><span>Strategy</span> <span>Print</span> <span>Design</span> <span>Digital</span></h4>
                </div>
            </div>
            <h1 className="extra-size d-md-block d-none" data-aos="fade-up" data-aos-duration="200">
                Timeless Glamour with Modern Twist
            </h1>
            <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                Timeless Glamour with Modern Twist
            </h1>
            <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
            RDUC Jewels underwent a complete brand transformation, blending classic elegance with modern aesthetics to appeal to both loyal customers and a new generation of jewelry fiends.  From stationery to in-store experiences, every detail was meticulously crafted to reflect the brand's timeless sophistication and showcase its exquisite jewelry. At WildPunch, we created a high-impact campaign, featuring stunning visuals in hoardings and print ads, further emphasizing RDUC Jewels' craftsmanship and inherent elegance. This comprehensive revitalization positioned RDUC Jewels as a global leader in the jewelry industry, seamlessly merging tradition with cutting-edge creativity.
            </p>
            {showMore && (
                <p className="sec-section-white" data-aos="fade-up" data-aos-duration="300">
                    RDUC Jewels visual identity was reimagined to resonate with both established audiences and a new wave of style-conscious individuals. This transformation seamlessly merged classic elegance with a contemporary aesthetic, resulting in a brand that portrays timeless sophistication. Every detail, from the striking typography on stationery like letterheads and business cards to the carefully chosen colour palette, was designed to enhance the RDUC Jewels experience and complement their exquisite jewelry. <br />
                    Along with this an impactful campaign, featuring jewelry in hoardings and print advertisements, showcased the brand's craftsmanship and inherent elegance. The in-store experience was also revolutionized, inviting customers to immerse themselves in RDUC Jewels rich heritage and innovative spirit through elegant displays, interactive kiosks, and curated vignettes. This comprehensive transformation wasn't just a cosmetic update; it was a journey that blended tradition with cutting-edge creativity, positioning RDUC Jewels as a brand that stands tall, radiating sophistication, and captivating jewelry enthusiasts globally.
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
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={petals4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img src={petals5} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
            <img src={petals6} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
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
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={petals9} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={petals10} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
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
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={petals12} type="video/mp4" />
                </video>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={petals13} className="img-fluid w-100" alt="" data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={petals14} className="img-fluid w-100" alt="" data-aos="fade-up" data-aos-duration="200"/>
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
      <Footer />
    </div>
  );
};

export default Home;
