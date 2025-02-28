import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import microlit1 from "../img/Product/Microlit_FINAL_Artboard.jpg";
import microlit2 from "../img/Product/Microlit_FINAL-02.jpg";
import microlit3 from "../img/Product/Microlit_FINAL-03.jpg";
import microlit4 from "../img/Product/Microlit_FINAL-04.jpg";
import microlit5 from "../img/Product/Microlit_FINAL-05.jpg";
import microlit6 from "../img/Product/Microlit_FINAL-06.jpg";
import microlit7 from "../img/Product/Microlit_FINAL-07.jpg";
import microlit8 from "../img/Product/Microlit_FINAL-08.jpg";
import microlit9 from "../img/Product/Microlit_FINAL-09.jpg";
import microlit10 from "../img/Product/Microlit_FINAL-10.jpg";
import microlit11 from "../img/Product/Microlit_FINAL-11.jpg";
import microlit12 from "../img/Product/Microlit_FINAL-12.jpg";
import microlit13 from "../img/Product/Microlit_FINAL-13.jpg";
import microlit14 from "../img/Product/Microlit_FINAL-14.jpg";
import microlit15 from "../img/Product/Microlit_FINAL-15.jpg";
import microlit16 from "../img/Product/Microlit_FINAL-16.jpg";
import microlit17 from "../img/Product/Microlit_FINAL-17.jpg";
import microlit18 from "../img/Product/Microlit_FINAL-18.jpg";
import microlit19 from "../img/Product/Microlit_FINAL-19.jpg";
import microlit20 from "../img/Product/Microlit_FINAL-20.jpg";
import microlit21 from "../img/Product/Microlit_FINAL-21.jpg";
import microlit22 from "../img/Product/Microlit_FINAL-22.jpg";
import microlit23 from "../img/Product/Microlit_FINAL-23.jpg";
import microlit24 from "../img/Product/Microlit_FINAL-24.jpg";
import microlit25 from "../img/Product/Microlit_FINAL-25.jpg";
import microlit26 from "../img/Product/Microlit_FINAL-26.mp4";
import microlit27 from "../img/Product/Microlit_FINAL_Wall_Calendar.mp4";
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
        <title>Home - Microlit</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="container-fluid first-section pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit1} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
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
                From Scientific
                <br />
                Excellence to Engaging
                <br />
                Brand Storytelling
            </h1>
            <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                From Scientific Excellence to Engaging Brand Storytelling
            </h1>
            <p className="mb-0 sec-section-white" data-aos="fade-up" data-aos-duration="200">
                Microlit, liquid handling pioneers possessed cutting-edge technology but lacked a
                vibrant brand presence. They partnered with us at WildPunch to bridge this gap,
                transforming complex scientific language into engaging content. From eye-catching
                visuals to a dynamic linkedIn presence and targeted digital ads, WildPunch crafted an
                interactive brand story. This fresh approach not only preserved Microlit's scientific
                integrity but also boosted engagement and conversions. Discover how WildPunch
                helped Microlit connect with their audience on a deeper level, turning scientific
                excellence into compelling conversations
            </p>
            <div className="mt-50 sec-section-white" data-aos="fade-up" data-aos-duration="400">
                <Link to={""} type="button">
                KNOW MORE <i class="fa-solid fa-arrow-right ms-2 arrow1"></i>
                </Link>
            </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5 my-3">   
        <div className="row">
            <div className="col-12 p-0">
                <img src={microlit1} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit2} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={microlit3} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={microlit4} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit5} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit6} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit7} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={microlit8} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={microlit9} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={microlit10} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={microlit11} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit12} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit13} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={microlit14} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={microlit15} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit16} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit17} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                
                <img src={microlit18} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                
                <img src={microlit19} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <video autoPlay muted loop className="img-fluid">
                    <source src={microlit27} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={microlit20} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={microlit21} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit22} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
                <img src={microlit24} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div>    
            <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
                <img src={microlit25} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
            </div> 
        </div>     
      </div>
      <div className="container-fluid pl-pr-5">   
        <div className="row">
            <div className="col-12 mb-3 p-0">
                <video autoPlay muted loop className="img-fluid">
                    <source src={microlit26} type="video/mp4" />
                </video>
            </div>    
        </div>     
      </div>
      {/* <section className="py-200 all-gifs">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="all-gifs-microlit">
                        <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                    </div>
                    <div className="all-gifs-microlit">
                        <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                    </div>
                    <div className="all-gifs-microlit">
                        <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-150">
                    <div className="all-gifs-microlit">
                        <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                    </div>
                    <div className="all-gifs-microlit">
                        <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                    </div>
                    <div className="all-gifs-microlit">
                        <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="all-gifs-microlit">
                        <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                    </div>
                    <div className="all-gifs-microlit">
                        <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                    </div>
                    <div className="all-gifs-microlit">
                        <img src={microlit23} className="img-fluid w-100" alt=""  data-aos="fade-up" data-aos-duration="200"/>
                    </div>
                </div>
            </div>
        </div>
      </section> */}
      <div className="first-section bg-dark pt-0">
        <div className="container py-200 main-head pb-0">
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
                From Scientific
                <br />
                Excellence to Engaging
                <br />
                Brand Storytelling
            </h1>
            <h1 className="extra-size d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                From Scientific Excellence to Engaging Brand Storytelling
            </h1>
            <p className="sec-section-white mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="200">
                Microlit, liquid handling pioneers possessed cutting-edge technology but lacked a
                vibrant brand presence. They partnered with us at WildPunch to bridge this gap,
                transforming complex scientific language into engaging content. From eye-catching
                visuals to a dynamic linkedIn presence and targeted digital ads, WildPunch crafted an
                interactive brand story. This fresh approach not only preserved Microlit's scientific
                integrity but also boosted engagement and conversions. Discover how WildPunch
                helped Microlit connect with their audience on a deeper level, turning scientific
                excellence into compelling conversations
            </p>
            {showMore && (
        <p
          className="sec-section-white"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          Microlit, a global leader in liquid handling, possessed cutting-edge technology and a
          strong reputation, but their brand lacked the vibrancy to truly reflect their excellence.
          They approached us at WildPunch to make a way to connect with their audience on a
          deeper level, crafting their brand more approachable and driving conversions, all while
          preserving their scientific integrity. At WildPunch, an inclusive brand refresh was
          undertaken, covering everything from visually appealing marketing materials to a
          dynamic LinkedIn presence that balanced human-centric storytelling and eye-catching
          visuals. Digital advertising campaigns were implemented to maximize conversions, and
          SEO strategies were in place to improve search visibility. Crucially, the complex
          scientific language surrounding Microlit's products was transformed into accessible,
          engaging content that resonated with researchers and industry professionals. Through
          all this, we created a revitalized brand that not only maintains its scientific credibility but
          also boasts a strong digital footprint, increased engagement, and higher conversion
          rates. Microlit's success demonstrates the power of combining innovation with effective
          storytelling, turning even complex scientific concepts into engaging conversations.
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
      <Footer />
    </div>
  );
};

export default Home;
