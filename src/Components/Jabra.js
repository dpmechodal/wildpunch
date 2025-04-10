import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/Jabra/1.mp4";
import petals1 from "../img/Jabra/WP website jabra Layout New final-01.jpg";
import petals2 from "../img/Jabra/WP website jabra Layout New final-02.jpg";
import petals3 from "../img/Jabra/WP website jabra Layout New final-03.jpg";
import petals4 from "../img/Jabra/WP website jabra Layout New final-04.jpg";
import petals5 from "../img/Jabra/WP website jabra Layout New final-05.jpg";
import petals55 from "../img/Jabra/WP website jabra Layout New final-06.jpg";
import petals6 from "../img/Jabra/WP website jabra Layout New final-07.jpg";
import petals7 from "../img/Jabra/WP website jabra Layout New final-08.jpg";
import petals8 from "../img/Jabra/WP website jabra Layout New final-09.jpg";
import petals9 from "../img/Jabra/WP website jabra Layout New final-10.jpg";
import petals10 from "../img/Jabra/Video 4_V01.mp4";
import petals11 from "../img/Jabra/Video 4_V01.mp4";
import petals12 from "../img/Jabra/Video 5_V01.mp4";
import petals13 from "../img/Jabra/WP website jabra Layout New final-11.jpg";
import petals14 from "../img/Jabra/WP website jabra Layout New final-12.jpg";
import petals15 from "../img/Jabra/WP website jabra Layout New final-13.jpg";
import petals16 from "../img/Jabra/Video 6_V01.mp4";
import petals17 from "../img/Jabra/Video 7_V01.mp4";
import petals18 from "../img/Jabra/WP website jabra Layout New final-14.jpg";
import petals19 from "../img/Jabra/WP website jabra Layout New final-15.jpg";
import petals20 from "../img/Jabra/WP website jabra Layout New final-16.jpg";
import petals21 from "../img/Jabra/WP website jabra Layout New final-17.jpg";
import petals22 from "../img/Jabra/WP website jabra Layout New final-18.jpg";
import petals23 from "../img/Jabra/WP website jabra Layout New final-19.jpg";
import petals24 from "../img/Jabra/Video 8_V01.mp4";
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
        <title>JABRA - Wildpunch Design & Digital</title>
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
              <h4>JABRA CONNECT</h4>
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
                <span>Strategy</span> <span>Design</span> <span>Digital</span>
              </h4>
            </div>
          </div>
          <h1
            className="extra-size d-md-block d-none"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Making the brand LOUD & CLEAR
          </h1>
          <h1
            className="extra-size d-md-none d-block"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Making the brand LOUD & CLEAR
          </h1>
          <p
            className="sec-section-white mb-md-4 mb-3"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Jabra Connect, renowned for its top-notch audio devices and
            high-quality video webcams, aimed to strengthen its presence in the
            competitive tech market. They partnered with Wildpunch to build a
            cohesive brand strategy that would resonate with both end-users and
            B2B channel partners.
          </p>
          <p
            className="sec-section-white mb-md-4 mb-3"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Our mission was to create a unified brand experience that
            highlighted Jabra Connect's innovation, reliability, and superior
            performance across digital and physical platforms.
          </p>
          {showMore && (
            <>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                We kicked off by designing dynamic LinkedIn campaigns to
                showcase Jabra Connect’s cutting-edge audio and video solutions.
                These campaigns featured product demos, user experiences, and
                tech insights, effectively building brand awareness and driving
                customer engagement.
              </p>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                To enhance their B2B connections, we developed strategic
                marketing initiatives that aligned with Jabra Connect’s values
                of quality and innovation. Through targeted ads and interactive
                content, we established strong links with business partners,
                boosting visibility and driving sales.
              </p>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                By blending impactful social media presence with strategic B2B
                outreach, we positioned Jabra Connect as a leader in the tech
                space. The seamless integration of digital marketing efforts not
                only elevated the brand but also strengthened its connections
                with both customers and partners.
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
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-12 mb-3 p-0">
            <img
              src={petals1}
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
              src={petals2}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={petals3}
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
              src={petals4}
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
              src={petals5}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={petals55}
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
              src={petals6}
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
              src={petals7}
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
              src={petals8}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={petals9}
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
              <source src={petals10} type="video/mp4" />
            </video>
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
              <source src={petals11} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
            <video
              autoPlay
              muted
              loop
              className="img-fluid w-100"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <source src={petals12} type="video/mp4" />
            </video>
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={petals13}
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
              src={petals14}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={petals15}
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
              <source src={petals16} type="video/mp4" />
            </video>
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
              <source src={petals17} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5">
        <div className="row">
          <div className="col-12 mb-3 p-0">
            <img
              src={petals18}
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
              src={petals19}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={petals20}
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
              src={petals21}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={petals22}
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
              src={petals23}
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
              <source src={petals24} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
