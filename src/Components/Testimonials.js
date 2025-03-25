import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import b1 from "../img/brand-logos/Loom.png"
import b2 from "../img/brand-logos/Modern School.png"
import b3 from "../img/brand-logos/Petals.png"
import b4 from "../img/brand-logos/Trident Hills.png"
import b5 from "../img/brand-logos/jabra.svg"
import b6 from "../img/brand-logos/Kokam.png"
import b7 from "../img/brand-logos/Shalimar.png"
import b8 from "../img/brand-logos/Kashi.png"
import a from "../img/clients/Namit-Goel.png"
import b from "../img/clients/Siddhart-kapoor.png"
import c from "../img/clients/Namit-Goel.png"
import d from "../img/clients/Sandeep-Syan.png"
import e from "../img/clients/Kshitij-Prakash.png"
import f from "../img/clients/Supreet-Singh-Narula.png"
import g from "../img/clients/Kunal-Seth.png"
import h from "../img/clients/Kaashi.png"

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
      name: "Mr. Namit Goel",
      position: "Founder & Director",
      image: a,
      review: "Wildpunch took our brands to the next level with their strategic and creative approach, which made our brands seen on digitals and made them visually strong.",
      companyLogo: b1,
    },
    {
      id: 2,
      name: "Siddhart kapoor",
      position: "Founder",
      image: b,
      review: "Wildpunch understood our legacy through knicks and knacks, they pushed our vision for the future and crafted an identity. This resulted in creating a modern brand that truly reflects who we are.",
      companyLogo: b2,
    },
    {
      id: 3,
      name: "Mr. Namit Goel",
      position: "Founder & Director",
      image: c,
      review: "Wildpunch took our brands to the next level with their strategic and creative approach, which made our brands seen on digitals and made them visually strong.",
      companyLogo: b3,
    },
    {
      id: 4,
      name: "Mr. Sandeep Syan",
      position: "Head - Marketing  Assistant Vice President",
      image: d,
      review: "Creative, precise, and collaborative way of Wildpunch has brought our vision to life effortlessly, with first-class results.",
      companyLogo: b4,
    },
    {
      id: 5,
      name: "Mr. Kshitij Prakash",
      position: "Senior Marketing Manager",
      image: e,
      review: "They nailed our strategy with thoughtful execution, delivering results that exceeded expectations. We couldn’t be happier!",
      companyLogo: b5,
    },
    {
      id: 6,
      name: "Mr. Supreet Singh Narula",
      position: "Director",
      image: f,
      review: "Flexible, strategic, and always on point. Wildpunch’s creative approach in our plan of the brand supported our plan to kick off the launch",
      companyLogo: b6,
    },
    {
      id: 7,
      name: "Mr. Kunal Seth",
      position: "Director",
      image: g,
      review: "With visionary designs, fresh content, and precise attention to details. They captured our brand’s essence perfectly.",
      companyLogo: b7,
    },
    {
      id: 8,
      name: "Kaashi",
      position: "Founder",
      image: h,
      review: "Choosing Wildpunch to manage Kashi’s marketing was a great decision. Their efforts have made a noticeable difference in our reach and engagement.",
      companyLogo: b8,
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
