import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Work from "./Work";
import People from "./People";
import Testimonials from "./Testimonials";
import Header from "./Header";
import Footer from "./Footer";
import CursorErrow from "./CursorErrow";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import Splash from "./Splash";

const BeWildWithUs = () => {
  const location = useLocation(); // Detect route changes

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
      <CursorErrow />
      <Helmet>
        <title>Be Wild With Us - Wildpunch Design & Digital</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="sec-section bg-third bg-black first-section">
        <div className="container py-200">
          <p data-aos="fade-up" data-aos-duration="200">BE WILD WITH US</p>
          <h2 className="mb-0 extra-size d-sm-block d-none" data-aos="fade-up" data-aos-duration="400">
            <b>Turn your wild ideas into game-changing realities.</b>
          </h2>
          <h2 className="mb-0 extra-size d-sm-none b-block" data-aos="fade-up" data-aos-duration="400">
            <b>
              Turn your <br />
              wild ideas into <br />
              game-changing <br />
              realities.
            </b>
          </h2>
        </div>
      </div>
      <div className="sec-section bg-second">
        <div className="container py-200">
          <h4 class="text-black mb-0" data-aos="fade-up" data-aos-duration="200">
            We get it, <br />
            finding a career that clicks can feel like a treasure hunt. Thatʼs
            why weʼre here to make the ride smoother, with opportunities as wild
            as your ambitions and a workplace that keeps you buzzing every
            single day.
          </h4>
        </div>
      </div>
      <div className="sec-section bg-four">
        <div className="container py-200">
          <div className="row g-lg-4 g-3 align-items-center">
            <div className="col-12">
              <h2 className="mb-0 take-the" data-aos="fade-up" data-aos-duration="200">
                Take the first step towards a rewarding future, start your
                journey with us today.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-section" data-aos="fade-up" data-aos-duration="200">
        <div className="container py-200">
          <div className="row g-lg-4 g-3 align-items-center">
            <div className="col-12">
              <form className="hello-form row g-md-3 g-0">
                <div class="mb-md-4 mb-3 pe-md-4 col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div class="mb-md-4 mb-3 ps-md-4 col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div class="mb-md-4 mb-3 pe-md-4 col-md-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-md-4 mb-3 ps-md-4 col-md-6">
                  <input type="tel" class="form-control" placeholder="Mobile" />
                </div>
                <div class="mb-md-4 mb-3 pe-md-4 col-md-6">
                  <select className="form-select">
                    <option>Content Strategist</option>
                    <option>Content Writer</option>
                    <option>Copywriter</option>
                    <option>Account Manager</option>
                    <option>Social Media Manager</option>
                    <option>Creative Direction</option>
                    <option>Art Direction</option>
                    <option>Graphic Designer</option>
                    <option>Motion Designer</option>
                    <option>Videographer</option>
                    <option>Photographer</option>
                    <option>Fashion Stylist</option>
                    <option>Public Relations</option>
                    <option>Digital Marketing</option>
                    <option>SEO Analyst</option>
                    <option>Web Developer</option>
                    <option>Business Development Manager</option>
                  </select>
                </div>
                <div class="mb-md-4 mb-3 ps-md-4 col-md-6 upload-button">
                  <input
                    type="file"
                    class="form-control"
                    placeholder="Your Industry"
                  />
                  <a href="#">
                    Attach Portfolio/CV <i class="fa-solid fa-paperclip"></i>
                  </a>
                </div>
                <div className="mt-lg-5 mt-4">
                  <Link to={"#"}>SUBMIT</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BeWildWithUs;
