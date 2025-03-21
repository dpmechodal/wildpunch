import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/ModernSchool/Modern School-03.jpg";
import ModernSchool1 from "../img/ModernSchool/Modern School-04.jpg";
import ModernSchool2 from "../img/ModernSchool/Modern School-05.jpg";
import ModernSchool3 from "../img/ModernSchool/mainbanner.mp4";
import ModernSchool4 from "../img/ModernSchool/Modern School-06.jpg";
import ModernSchool5 from "../img/ModernSchool/Modern School-07.jpg";
import ModernSchool6 from "../img/ModernSchool/Modern School-08.jpg";
import ModernSchool7 from "../img/ModernSchool/Modern School-09.jpg";
import ModernSchool8 from "../img/ModernSchool/Modern School-10.jpg";
import ModernSchool9 from "../img/ModernSchool/Modern School-11.jpg";
import ModernSchool10 from "../img/ModernSchool/Modern School-12.jpg";
import ModernSchool11 from "../img/ModernSchool/Modern School-13.jpg";
import ModernSchool12 from "../img/ModernSchool/Modern School-14.jpg";
import ModernSchool13 from "../img/ModernSchool/Modern School-15.jpg";
import ModernSchool14 from "../img/ModernSchool/Modern School-16.jpg";
import ModernSchool15 from "../img/ModernSchool/Modern School-17.jpg";
import ModernSchool16 from "../img/ModernSchool/Modern School-18.jpg";
import ModernSchool17 from "../img/ModernSchool/Modern School-19.jpg";
import ModernSchool18 from "../img/ModernSchool/Modern School-20.jpg";
import ModernSchool19 from "../img/ModernSchool/Modern School-21.jpg";
import ModernSchool20 from "../img/ModernSchool/Hoarding Gif.mp4";
import ModernSchool21 from "../img/ModernSchool/Modern School-22.jpg";
import ModernSchool22 from "../img/ModernSchool/Modern School-23.jpg";
import ModernSchool23 from "../img/ModernSchool/Modern School-24.jpg";
import ModernSchool24 from "../img/ModernSchool/Modern School-25.jpg";
import ModernSchool25 from "../img/ModernSchool/Modern School-26.jpg";
import ModernSchool26 from "../img/ModernSchool/Modern School-27.jpg";
import ModernSchool27 from "../img/ModernSchool/Modern School-28.jpg";
import ModernSchool28 from "../img/ModernSchool/Modern School-29.jpg";
import ModernSchool29 from "../img/ModernSchool/Modern School-30.jpg";
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
        <title>Modern School - Wildpunch Design & Digital</title>
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
                    <h4>Modern School</h4>
                </div>
                <div className="research microlit" data-aos="fade-up" data-aos-duration="200">
                    <p>Sector</p>
                    <h4>Educational</h4>
                </div>
                <div className="research microlit sdd" data-aos="fade-up" data-aos-duration="200">
                    <p>Role</p>
                    <h4><span>Strategy</span> <span>Branding</span> <span>Print</span> <span>Design</span> <span>Digital</span></h4>
                </div>
            </div>
            <h1 className="extra-size d-md-block d-none" data-aos="fade-up" data-aos-duration="200">
                A legacy institution ready 
                <br />
                for a modern makeover
            </h1>
            <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                A legacy institution ready <br />for a modern makeover
            </h1>
            <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
            Modern School, an institution from Lucknow steeped in history, recognized the need for a modern refresh. They partnered with us to create an identity that honored their legacy while embracing the future. This resulted in a dynamic transformation that spanned everything from a bold new visual language to a vibrant campus makeover. Intrigued to know how we created a brand Modern School that joins hands with tradition and innovation? Further a powerful presence that resonates with students, parents, and educators alike.</p>
            {showMore && (
                <p className="sec-section-white" data-aos="fade-up" data-aos-duration="300">
                    Modern School, a renowned institution with a rich academic history, sought a contemporary rebranding. They needed a brand identity that supported their legacy while simultaneously projecting a forward-thinking image appealing to students, parents, and educators. The solution was a cohesive and revitalized identity encompassing bold typography, a sophisticated color palette, and dynamic graphic elements. This new look was applied across various platforms, from merchandise like t-shirts and bags to essential collateral such as letterheads, brochures, and social media handles, seamlessly merging tradition with innovation. Furthermore, the campus itself was transformed with impactful signage, inspiring banners showcasing student success stories, and interactive legacy walls that brought the school's history to life. The result was more than just a rebrand; it was a revitalization of the school's atmosphere. Modern School now portrays a vibrant identity that resonates with all generations, transforming both their physical and digital presence into a powerful symbol of prestige and progress. This successful transformation demonstrates the impact of blending tradition with a modern and dynamic approach to education.
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
                <img src={ModernSchool1} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={ModernSchool2} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
    <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <video autoPlay muted loop className="img-fluid w-100" data-aos="fade-up" data-aos-duration="200">
                    <source src={ModernSchool3} type="video/mp4" />
                </video>
            </div>    
        </div>     
    </div>  
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={ModernSchool5} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={ModernSchool6} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool7} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool8} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool9} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool10} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool11} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={ModernSchool12} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={ModernSchool13} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool14} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={ModernSchool15} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={ModernSchool16} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={ModernSchool17} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={ModernSchool18} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool19} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <video autoPlay muted loop className="img-fluid" data-aos="fade-up" data-aos-duration="200">
                    <source src={ModernSchool20} type="video/mp4" />
                </video>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={ModernSchool21} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool22} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool24} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool25} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool26} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool27} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool28} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5 mb-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={ModernSchool29} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <Footer />
    </div>
  );
};

export default Home;
