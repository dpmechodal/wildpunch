import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import mainbanner from "../img/TeaSaga/The Tea Saaga-03.jpg";
import petals1 from "../img/TeaSaga/1.mp4";
import petals2 from "../img/TeaSaga/The Tea Saaga-04.jpg";
import petals3 from "../img/TeaSaga/The Tea Saaga-05.jpg";
import petals4 from "../img/TeaSaga/The Tea Saaga-06.jpg";
import petals5 from "../img/TeaSaga/The Tea Saaga-07.jpg";
import petals6 from "../img/TeaSaga/The Tea Saaga-08.jpg";
import petals7 from "../img/TeaSaga/The Tea Saaga-09.jpg";
import petals8 from "../img/TeaSaga/2.mp4";
import petals9 from "../img/TeaSaga/The Tea Saaga-10.jpg";
import petals10 from "../img/TeaSaga/The Tea Saaga-11.jpg";
import petals11 from "../img/TeaSaga/The Tea Saaga-12.jpg";
import petals12 from "../img/TeaSaga/The Tea Saaga-13.jpg";
import petals13 from "../img/TeaSaga/The Tea Saaga-14.jpg";
import petals14 from "../img/TeaSaga/The Tea Saaga-15.jpg";
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
        <title>TEA SAGA - Wildpunch Design & Digital</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="container-fluid first-section pl-pr-5">
        <div className="row">
          <div className="col-12 mb-3 p-0">
            <img
              src={mainbanner}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
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
              <h4>The Tea Saaga</h4>
            </div>
            <div
              className="research microlit"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <p>Sector</p>
              <h4>FMCG</h4>
            </div>
            <div
              className="research microlit sdd"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <p>Role</p>
              <h4>
                <span>Strategy</span> <span>Design</span> <span>Print</span>
              </h4>
            </div>
          </div>
          <h1
            className="extra-size d-md-block d-none"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            From Leaf to Label <br /> How We Brewed Tea Saaga’s Identity
          </h1>
          <h1
            className="extra-size d-md-none d-block"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            From Leaf to Label How We <br /> Brewed Tea Saaga’s Identity
          </h1>
          <p
            className="sec-section-white mb-md-4 mb-3"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Tea Saaga, an online store specializing in flavorful herbal teas and
            curated blends, wanted to make a strong entrance into the market.
            They partnered with Wildpunch to craft a unique brand identity that
            would reflect the essence of their premium offerings and appeal to
            tea enthusiasts.
          </p>
          <p
            className="sec-section-white mb-md-4 mb-3"
            data-aos="fade-up"
            data-aos-duration="200"
          >
            Our mission was to create a cohesive and memorable brand presence
            that highlighted quality, care, and the curated nature of each blend
            – right from the first sip to the final impression.
          </p>
          {showMore && (
            <>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                We started by designing Tea Saaga’s complete brand identity from
                the ground up. This included creating a visually captivating
                logo, choosing a vibrant yet elegant color palette, and
                establishing a consistent aesthetic that reflected the brand’s
                premium appeal.
              </p>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                Packaging was a key focus, as we wanted it to convey both
                quality and personality. We crafted sleek, stylish packaging
                that not only stood out on shelves but also told the story of
                each blend. Earthy, warm tones combined with intricate patterns
                brought out the brand's commitment to natural ingredients and
                flavorful experiences.
              </p>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                To further engage customers, we incorporated storytelling
                elements into the packaging, sharing the origins and benefits of
                each tea. This made every unboxing feel personal and thoughtful,
                building a connection right from the start.
              </p>
              <p
                className="sec-section-white"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                By blending creative design with thoughtful storytelling, we
                established Tea Saaga as a brand that resonates with tea lovers.
                This strong foundation positioned the brand as a go-to
                destination for those seeking unique, high-quality herbal
                blends.
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
          <div className="col-12 p-0">
            <video
              autoPlay
              muted
              loop
              className="img-fluid w-100"
              data-aos="fade-up"
              data-aos-duration="200"
            >
              <source src={petals1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="container-fluid pl-pr-5 mt-3">
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
          <div className="col-12 p-0">
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
      <div className="container-fluid pl-pr-5 mt-3">
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
          <div className="col-12 p-0">
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
      <div className="container-fluid pl-pr-5 mt-3">
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
              <source src={petals8} type="video/mp4" />
            </video>
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
          <div className="col-md-6 col-sm-6 col-12 mb-3 ps-0 pe-sm-2 pe-0">
            <img
              src={petals10}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={petals11}
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
              src={petals12}
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
              src={petals13}
              className="img-fluid w-100"
              alt=""
              data-aos="fade-up"
              data-aos-duration="200"
            />
          </div>
          <div className="col-md-6 col-sm-6 col-12 mb-3 pe-0 ps-sm-2 ps-0">
            <img
              src={petals14}
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

export default Home;
