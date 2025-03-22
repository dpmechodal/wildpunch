import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import a from "../img/OfficePhotos/1.JPG";
import b from "../img/OfficePhotos/2.JPG";
import c from "../img/OfficePhotos/3.png";
import d from "../img/OfficePhotos/4.JPG";
import e from "../img/OfficePhotos/5.JPG";
import f from "../img/OfficePhotos/6.JPG";
import g from "../img/OfficePhotos/7.png";
import h from "../img/OfficePhotos/8.JPG";
import i from "../img/OfficePhotos/9.jpg";
import j from "../img/OfficePhotos/10.JPG";
import k from "../img/OfficePhotos/11.png";
import l from "../img/OfficePhotos/12.JPG";
import m from "../img/OfficePhotos/13.JPG";
import n from "../img/OfficePhotos/14.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Profile() {
  const [progress, setProgress] = useState(0);
  const totalSlides = 14;

  // Slider reference
  const sliderRef = useRef(null);

  // Arrow click handlers
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    infinite: true,
    speed: 300,
    dots: false,
    slidesToShow: 1.67,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    afterChange: (index) => {
      setProgress(((index + 1) / totalSlides) * 100);
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: { slidesToShow: 1.67 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <main>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {[a, b, c, d, e, f, g, h, i, j, k, l, m, n].map((img, index) => (
              <div key={index} className="card-container work-slid">
                <img src={img} className="img-fluid" alt={`Slide ${index}`} />
              </div>
            ))}
          </Slider>

          {/* Arrows & Progress Bar Container */}
          <div className="slider-controls">
            <div className="prev-arrow" onClick={goToPrev}>
              <i className="fa-solid fa-arrow-left-long"></i>
            </div>
            <div className="slider-progress">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="next-arrow" onClick={goToNext}>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
