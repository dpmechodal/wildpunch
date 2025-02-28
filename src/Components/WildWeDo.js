import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import KEYSECTORS from "../img/KEYSECTORS.svg";
import CursorErrow from "./CursorErrow";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import Splash from "./Splash";

const WildWeDo = () => {
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
        <title>Wild We Do - Wildpunch Design & Digital</title>
      </Helmet>
      {/* <Splash /> */}
      <Header />
      <div className="sec-section bg-third bg-black first-section">
        <div className="container py-200 pro-max">
          <p data-aos="fade-up" data-aos-duration="200">WILD WE DO</p>
          <h4 data-aos="fade-up" data-aos-duration="400">
            Everyone has great Ideas, the world has always needed executioners.
            We are the right mix of
          </h4>
          <h2 className="mb-0 extra-size" data-aos="fade-up" data-aos-duration="400">
            <b>Ideas, strategy, tech & execution.</b>
          </h2>
        </div>
      </div>
      <div className="sec-section bg-third">
        <div className="container py-200">
          <div className="row g-xl-5 g-4">
            <div className="col-lg-4 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="100">
              <div className="research mobile-re">
                <h4>Research</h4>
                <h6>Your brand's compass.</h6>
                <h6>We find your north.</h6>
                <ul>
                  <li>Market Analysis</li>
                  <li>Audience Research</li>
                  <li>Competitor Analysis</li>
                  <li>Brand Perception Research</li>
                  <li>Campaign Performance Analysis</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <div className="research mobile-re">
                <h4>Branding</h4>
                <h6>Your brand's soul.</h6>
                <h6>We find your north.</h6>
                <ul>
                  <li>Brand Identity Design</li>
                  <li>Naming & Verbal Strategy</li>
                  <li>Visual Brand Strategy</li>
                  <li>Brand Strategy and Positioning</li>
                  <li>Brand Guidelines Development</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="300">
              <div className="research mobile-re">
                <h4>Advertising</h4>
                <h6>Your brand's compass.</h6>
                <h6>We make it heard.</h6>
                <ul>
                  <li>Media Planning</li>
                  <li>Outdoor Advertising</li>
                  <li>Print Advertising</li>
                  <li>Digital Advertising</li>
                  <li>Celebrity Endorsements</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="400">
              <div className="research mobile-re">
                <h4>Design</h4>
                <h6>Your brand's blueprint.</h6>
                <h6>We find your north.</h6>
                <ul>
                  <li>Graphic Design</li>
                  <li>Print Design</li>
                  <li>Packaging Design</li>
                  <li>Illustration Design</li>
                  <li>Wayfinding and Signage Design</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="500">
              <div className="research mobile-re">
                <h4>Marketing</h4>
                <h6>Your brand's roadmap.</h6>
                <h6>We chart the course.</h6>
                <ul>
                  <li>Integrated Campaign Strategy</li>
                  <li>Content Marketing</li>
                  <li>Social Media Marketing</li>
                  <li>Performance Marketing</li>
                  <li>ATL/BTL</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="600">
              <div className="research mobile-re">
                <h4>Digital</h4>
                <h6>Your brand's universe.</h6>
                <h6>We create its galaxies.</h6>
                <ul>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Search Engine Marketing (SEM)</li>
                  <li>Email Marketing</li>
                  <li>Website & App Design</li>
                  <li>E-Commerce Development</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="700">
              <div className="research mobile-re">
                <h4>Films & Production</h4>
                <h6>Your brand's story.</h6>
                <h6>We bring it to life.</h6>
                <ul>
                  <li>Scriptwriting and Storyboarding</li>
                  <li>Casting and Talent Coordination</li>
                  <li>Brand Ad Films</li>
                  <li>Fashion & Lifestyle Photography</li>
                  <li>Motion Design & Animation</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12" data-aos="fade-up" data-aos-duration="800">
              <div className="research mobile-re">
                <h4>Influencer Marketing</h4>
                <h6>Your brand's compass.</h6>
                <h6>We find your north.</h6>
                <ul>
                  <li>Influencer Identification</li>
                  <li>Content Creation</li>
                  <li>Campaign Strategy</li>
                  <li>Relationship Management</li>
                  <li>Performance Tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-section">
        <div className="container py-200">
          <div className="row g-lg-4 g-3 align-items-center">
            <div className="col-12">
              <h2 data-aos="fade-up" data-aos-duration="200">
                <b>The WILD Approach</b>
              </h2>
              <h4 className="text-black mb-md-4 mb-3" data-aos="fade-up" data-aos-duration="400">
                At Wildpunch, we believe that extraordinary results stem from an
                extraordinary process.
              </h4>
              <h4 className="text-black mb-0" data-aos="fade-up" data-aos-duration="600">
                Our WILD approach is a meticulous blend of creativity and
                strategy, designed to deliver campaigns that truly bring your
                brand out there in the market.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-four">
        <div className="container py-200 sec-section contact-lets">
          <div className="row g-xl-5 g-4">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="200">
              <div className="sec-section">
                <div className="big-small mobile-small">
                  <h2>
                    <b className="mobile-one">W</b>
                    <small>
                      eave <br />
                      Insights
                    </small>
                  </h2>
                  <p>
                    We don't just collect data. We unravel its secrets,
                    discovering hidden patterns and opportunities that form the
                    bedrock of our campaigns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="400">
              <div className="sec-section">
                <div className="big-small mobile-small">
                  <h2>
                    <b className="mobile-one">I</b>
                    <small>
                      gnite <br />
                      Imagination
                    </small>
                  </h2>
                  <p>
                    Ideas are the spark that ignites brands. Our team is a
                    crucible of creativity, forging innovative concepts that
                    capture attention and inspire action.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="600">
              <div className="sec-section">
                <div className="big-small mobile-small">
                  <h2>
                    <b className="mobile-one">L</b>
                    <small>
                      imitless <br />
                      Innovation
                    </small>
                  </h2>
                  <p>
                    We refuse to be confined by conventions. Our approach is
                    boundless, delivering impactful solutions that challenge the
                    status quo and redefine industry standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="800">
              <div className="sec-section">
                <div className="big-small mobile-small">
                  <h2>
                    <b className="mobile-one">D</b>
                    <small>
                      ynamite <br />
                      Delivery
                    </small>
                  </h2>
                  <p>
                    The final act is where we truly shine. Our campaigns are
                    meticulously crafted to deliver results that not only meet
                    but exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h4 className="text-black mt-50 mb-0" data-aos="fade-up" data-aos-duration="300">
            The WILD approach is more than just a process, itʼs our DNA. <br/>It's
            about pushing boundaries, challenging the status quo, and creating
            campaigns that leave a WILD impression.
          </h4>
        </div>
      </div>
      <div className="bg-dark">
        <div className="container py-200 main-head">
          <h6>KEY SECTORS</h6>
          <div className="d-sm-block d-none">
            <div className="education mt-50">
              <p data-aos="fade-up" data-aos-duration="200">EDUCATION</p>
              <p data-aos="fade-up" data-aos-duration="200">GOVERNMENT</p>
              <p data-aos="fade-up" data-aos-duration="300">REAL ESTATE</p>
              <p data-aos="fade-up" data-aos-duration="400">FMCG</p>
              <p data-aos="fade-up" data-aos-duration="500">TECH</p>
              <p data-aos="fade-up" data-aos-duration="600">AGRO</p>
              <p data-aos="fade-up" data-aos-duration="700">RETAIL</p>
              <p data-aos="fade-up" data-aos-duration="800">FOOD & BEVERAGES</p>
              <p data-aos="fade-up" data-aos-duration="900">HEALTHCARE</p>
              <p data-aos="fade-up" data-aos-duration="1000">NGO</p>
              <p data-aos="fade-up" data-aos-duration="1100">JEWELLERY</p>
              <p data-aos="fade-up" data-aos-duration="1200">FASHION</p>
              <p data-aos="fade-up" data-aos-duration="1300">WELLNESS</p>
              <p data-aos="fade-up" data-aos-duration="1400">SPORTS</p>
              <p data-aos="fade-up" data-aos-duration="1500">INDUSTRIAL</p>
              <p data-aos="fade-up" data-aos-duration="1600">AUTOMOBILE</p>
            </div>
          </div>
          <div className="d-sm-none d-block mt-50">
            <img src={KEYSECTORS} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="bg-third">
        <div className="container py-200 main-head main-foot">
          <div className="wild-flex">
            <h1 className="mb-0 extra-size" data-aos="fade-up" data-aos-duration="200">
              <span>LET’S TALK.</span>
              <br />
              Got a project?
            </h1>
            <div className="sec-section d-flex" data-aos="fade-up" data-aos-duration="200">
              <a href="/Contact">
                Contact Us <i class="fa-solid fa-arrow-right ms-2 arrow1"></i>
              </a>
            </div>
          </div>
          <p className="mt-4 pt-4 mb-0 border-top border-bottom-0" data-aos="fade-up" data-aos-duration="200">
            Discover boundless opportunities for collaboration with us. We
            welcome brands from <br/>every sector to join us in crafting compelling
            stories and strategies. Let's transcend boundaries <br/>together and
            create impactful experiences that resonate with audiences worldwide.<br/>
            Your brand's journey begins here.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WildWeDo;
