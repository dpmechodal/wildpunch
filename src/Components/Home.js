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

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - Wildpunch Design & Digital</title>
      </Helmet>
        <Header/>
        <div className="first-section bg-dark">
          <div className="container py-300 main-head">
            <h1>Catalysts for change<br/>Agitators for Growth.</h1>
            <p className='mb-0'>We're the spark that ignites brands. As agents of change,<br/> we stir the pot, challenge the norm,<br/> and disrupt industries.</p>
          </div>
        </div>
        <div className="sec-section bg-second">
          <div className="container py-200">
            <p>WHO WE ARE</p>
            <h2>Not just an ad agency,<br/>we <b>add</b> more to your brand.</h2>
            <div className='d-flex'>
              <Link to={"#"}>READ MORE <i class="fa-solid fa-arrow-right ms-2"></i></Link>
            </div>
          </div>
        </div>
        <div className="sec-section">
          <div className="container py-200">
            <p className='mb-50'>WILD WILD WORK</p>
            <div className="row g-lg-4 g-3">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="work-one">
                  <img src={workone} className='img-fluid' alt="" />
                  <h5>KOKAM PLY</h5>
                  <h6>Branding, Print, Digital</h6>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="work-one">
                  <img src={worktwo} className='img-fluid' alt="" />
                  <h5>KOKAM PLY</h5>
                  <h6>Branding, Print, Digital</h6>
                </div>
              </div>
              <div className="col-12">
                <div className="work-one">
                  <img src={workthree} className='img-fluid' alt="" />
                  <h5>KOKAM PLY</h5>
                  <h6>Branding, Print, Digital</h6>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="work-one">
                  <img src={workfour} className='img-fluid' alt="" />
                  <h5>KOKAM PLY</h5>
                  <h6>Branding, Print, Digital</h6>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="work-one">
                  <img src={workfive} className='img-fluid' alt="" />
                  <h5>KOKAM PLY</h5>
                  <h6>Branding, Print, Digital</h6>
                </div>
              </div>
            </div>
            <div className='mt-50'>
              <Link to={"#"}>ALL PROJECTS <i class="fa-solid fa-arrow-right ms-2"></i></Link>
            </div>
          </div>
        </div>
        <div className="sec-section bg-third">
          <div className="container py-200">
            <p>WHAT WE DO</p>
            <h4>Everyone has great Ideas, the world has always needed executioners. We are the right mix of</h4>
            <h2><b>Ideas, strategy, tech & execution.</b></h2>
            <div className="row g-xl-5 g-4">
              <div className="col-lg-4 col-sm-6 col-6">
                <div className="research">
                  <h4>Research</h4>
                  <p>Your brand's compass.</p>
                  <p>We find your north.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-6">
                <div className="research">
                  <h4>Branding</h4>
                  <p>Your brand's soul.</p>
                  <p>We find your north.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-6">
                <div className="research">
                  <h4>Advertising</h4>
                  <p>Your brand's compass.</p>
                  <p>We make it heard.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-6">
                <div className="research">
                  <h4>Design</h4>
                  <p>Your brand's blueprint.</p>
                  <p>We find your north.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-6">
                <div className="research">
                  <h4>Marketing</h4>
                  <p>Your brand's roadmap.</p>
                  <p>We chart the course.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-6">
                <div className="research">
                  <h4>Digital</h4>
                  <p>Your brand's universe.</p>
                  <p>We create its galaxies.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-6">
                <div className="research">
                  <h4>Films & Production</h4>
                  <p>Your brand's story.</p>
                  <p>We bring it to life.</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-6">
                <div className="research">
                  <h4>Influencer Marketing</h4>
                  <p>Your brand's compass.</p>
                  <p>We find your north.</p>
                </div>
              </div>
            </div>
            <div className='mt-50'>
              <Link to={"#"}>READ MORE <i class="fa-solid fa-arrow-right ms-2"></i></Link>
            </div>
          </div>
        </div>
        <div className="sec-section bg-secound">
          <div className="container py-200">
            <p>OUR CLIENTS</p>
            <h2><b>What We PUNCHED</b></h2>
            <h4 className='text-black'>Every Brandʼs Different, Every Category Excites Us, <b>Nothing is Boring!</b></h4>
            <div className="row align-items-center mt-1 g-lg-5 g-4 hw-img">
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={a} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={b} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={c} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={d} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={e} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={f} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={g} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={h} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={i} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={j} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={k} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={l} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={m} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={n} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={o} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={p} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={q} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={r} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={s} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={t} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={u} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={v} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={w} alt="" className="img-fluid" />
              </div>
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <img src={x} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="sec-section bg-four">
          <div className="container py-200">
            <p>WILDPUNCH AT WORK</p>
            <h2><b>The WILD Approach</b></h2>
            <h4 className='text-black'>At Wildpunch, we believe that extraordinary results stem from an extraordinary process.</h4>
            <div className='mt-50'>
              <Link to={"#"}>KNOW MORE <i class="fa-solid fa-arrow-right ms-2"></i></Link>
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
        <div className="container-fluid py-200 px-0">
          <Testimonials/>
        </div>
        <div className="container-fluid px-0">
          <Marquee/>
        </div>
        <div className="sec-section">
          <div className="container py-200">
            <div className="row g-lg-4 g-3 align-items-center">
              <div className="col-md-6 col-12">
                <h2><b>Hello there,</b></h2>
                <h4 className='text-black mb-md-4 mb-3'>What makes us different? We will be there, <b>Always!</b></h4>
                <h4 className='text-black'>Unable to reach customers? <b>Reach out to us!</b></h4>
              </div>
              <div className="col-md-6 col-12">
                <form className='hello-form'>
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder='Name'/>
                  </div>
                  <div class="mb-3">
                    <input type="number" class="form-control" placeholder='Phone'/>
                  </div>
                  <div class="mb-3">
                    <input type="email" class="form-control" placeholder='Email'/>
                  </div>
                  <div class="mb-3">
                    <textarea class="form-control" rows="3" placeholder='Description'></textarea>
                  </div>
                  <div className='mt-md-5 mt-4 '>
                    <Link to={"#"}>GET STARTED <i class="fa-solid fa-arrow-right ms-2"></i></Link>
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

export default Home
