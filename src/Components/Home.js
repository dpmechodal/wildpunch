import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Work from "./Work";
import Testimonials from "./Testimonials";
import Marquee from "./Marquee";
import Splash from "./Splash";
import Header from "./Header";
import Footer from "./Footer";
import workone from "../img/work-1.svg";
import worktwo from "../img/work-2.svg";
import workthree from "../img/work-3.svg";
import workfour from "../img/work-4.svg";
import workfive from "../img/work-5.svg";
import gif1 from "../img/Product/dhartico.gif";
import gif2 from "../img/Product/loom-and-needles.gif";
import gif3 from "../img/Product/microlit.gif";
import gif4 from "../img/Product/petals-furniture.gif";
import gif5 from "../img/Product/modern-school.gif";
import a from "../img/1.svg";
import b from "../img/2.svg";
import c from "../img/3.svg";
import d from "../img/4.svg";
import e from "../img/5.svg";
import f from "../img/6.svg";
import g from "../img/7.svg";
import h from "../img/8.svg";
import i from "../img/9.svg";
import j from "../img/10.svg";
import k from "../img/11.svg";
import l from "../img/12.svg";
import m from "../img/13.svg";
import n from "../img/14.svg";
import o from "../img/15.svg";
import p from "../img/16.svg";
import q from "../img/17.svg";
import r from "../img/18.svg";
import s from "../img/19.svg";
import t from "../img/20.svg";
import u from "../img/21.svg";
import v from "../img/22.svg";
import w from "../img/23.svg";
import x from "../img/24.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Home = () => {
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
        <title>Home - Wildpunch Design & Digital</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="first-section bg-dark">
        <div
          className="container py-300 main-head">
          <h1 className="extra-size" data-aos="fade-up" data-aos-duration="200">
            Catalysts for Change
            <br />
            Agitators for Growth.
          </h1>
          <p className="mb-0 d-sm-block d-none" data-aos="fade-up" data-aos-duration="400">
            We're the spark that ignites brands. As agents of change, <br />we stir the pot, challenge the norm <br />and disrupt industries.
          </p>
          <p className="mb-0 d-sm-none d-block" data-aos="fade-up" data-aos-duration="400">
            We're the spark that ignites brands. <br />As agents of change, we stir the pot, <br />challenge the norm and disrupt industries.
          </p>
        </div>
      </div>
      <div className="sec-section bg-second">
        <div className="container py-200">
          <p data-aos="fade-up" data-aos-duration="200">WHO WE ARE</p>
          <h2 data-aos="fade-up" data-aos-duration="400">
            Not just an ad agency,
            <br />
            we <b>add</b> more to your brand.
          </h2>
          <div className="d-flex" data-aos="fade-up" data-aos-duration="600">
            <Link to={"/WildWeAre"}>
              READ MORE <i class="fa-solid fa-arrow-right ms-2 arrow1"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="sec-section ">
        <div className="container py-200 pb-0">
          <p className="mb-50" data-aos="fade-up" data-aos-duration="200">
            WILD WILD WORK
          </p>
        </div>
      </div>
      <div className="">
        <div className="container">
          <div className="row g-lg-4 g-3">
            <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/DhartiCo"}>
                <div className="work-one">
                  <img src={gif1} className="img-fluid w-100" />
                  <h5>DHARTI CO.</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/LoomNeedles"}>
                <div className="work-one">
                  <img src={gif2} className="img-fluid w-100" />
                  <h5>LOOMS & NEEDLES</h5>
                  <h6>Branding, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-12" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/Microlit"}>
                <div className="work-one">
                  <img src={gif3} className="img-fluid w-100" />
                  <h5>MICROLIT</h5>
                  <h6>Branding, Print, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/ModernSchool"}>
                <div className="work-one">    
                  <img src={gif5} className="img-fluid w-100" />
                  <h5>MODERN SCHOOL</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <Link to={"/PetalsFurniture"}>
                <div className="work-one">         
                  <img src={gif4} className="img-fluid w-100" />
                  <h5>PETALS FURNITURE</h5>
                  <h6>Branding, Packaging, Digital</h6>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-section ">
        <div className="container py-200 pt-0">
          <div className="mt-50" data-aos="fade-up" data-aos-duration="200">
            <Link to={"/WildWildWork"}>
              ALL PROJECTS <i class="fa-solid fa-arrow-right ms-2 arrow1"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="sec-section bg-third">
        <div
          className="container py-200">
          <p data-aos="fade-up" data-aos-duration="200">WHAT WE DO</p>
          <h4 data-aos="fade-up" data-aos-duration="400">
            Everyone has great Ideas but the world<br/> has always needed executioners.<br/>
            We are the right mix of
          </h4>
          <h2 data-aos="fade-up" data-aos-duration="600">
            <b>Ideas, strategy, tech & execution.</b>
          </h2>
          <div className="row g-xl-5 g-4 head-color">
            <div className="col-lg-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="200">
              <div className="research">
                <h4>Research</h4>
                <p>Your brand's compass.</p>
                <p>We find your north.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="200">
              <div className="research">
                <h4>Branding</h4>
                <p>Your brand's soul.</p>
                <p>We find your north.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="200">
              <div className="research">
                <h4>Advertising</h4>
                <p>Your brand's compass.</p>
                <p>We make it heard.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="200">
              <div className="research">
                <h4>Design</h4>
                <p>Your brand's blueprint.</p>
                <p>We find your north.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="200">
              <div className="research">
                <h4>Marketing</h4>
                <p>Your brand's roadmap.</p>
                <p>We chart the course.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="200">
              <div className="research">
                <h4>Digital</h4>
                <p>Your brand's universe.</p>
                <p>We create its galaxies.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="200">
              <div className="research">
                <h4>Films & Production</h4>
                <p>Your brand's story.</p>
                <p>We bring it to life.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-6" data-aos="fade-up" data-aos-duration="200">
              <div className="research">
                <h4>Influencer Marketing</h4>
                <p>Your brand's compass.</p>
                <p>We find your north.</p>
              </div>
            </div>
          </div>
          <div className="mt-50" data-aos="fade-up" data-aos-duration="400">
            <Link to={"/WildWeDo"}>
              READ MORE <i class="fa-solid fa-arrow-right ms-2 arrow1"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="sec-section bg-secound">
        <div
          className="container py-200">
          <p data-aos="fade-up" data-aos-duration="200">OUR CLIENTS</p>
          <h2 data-aos="fade-up" data-aos-duration="200">
            <b>What We PUNCHED</b>
          </h2>
          <h4 className="text-black" data-aos="fade-up" data-aos-duration="300">
            Every Brandʼs Different, Every Category Excites Us,{" "}
            <b>Nothing is Boring!</b>
          </h4>
          <div className="row align-items-center mt-1 g-lg-5 g-4 hw-img">
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={a} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="200"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={b} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="200"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={c} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="300"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={d} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="400"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={e} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="500"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={f} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="600"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={g} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="700"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={h} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="800"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={i} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="900"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={j} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1000"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={k} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1100"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={l} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1200"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={m} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1300"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={n} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1400"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={o} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1500"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={p} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1600"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={q} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1700"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={r} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1800"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={s} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="1900"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={t} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="2000"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={u} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="2100"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={v} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="2200"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={w} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="2300"/>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-4 text-center">
              <img src={x} alt="" className="img-fluid"  data-aos="fade-up" data-aos-duration="2400"/>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-section bg-four">
        <div
          className="container py-200">
          <p data-aos="fade-up" data-aos-duration="200">HOW WE DO IT IN THE WILD</p>
          <h2 data-aos="fade-up" data-aos-duration="200">
            <b>The WILD Approach</b>
          </h2>
          <h4 className="text-black" data-aos="fade-up" data-aos-duration="300">
            At Wildpunch, we believe that extraordinary results stem from an
            extraordinary process.
          </h4>
          <div className="mt-50" data-aos="fade-up" data-aos-duration="400">
            <Link to={"#"}>
              KNOW MORE <i class="fa-solid fa-arrow-right ms-2 arrow1"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="sec-section bg-third">
        <div
          className="container py-200 pb-0">
          <p className="mb-50" data-aos="fade-up" data-aos-duration="200">WILDPUNCH AT WORK</p>
        </div>
        <div>
          <div className="container-fluid py-200 pt-0 px-0" data-aos="fade-up" data-aos-duration="200">
            <Work />
          </div>
        </div>
      </div>
      <div className="container-fluid py-200 px-0" data-aos="fade-up" data-aos-duration="200">
        <Testimonials />
      </div>
      <div className="container-fluid px-0 bg-mar" data-aos="fade-up" data-aos-duration="200">
        <Marquee />
      </div>
      <div className="sec-section">
        <div
          className="container py-200">
          <div className="row g-lg-4 g-3 align-items-center">
            <div className="col-md-6 col-12">
              <h2 data-aos="fade-up" data-aos-duration="200">
                <b>Hello there,</b>
              </h2>
              <h4 className="text-black mb-md-4 mb-3 d-md-block d-none" data-aos="fade-up" data-aos-duration="200">
                What makes us different?<br/> We will be there, <b>Always!</b>
              </h4>
              <h4 className="text-black mb-md-4 mb-3 d-md-none d-block" data-aos="fade-up" data-aos-duration="200">
                What makes us different? We will be there, <b>Always!</b>
              </h4>
              <h4 className="text-black" data-aos="fade-up" data-aos-duration="300">
                Unable to reach customers? <b>Reach out to us!</b>
              </h4>
            </div>
            <div className="col-md-6 col-12" data-aos="fade-up" data-aos-duration="400">
              <form className="hello-form">
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="mb-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control"
                    rows="3"
                    placeholder="Description"
                  ></textarea>
                </div>
                <div className="mt-md-5 mt-4 ">
                  <Link to={"#"}>
                    GET STARTED <i class="fa-solid fa-arrow-right ms-2 arrow1"></i>
                  </Link>
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

export default Home;
