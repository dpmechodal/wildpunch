import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <div> 
        <Helmet>
          <title>Contact Us - Wildpunch Design & Digital</title>
        </Helmet>
        <Header/>
        <div className="first-section bg-dark">
          <div className="container py-200 main-head">
            <h6>CONTACT US</h6>
            <h1><span>LET’S TALK.</span><br/>Got a project?</h1>
            <p className='mb-0'>Discover boundless opportunities for collaboration with us. We welcome brands from every sector to join us in crafting compelling stories and strategies. </p>
          </div>
        </div>
        <div className="sec-section">
          <div className="container py-200">
            <div className="row g-lg-4 g-3 align-items-center">
              <div className="col-12">
                <h4 className='text-black mb-0'>Let's transcend boundaries together and create impactful experiences that resonate with audiences worldwide.</h4>
                <h4 className='text-black'>Your brand's journey begins here.</h4>
              </div>
              <div className="col-12">
                <form className='hello-form row g-md-3 g-0'>
                  <div class="mb-md-4 mb-3 pe-md-4 col-md-6">
                    <input type="text" class="form-control" placeholder='First Name'/>
                  </div>
                  <div class="mb-md-4 mb-3 ps-md-4 col-md-6">
                    <input type="text" class="form-control" placeholder='Last Name'/>
                  </div>
                  <div class="mb-md-4 mb-3 pe-md-4 col-md-6">
                    <input type="email" class="form-control" placeholder='Email'/>
                  </div>
                  <div class="mb-md-4 mb-3 ps-md-4 col-md-6">
                    <input type="text" class="form-control" placeholder='Company'/>
                  </div>
                  <div class="mb-md-4 mb-3 pe-md-4 col-md-6">
                    <input type="text" class="form-control" placeholder='Your Role'/>
                  </div>
                  <div class="mb-md-4 mb-3 ps-md-4 col-md-6">
                    <input type="text" class="form-control" placeholder='Your Industry'/>
                  </div>
                  <div class="mb-md-4 mb-3">
                    <input type="text" class="form-control" placeholder='How can we help?'/>
                  </div>
                  <div className='mt-lg-5 mt-4'>
                    <Link to={"#"}>SUBMIT</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
