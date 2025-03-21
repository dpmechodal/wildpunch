import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import Somya from "../img/Somya.svg";
import Aviral from "../img/Aviral.svg";
import d from "../img/4.svg";
import s from "../img/19.svg";

export default function Profile() {
  const location = useLocation();
  const sliderRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, offset: 200, once: false });
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, [location]);

  const testimonials = [
    {
      id: 1,
      name: "Ms. Somya Srivastava",
      position: "Director, Jabra Connect India Pvt. Ltd.",
      image: Somya,
      review: "They nailed our strategy with thoughtful execution, delivering results that exceeded expectations.",
      companyLogo: d,
    },
    {
      id: 2,
      name: "Mr. Aviral Jain",
      position: "Director, Microlit",
      image: Aviral,
      review: "Flexible, strategic, and always on point. Their creative approach kept us ahead of the curve.",
      companyLogo: s,
    },
    {
      id: 3,
      name: "Ms. Somya Srivastava",
      position: "Director, Jabra Connect India Pvt. Ltd.",
      image: Somya,
      review: "They nailed our strategy with thoughtful execution, delivering results that exceeded expectations.",
      companyLogo: d,
    },
    {
      id: 4,
      name: "Mr. Aviral Jain",
      position: "Director, Microlit",
      image: Aviral,
      review: "Flexible, strategic, and always on point. Their creative approach kept us ahead of the curve.",
      companyLogo: s,
    },
  ];

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    margin: 20,
    centerMode: true,
    beforeChange: (oldIndex, newIndex) => {
      setProgress(((newIndex + 1) / testimonials.length) * 100); // Update progress bar
    },
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1025, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1.67 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
      { breakpoint: 425, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  const goToNext = () => sliderRef.current.slickNext();
  const goToPrev = () => sliderRef.current.slickPrev();

  return (
    <main>
      <div className="slider slider-container">
        <div className="overlay"></div>
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-container">
              <div className="testi-box">
                <div className="img-name">
                  <img src={testimonial.image} className="img-fluid" alt={testimonial.name} />
                  <div className="name-post">
                    <h5>{testimonial.name}</h5>
                    <h6>{testimonial.position}</h6>
                  </div>
                </div>
                <div className="review">
                  <p>“{testimonial.review}ˮ</p>
                </div>
                <div className="company-logo">
                  <img src={testimonial.companyLogo} className="img-fluid" alt="Company Logo" />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Arrows & Progress Bar */}
        <div className="slider-controls">
          <div className="prev-arrow bg-people-color" onClick={goToPrev}>
            <i className="fa-solid fa-arrow-left-long"></i>
          </div>
          <div className="slider-progress peo-progress">
            <div className="progress-bar peo-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="next-arrow bg-people-color" onClick={goToNext}>
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
    </main>
  );
}
