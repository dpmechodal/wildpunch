import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import CursorErrow from "./CursorErrow";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import Splash from "./Splash";

const Contact = () => {
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
        <title>Contact Us - Wildpunch Design & Digital</title>
      </Helmet>
      <Splash />
      <Header />
      <div className="first-section bg-dark">
        <div className="container py-200 main-head">
          <h6 data-aos="fade-up" data-aos-duration="100">CONTACT US</h6>
          <h1 className="extra-size" data-aos="fade-up" data-aos-duration="200">
            <span>LET’S TALK.</span>
            <br />
            Got a project?
          </h1>
          <p className="mb-0" data-aos="fade-up" data-aos-duration="300">
            Discover boundless opportunities for collaboration with us. We
            welcome brands from every sector to join us in crafting compelling
            stories and strategies.{" "}
          </p>
        </div>
      </div>
      <div className="sec-section">
        <div className="container py-200">
          <div className="row g-lg-4 g-3 align-items-center">
            <div className="col-12 contact-lets">
              <h4 className="text-black mb-0" data-aos="fade-up" data-aos-duration="100">
                Let's transcend boundaries together and create impactful
                experiences that resonate with audiences worldwide. Your brand's
                journey begins here.
              </h4>
            </div>
            <div className="col-12">
              <form className="hello-form row g-md-3 g-0" data-aos="fade-up" data-aos-duration="200">
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
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Company"
                  />
                </div>
                <div class="mb-md-4 mb-3 pe-md-4 col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Role"
                  />
                </div>
                <div class="mb-md-4 mb-3 ps-md-4 col-md-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Industry"
                  />
                </div>
                <div class="mb-md-4 mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="mt-lg-5 mt-4" data-aos="fade-up" data-aos-duration="300">
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

export default Contact;
