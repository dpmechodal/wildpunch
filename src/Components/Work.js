import React from 'react';
import Slider from "react-slick";
import SliderImg from "../img/slider-img.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
function NextArrow(props) {
    const { onClick } = props;
    return (
        <div className="custom-arrow next-arrow" onClick={onClick}>
            <i class="fa-solid fa-arrow-right-long"></i>
        </div>
    );
}
 
function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev-arrow" onClick={onClick}>
            <i class="fa-solid fa-arrow-left-long"></i>
        </div>
    );
}
 
export default function Profile() {
    const settings = {
        infinite: true,
        speed: 300,
        // dots: true,
        slidesToShow: 1.67,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // margin: 20,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                  slidesToShow: 1.67,
                },
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1.67,
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
                      <img src={SliderImg} className="img-fluid" alt={"..."} />
                    </div>
                    <div className="card-container">
                        <img src={SliderImg} className="img-fluid" alt={"..."} />
                    </div>
                    <div className="card-container">
                        <img src={SliderImg} className="img-fluid" alt={"..."} />
                    </div>
                </Slider>
            </div>
          </main>
        </>
    );
}