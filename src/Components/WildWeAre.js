import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Work from './Work'
import Testimonials from './Testimonials'
import Marquee from './Marquee'
import Header from './Header'
import Footer from './Footer'
import workone from '../img/work-1.svg'
import worktwo from '../img/work-2.svg'
import workthree from '../img/work-3.svg'
import workfour from '../img/work-4.svg'
import workfive from '../img/work-5.svg'
import a from '../img/1.svg'
import b from '../img/2.svg'
import c from '../img/3.svg'
import d from '../img/4.svg'
import e from '../img/5.svg'
import f from '../img/6.svg'
import g from '../img/7.svg'
import h from '../img/8.svg'
import i from '../img/9.svg'
import j from '../img/10.svg'
import k from '../img/11.svg'
import l from '../img/12.svg'
import m from '../img/13.svg'
import n from '../img/14.svg'
import o from '../img/15.svg'
import p from '../img/16.svg'
import q from '../img/17.svg'
import r from '../img/18.svg'
import s from '../img/19.svg'
import t from '../img/20.svg'
import u from '../img/21.svg'
import v from '../img/22.svg'
import w from '../img/23.svg'
import x from '../img/24.svg'

const WildWeAre = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Wildpunch Design & Digital</title>
      </Helmet>
        <Header/>
        <div className="sec-section bg-third bg-black first-section">
          <div className="container py-200">
            <p>WHAT WE DO</p>
            <h4>Everyone has great Ideas, the world has always needed executioners. We are the right mix of</h4>
            <h2 className='mb-0'><b>Ideas, strategy, tech & execution.</b></h2>
          </div>
        </div>
        <div className="sec-section bg-third">
          <div className="container py-200">
            <div className="row g-xl-5 g-lg-4 g-3">
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="research">
                  <h4>Research</h4>
                  <p>Your brand's compass.</p>
                  <p>We find your north.</p>
                  <ul>
                    <li>Market Analysis</li>
                    <li>Audience Research</li>
                    <li>Competitor Analysis</li>
                    <li>Brand Perception Research</li>
                    <li>Campaign Performance Analysis</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="research">
                  <h4>Branding</h4>
                  <p>Your brand's soul.</p>
                  <p>We find your north.</p>
                  <ul>
                    <li>Brand Identity Design</li>
                    <li>Naming & Verbal Strategy</li>
                    <li>Visual Brand Strategy</li>
                    <li>Brand Strategy and Positioning</li>
                    <li>Brand Guidelines Development</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="research">
                  <h4>Advertising</h4>
                  <p>Your brand's compass.</p>
                  <p>We make it heard.</p>
                  <ul>
                    <li>Media Planning</li>
                    <li>Outdoor Advertising</li>
                    <li>Print Advertising</li>
                    <li>Digital Advertising</li>
                    <li>Celebrity Endorsements</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="research">
                  <h4>Design</h4>
                  <p>Your brand's blueprint.</p>
                  <p>We find your north.</p>
                  <ul>
                    <li>Graphic Design</li>
                    <li>Print Design</li>
                    <li>Packaging Design</li>
                    <li>Illustration Design</li>
                    <li>Wayfinding and Signage Design</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="research">
                  <h4>Marketing</h4>
                  <p>Your brand's roadmap.</p>
                  <p>We chart the course.</p>
                  <ul>
                    <li>Integrated Campaign Strategy</li>
                    <li>Content Marketing</li>
                    <li>Social Media Marketing</li>
                    <li>Performance Marketing</li>
                    <li>ATL/BTL</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="research">
                  <h4>Digital</h4>
                  <p>Your brand's universe.</p>
                  <p>We create its galaxies.</p>
                  <ul>
                    <li>Search Engine Optimization (SEO)</li>
                    <li>Search Engine Marketing (SEM)</li>
                    <li>Email Marketing</li>
                    <li>Website & App Design</li>
                    <li>E-Commerce Development</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="research">
                  <h4>Films & Production</h4>
                  <p>Your brand's story.</p>
                  <p>We bring it to life.</p>
                  <ul>
                    <li>Scriptwriting and Storyboarding</li>
                    <li>Casting and Talent Coordination</li>
                    <li>Brand Ad Films</li>
                    <li>Fashion & Lifestyle Photography</li>
                    <li>Motion Design & Animation</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="research">
                  <h4>Inﬂuencer Marketing</h4>
                  <p>Your brand's compass.</p>
                  <p>We find your north.</p>
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
                <h2><b>The WILD Approach</b></h2>
                <h4 className='text-black mb-md-4 mb-3'>At Wildpunch, we believe that extraordinary results stem from an extraordinary process.</h4>
                <h4 className='text-black mb-0'>Our WILD approach is a meticulous blend of creativity and strategy, designed to deliver campaigns that truly bring your brand out there in the market.</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-four">
            <div className="container py-200 sec-section">
                <div className="row g-xl-5 g-lg-4 g-3">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="sec-section">
                            <div className="big-small">
                                <h2><b>W</b><small>eave<br/>Insights</small></h2>
                                <p>We don't just collect
                                data. We unravel its
                                secrets, discovering
                                hidden patterns and
                                opportunities that form
                                the bedrock of our
                                campaigns.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="sec-section">
                            <div className="big-small">
                                <h2><b>I</b><small>gnite<br/>Imagination</small></h2>
                                <p>Ideas are the spark
                                that ignites brands.
                                Our team is a crucible
                                of creativity, forging
                                innovative concepts
                                that capture attention
                                and inspire action.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="sec-section">
                            <div className="big-small">
                                <h2><b>L</b><small>imitless<br/>Innovation</small></h2>
                                <p>We refuse to be
                                confined by
                                conventions. Our
                                approach is boundless,
                                delivering impactful
                                solutions that challenge
                                the status quo and
                                redefine industry
                                standards.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="sec-section">
                            <div className="big-small">
                                <h2><b>D</b><small>ynamite<br/>Delivery</small></h2>
                                <p>The final act is where
                                we truly shine. Our
                                campaigns are
                                meticulously crafted to
                                deliver results that not
                                only meet but exceed
                                expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='text-black mt-50 mb-0'>The WILD approach is more than just a process, itʼs our DNA.
                It's about pushing boundaries, challenging the status quo,
                and creating campaigns that leave a WILD impression.</h4>
            </div>
        </div>
        <div className="bg-dark">
          <div className="container py-200 main-head">
            <h6>KEY SECTORS</h6>
            <div className="education mt-50">
                <p>EDUCATION</p>
                <p>GOVERNMENT</p>
                <p>REAL ESTATE</p>
                <p>FMCG</p>
                <p>TECH</p>
                <p>AGRO</p>
                <p>FOOD & BEVERAGES</p>
                <p>HEALTHCARE</p>
                <p>RETAIL</p>
                <p>JEWELLERY</p>
                <p>FASHION</p>
                <p>WELLNESS</p>
                <p>SPORTS</p>
                <p>INDUSTRIAL</p>
                <p>AUTOMOBILE</p>
                <p>NGO</p>
            </div>
          </div>
        </div>
        <div className="bg-third">
          <div className="container py-200 main-head">
            <div className="wild-flex">
                <h1 className='mb-0'><span>LET’S TALK.</span><br/>Got a project?</h1>
                <div className='sec-section d-flex'>
                    <a href="/WildWeAre">Contact Us <i class="fa-solid fa-arrow-right ms-2"></i></a>
                </div>
            </div>
            <p className='mt-4 pt-4 mb-0 border-top border-bottom-0'>Discover boundless opportunities for collaboration with us. We welcome brands from every sector to join us in crafting compelling stories and strategies. </p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default WildWeAre
