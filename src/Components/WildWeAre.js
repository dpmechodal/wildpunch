import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Work from './Work'
import People from './People'
import Testimonials from './Testimonials'
import Header from './Header'
import Footer from './Footer'
import MobilePeople from './MobilePeople';

const WildWeAre = () => {
  return (
    <div>
      <Helmet>
        <title>Wild We Are - Wildpunch Design & Digital</title>
      </Helmet>
        <Header/>
        <div className="sec-section bg-third bg-black first-section">
          <div className="container py-200">
            <p>WILD WE ARE</p>
            <h2 className='mb-0'><b>Not just an ad agency,
            we add more to your brand.</b></h2>
          </div>
        </div>
        <div className="sec-section bg-four">
          <div className="container py-200">
            <div className="row g-lg-4 g-3 align-items-center">
              <div className="col-12">
                <h4 className='text-black mb-md-4 mb-3'>While everyone is all rage about Tech, AI, GPTs etc.</h4>
                <h2><b>We are too,</b></h2>
                <h4 className='text-black mb-md-4 mb-3'>but we don't miss the most essential piece, People. We are all
about people, you, your customers, us, mixed with the right
amount of creativity, Strategy & tech.</h4>
                <h4 className='text-black mb-md-4 mb-3'>The right mix of all, makes a “Wildpunchˮ</h4>
                <h4 className='text-black mb-md-4 mb-3'>We don't tick boxes, we kick them. We only propose what you
need, We advise what's right for you. We are not an agency,
we work as your partners. We are objective driven, problem
solvers. Like there are in Hollywood, think of us as fixers in the
world of Advertising & Marketing. What to say,</h4>
                <h2>We are a <b>Wild Bunch,</b></h2>
                <h2>at <b>Wildpunch.</b></h2>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-section bg-second">
          <div className="container py-200">
            <p className='mb-4'>OUR PEOPLE</p>
            <h4 class="text-black mb-md-4 mb-3">We are D2C Founders, Fashion designers, Real estate agents,
Chefs, Vegetable sellers, Lawyers, Engineers, Event managers
and everything in between...</h4>
            <h4 className='text-black mb-md-4 mb-3'>For the love of advertising, We get to be everyone &
            everything, everyday!</h4>
          </div>
        <div className="container-fluid py-200 pt-0 px-0">
          <div className='d-sm-block d-none'>
            <People/>
          </div>
          <div className='d-sm-none d-block'>
            <MobilePeople/>
          </div>
        </div>
        </div>
        <div className="sec-section bg-third">
          <div className="container py-200 pb-0">
            <p className='mb-50'>WILDPUNCH AT WORK</p>
          </div>
          <div className="container-fluid py-200 pt-0 px-0">
            <Work/>
          </div>
        </div>
        <div className="sec-section bg-secound">
          <div className="container py-200">
            <p>Our clients are as Wild as us,</p>
            <h2 className='mb-0'><b>They can’t say
what we talk about, so they
decided to drop facts.</b></h2>
          </div>
        </div>        
        <div className="container-fluid py-200 pt-0 px-0">
          <Testimonials/>
        </div>
        <div className="bg-third">
          <div className="container py-200 main-head main-foot">
            <div className="wild-flex">
                <h1 className='mb-0'><span>LET’S TALK.</span><br/>Got a project?</h1>
                <div className='sec-section d-flex'>
                    <a href="/Contact">Contact Us <i class="fa-solid fa-arrow-right ms-2"></i></a>
                </div>
            </div>
            <p className='mt-4 pt-4 mb-0 border-top border-bottom-0'>Discover boundless opportunities for collaboration with us. We welcome brands from
            every sector to join us in crafting compelling stories and strategies. Let's transcend boundaries
            together and create impactful experiences that resonate with audiences worldwide.
            Your brand's journey begins here.</p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default WildWeAre
