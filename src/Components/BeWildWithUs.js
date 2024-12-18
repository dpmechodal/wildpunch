import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Work from './Work'
import People from './People'
import Testimonials from './Testimonials'
import Header from './Header'
import Footer from './Footer'

const BeWildWithUs = () => {
  return (
    <div>
      <Helmet>
        <title>Be Wild With Us - Wildpunch Design & Digital</title>
      </Helmet>
        <Header/>
        <div className="sec-section bg-third bg-black first-section">
          <div className="container py-200">
            <p>BE WILD WITH US</p>
            <h2 className='mb-0'><b>Turn your wild ideas into game-changing realities.</b></h2>
          </div>
        </div>
        <div className="sec-section bg-four">
          <div className="container py-200">
            <div className="row g-lg-4 g-3 align-items-center">
              <div className="col-12">
                <h2 className='mb-0'>Take the first step towards a rewarding future, start your journey with us today.</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-section">
            <div className="container py-200">
            <div className="row g-lg-4 g-3 align-items-center">
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
                    <input type="tel" class="form-control" placeholder='Mobile'/>
                    </div>
                    <div class="mb-md-4 mb-3 pe-md-4 col-md-6">
                        <select className='form-select'>
                          <option>Applying ForAttach Portfolio/CV</option>  
                          <option>Portfolio</option>  
                          <option>CV</option>  
                        </select>
                    </div>
                    <div class="mb-md-4 mb-3 ps-md-4 col-md-6 upload-button">
                        <input type="file" class="form-control" placeholder='Your Industry'/>
                        <a href="#"><i class="fa-solid fa-paperclip"></i></a>
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

export default BeWildWithUs