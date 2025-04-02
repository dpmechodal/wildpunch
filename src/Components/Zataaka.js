import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
// import mainbanner from "../img/Kokam/Kokam-01.jpg";
import zataak1 from "../img/Zataaka/Zataak Website-01.jpg";
import zataak2 from "../img/Zataaka/Zataak Website-02.jpg";
import zataak3 from "../img/Zataaka/Zataak Website-03.jpg";
import zataak4 from "../img/Zataaka/Zataak Website-04.jpg";
import zataak5 from "../img/Zataaka/Zataak Website-05.jpg";
import zataak6 from "../img/Zataaka/Zataak Website-06.jpg";
import zataak7 from "../img/Zataaka/Zataak Website-07.jpg";
import zataak8 from "../img/Zataaka/Zataak Website-08.jpg";
import zataak9 from "../img/Zataaka/Zataak Website-09.jpg";
import zataak10 from "../img/Zataaka/Zataak Website-10.jpg";
import zataak11 from "../img/Zataaka/Video 3.mp4";
import zataak12 from "../img/Zataaka/Zataak Website-11.jpg";
import zataak13 from "../img/Zataaka/Zataak Website-12.jpg";
import zataak14 from "../img/Zataaka/Zataak Website-13.jpg";
import zataak15 from "../img/Zataaka/Zataak Website-14.jpg";
import zataak16 from "../img/Zataaka/Video 4.mp4";
import zataak17 from "../img/Zataaka/Zataak Website-15.jpg";
import zataak18 from "../img/Zataaka/Zataak Website-16.jpg";
import zataak19 from "../img/Zataaka/Zataak Website-17.jpg";
import zataak20 from "../img/Zataaka/Zataak Website-18.jpg";

import mainbanner from "../img/Zataaka/Video 1.mp4";

import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Zataaka = () => {
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
        <title>ZATAAK - Wildpunch Design & Digital</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="container-fluid first-section pl-pr-5">
        <div className="row">
          <div
            className="col-12 mb-3 p-0"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            <video autoPlay muted loop className="img-fluid w-100">
              <source src={mainbanner} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="first-section bg-dark pt-0">
        <div className="container py-200 main-head product-p">
          <div className="micro-bottom d-client-sector">
            <div
              className="research microlit"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <p>Client</p>
              <h4>Zataak</h4>
            </div>
            <div
              className="research microlit"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <p>Sector</p>
              <h4>Industrial</h4>
            </div>
            <div
              className="research microlit sdd"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <p>Role</p>
              <h4>
                <span>Strategy</span> <span>Branding</span>
                <span>Design</span> <span>Digital</span>
              </h4>
            </div>
          </div>
          <h1
            className="extra-size d-md-block d-none"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            A Recipe for Brand Success!
          </h1>
          <h1
            className="extra-size d-md-none d-block"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            A Recipe for Brand Success!
          </h1>
          <p
            className="sec-section-white mb-md-4 mb-3"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Zataak, a fresh and innovative online food delivery service, wanted
            to make a strong debut in the competitive Lucknow market. They
            partnered with Wildpunch to build a distinct brand identity and an
            engaging digital presence that would resonate with food lovers.
          </p>
          <p
            className="sec-section-white mb-md-4 mb-3"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            We started with a brand makeover, designing a sleek, modern logo
            that reflects Zataak's vibrant energy and commitment to fast,
            reliable food delivery. This new identity set the foundation for a
            cohesive brand presence across all digital touchpoints, from the
            mobile app to social media platfo
          </p>
          {showMore && (
            <>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                To create buzz and establish a local connection, we launched a
                social media strategy infused with the spirit of Lucknow. We
                crafted interactive and visually appealing posts that featured
                mouth-watering food imagery, local cultural elements, and catchy
                captions. This approach not only grabbed attention but also made
                the brand relatable to the local audience
              </p>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                Additionally, we focused on creating a smooth user experience by
                integrating the new visual identity into the mobile app design.
                The result was a dynamic, easy-to-navigate platform that matched
                the brand’s lively persona.
              </p>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                By combining an energetic brand identity with targeted digital
                engagement, we positioned Zataak as a top contender in the
                online food delivery market. The unified approach made the brand
                debut memorable, connecting with customers on both practical and
                emotional levels.
              </p>
            </>
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
            <img
              src={zataak1}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={zataak2}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5 mt-3">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
            <img
              src={zataak3}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={zataak4}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-12  p-0">
            <img
              src={zataak5}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5 mt-3">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
            <img
              src={zataak6}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={zataak7}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-12 mb-3 p-0">
            <img
              src={zataak8}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
            <img
              src={zataak9}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={zataak10}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div
            className="col-12 mb-3 p-0"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            <video autoPlay muted loop className="img-fluid w-100">
              <source src={zataak11} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
            <img
              src={zataak12}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={zataak13}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
            <img
              src={zataak14}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={zataak15}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-12 mb-3 p-0">
            <video
              autoPlay
              muted
              loop
              className="img-fluid w-100"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <source src={zataak16} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
            <img
              src={zataak17}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={zataak18}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-12 mb-3 p-0">
            <img
              src={zataak19}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-12 mb-3 p-0">
            <img
              src={zataak20}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Zataaka;
