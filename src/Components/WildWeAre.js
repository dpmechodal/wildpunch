import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Work from "./Work";
import People from "./People";
import Testimonials from "./Testimonials";
import Header from "./Header";
import Footer from "./Footer";
import MobilePeople from "./MobilePeople";
import CursorErrow from "./CursorErrow";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import Splash from "./Splash";

const WildWeAre = () => {
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
      <Helmet>
        <title>Wild We Are - Wildpunch Design & Digital</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="sec-section bg-third bg-black first-section">
        <div className="container py-200">
          <p data-aos="fade-up" data-aos-duration="200">
            WILD WE ARE
          </p>
          <h2
            className="mb-0 extra-size d-sm-block d-none"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <b>
              Not just an ad agency, <br />
              we add more to your brand.
            </b>
          </h2>
          <h2
            className="mb-0 extra-size d-sm-none d-block"
            data-aos="fade-up"
            data-aos-duration="400"
          >
            <b>
              Not just an <br />
              ad agency, <br />
              we add more <br />
              to your brand.
            </b>
          </h2>
        </div>
      </div>
      <div className="sec-section bg-four">
        <div className="container py-200">
          <div className="row g-lg-4 g-3 align-items-center">
            <div className="col-12">
              <h4
                className="text-black mb-md-4 mb-3"
                data-aos="fade-up"
                data-aos-duration="200"
              >
                While everyone is all rage about Tech, AI, GPTs etc.
              </h4>
              <h2 data-aos="fade-up" data-aos-duration="200">
                <b>We are too,</b>
              </h2>
              <h4
                className="text-black mb-md-4 mb-3"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                but we don't miss the most essential piece, People. We are all
                about people, you, your customers, us, mixed with the right
                amount of creativity, strategy & tech.
              </h4>
              <h4
                className="text-black mb-md-4 mb-3"
                data-aos="fade-up"
                data-aos-duration="400"
              >
                The right mix of all, makes a “Wildpunchˮ
              </h4>
              <h4
                className="text-black mb-md-4 mb-3"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                We don't tick boxes, we kick them. We only propose what you
                need, we advise what's right for you. We are not an agency, we
                work as your partners. We are objective driven, problem solvers.
                Like there are in Hollywood, think of us as fixers in the world
                of Advertising & Marketing. What to say,
              </h4>
              <h2 className="mb-0" data-aos="fade-up" data-aos-duration="600">
                We are a <b>Wild Bunch,</b>
              </h2>
              <h2 data-aos="fade-up" data-aos-duration="700">
                at <b>Wildpunch.</b>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-section bg-second" id="OurTeam">
        <div className="container py-200">
          <p className="mb-4" data-aos="fade-up" data-aos-duration="200">
            OUR PEOPLE
          </p>
          <h4
            class="text-black mb-md-4 mb-3"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            We are D2C Founders, fashion designers, real estate agents, chefs,
            vegetable sellers, lawyers, engineers, event managers and everything
            in between...
          </h4>
          <h4
            className="text-black mb-md-4 mb-3"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            For the love of advertising, we get to be everyone & everything,
            everyday!
          </h4>
        </div>
        <div className="container-fluid py-200 pt-0 px-0">
          <div
            className="d-sm-block d-none"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <People />
          </div>
          <div
            className="d-sm-none d-block"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <MobilePeople />
          </div>
        </div>
      </div>
      <div className="sec-section bg-third">
        <div className="container py-200 pb-0">
          <p className="mb-50" data-aos="fade-up" data-aos-duration="200">
            WILDPUNCH AT WORK
          </p>
        </div>
        <div
          className="container-fluid py-200 pt-0 px-0"
          data-aos="fade-up"
          data-aos-duration="200"
        >
          <Work />
        </div>
      </div>
      <div className="sec-section bg-secound">
        <div className="container py-200">
          <p data-aos="fade-up" data-aos-duration="200">
            Our clients are as Wild as us,
          </p>
          <h2
            className="mb-0 extra-sec-head"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            <b>
              They can’t say <br />
              what we talk about, so they <br />
              decided to drop facts.
            </b>
          </h2>
        </div>
      </div>
      <div
        className="container-fluid py-200 pt-0 px-0"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <Testimonials />
      </div>
      <div className="bg-third">
        <div className="container py-200 main-head main-foot">
          <div className="wild-flex">
            <h1
              className="mb-0 extra-size"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <span>LET’S TALK.</span>
              <br />
              Got a project?
            </h1>
            <div className="sec-section d-flex">
              <a href="/Contact" data-aos="fade-up" data-aos-duration="200">
                Contact Us <i class="fa-solid fa-arrow-right ms-2 arrow1"></i>
              </a>
            </div>
          </div>
          <p
            className="mt-4 pt-4 mb-0 border-top border-bottom-0"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Discover boundless opportunities for collaboration with us. We
            welcome brands from every sector to join us in crafting compelling
            stories and strategies. Let's transcend boundaries together and
            create impactful experiences that resonate with audiences worldwide.
            Your brand's journey begins here.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WildWeAre;
