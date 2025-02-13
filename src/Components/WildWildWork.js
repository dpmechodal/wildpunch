import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import a from "../img/work1.png";
import b from "../img/work2.png";
import c from "../img/work3.png";
import d from "../img/work4.png";
import e from "../img/work5.png";
import CursorErrow from "./CursorErrow";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import Splash from "./Splash";

const workItems = [
  {
    imgSrc: a,
    title: "DHARTI CO.",
    description: "Branding, Packaging, Digital",
  },
  {
    imgSrc: b,
    title: "LOOM & NEEDLES",
    description: "Branding, Digital",
  },
  {
    imgSrc: c,
    title: "MICROLIT",
    description: "Branding, Print, Digital",
  },
  {
    imgSrc: d,
    title: "MODERN SCHOOL",
    description: "Branding, Print",
  },
  {
    imgSrc: e,
    title: "SIDDHARTH AGRO ORGANICA",
    description: "Branding, Packaging, Digital",
  },
  {
    imgSrc: a,
    title: "DHARTI CO.",
    description: "Branding, Packaging, Digital",
  },
  {
    imgSrc: b,
    title: "LOOM & NEEDLES",
    description: "Branding, Digital",
  },
  {
    imgSrc: c,
    title: "MICROLIT",
    description: "Branding, Print, Digital",
  },
  {
    imgSrc: d,
    title: "MODERN SCHOOL",
    description: "Branding, Print",
  },
  {
    imgSrc: e,
    title: "PETALS FURNITURE",
    description: "Branding, Packaging, Digital",
  },
];

const WildWildWork = () => {
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
        <title>Wild Wild Work - Wildpunch Design & Digital</title>
      </Helmet>
      <Splash />
      <Header />
      <div className="sec-section bg-third bg-black first-section">
        <div className="container py-200">
          <p data-aos="fade-up" data-aos-duration="100">WILD WILD WORK</p>
          <h2 className="mb-0 extra-size" data-aos="fade-up" data-aos-duration="200">
            <b>Brands and experiences built on bold ideas. Explore our work.</b>
          </h2>
        </div>
      </div>
      <div className="sec-section">
        <div className="container py-200">
          <div className="row g-lg-4 g-3">
            {workItems.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-12">
                <div className="work-one">
                  <img
                    src={item.imgSrc}
                    className="img-fluid"
                    alt={item.title}  data-aos="fade-up" data-aos-duration="100"
                  />
                  <h5 data-aos="fade-up" data-aos-duration="200">{item.title}</h5>
                  <h6 data-aos="fade-up" data-aos-duration="300">{item.description}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-third">
        <div className="container py-200 main-head main-foot">
          <div className="wild-flex">
            <h1 className="mb-0 extra-size" data-aos="fade-up" data-aos-duration="100">
              <span>LET’S TALK.</span>
              <br />
              Got a project?
            </h1>
            <div className="sec-section d-flex" data-aos="fade-up" data-aos-duration="200">
              <a href="/Contact">
                Contact Us <i class="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
          <p className="mt-4 pt-4 mb-0 border-top border-bottom-0" data-aos="fade-up" data-aos-duration="300">
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

export default WildWildWork;
