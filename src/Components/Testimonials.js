import React from 'react';
import Slider from "react-slick";
import SliderImg from "../img/slider-img.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import d from '../img/4.svg'
import c from '../img/3.svg'
import a from '../img/1.svg'
import s from '../img/19.svg'
import Somya from '../img/Somya.svg'
import Aviral from '../img/Aviral.svg'
 
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="testi custom-arrow next-arrow " onClick={onClick}>
            <i class="fa-solid fa-arrow-right-long"></i>
        </div>
    );
}
 
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="testi custom-arrow prev-arrow " onClick={onClick}>
            <i class="fa-solid fa-arrow-left-long"></i>
        </div>
    );
}
 
export default function Profile() {
    const settings = {
        infinite: true,
        speed: 300,
        // dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        margin: 20,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 2,
                },
            },
            {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1.67,
                },
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                },
            },
            {
                breakpoint: 525,
                settings: {
                  slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                },
            },
            {
                breakpoint: 425,
                settings: {
                  slidesToShow: 1,
                  centerMode: false,
                },
            },
            {
                breakpoint: 375,
                settings: {
                  slidesToShow: 1,
                  centerMode: false,
                },
            },
            {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  centerMode: false,
                },
            },
        ],
    };
 
    return (
        <>
          <main>
            <div className="slider">
                <div className="overlay"></div>
                <Slider {...settings}>
                    <div className="card-container">
                      <div className='testi-box'>
                        <div className="img-name">
                            <img src={Somya} className="img-fluid" alt={"..."} />
                            <div className="name-post">
                                <h5>Ms. Somya Srivastava</h5>
                                <h6>Director, <br/> Jabra Connect India Pvt. Ltd.</h6>
                            </div>
                        </div>
                        <div className="review">
                            <p>“They nailed our strategy with thoughtful execution, delivering results that exceeded expectations.ˮ</p>
                        </div>
                        <div className="company-logo">
                            <img src={d} className="img-fluid" alt={"..."} />
                        </div>
                      </div>
                    </div>
                    <div className="card-container">
                      <div className='testi-box'>
                        <div className="img-name">
                            <img src={Aviral} className="img-fluid" alt={"..."} />
                            <div className="name-post">
                                <h5>Mr. Aviral Jain</h5>
                                <h6>Director, <br/> Microlit</h6>
                            </div>
                        </div>
                        <div className="review">
                            <p>“Flexible, strategic, and always on point. Their creative approach kept us ahead of the curve.ˮ</p>
                        </div>
                        <div className="company-logo">
                            <img src={s} className="img-fluid" alt={"..."} />
                        </div>
                      </div>
                    </div>
                    <div className="card-container">
                      <div className='testi-box'>
                        <div className="img-name">
                            <img src={Somya} className="img-fluid" alt={"..."} />
                            <div className="name-post">
                                <h5>Ms. Somya Srivastava</h5>
                                <h6>Director, <br/> Jabra Connect India Pvt. Ltd.</h6>
                            </div>
                        </div>
                        <div className="review">
                            <p>“They nailed our strategy with thoughtful execution, delivering results that exceeded expectations.ˮ</p>
                        </div>
                        <div className="company-logo">
                            <img src={d} className="img-fluid" alt={"..."} />
                        </div>
                      </div>
                    </div>
                    <div className="card-container">
                      <div className='testi-box'>
                        <div className="img-name">
                            <img src={Aviral} className="img-fluid" alt={"..."} />
                            <div className="name-post">
                                <h5>Mr. Aviral Jain</h5>
                                <h6>Director, <br/> Microlit</h6>
                            </div>
                        </div>
                        <div className="review">
                            <p>“Flexible, strategic, and always on point. Their creative approach kept us ahead of the curve.ˮ</p>
                        </div>
                        <div className="company-logo">
                            <img src={s} className="img-fluid" alt={"..."} />
                        </div>
                      </div>
                    </div>
                </Slider>
            </div>
          </main>
        </>
    );
}