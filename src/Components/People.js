import React from "react";
import Slider from "react-slick";
import people1 from "../img/Magun-Trehan.svg";
import people2 from "../img/Sakar-Mishra.svg";
import people3 from "../img/Ayushi-Verma.svg";
import people4 from "../img/Abhijeet-Sinha.svg";
import people5 from "../img/Sarah-Zarein-Raza.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CursorErrow from "./CursorErrow";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <i class="fa-solid fa-arrow-right-long arrow1"></i>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <i class="fa-solid fa-arrow-left-long arrow1"></i>
    </div>
  );
}

export default function Profile() {
  const settings = {
    infinite: true,
    speed: 300,
    // dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // margin: 20,
    // centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 525,
        settings: {
          slidesToShow: 1.67,
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
            <div className="people-card">
              <img src={people1} className="img-fluid" alt={"..."} />
              <h5>Magun Trehan</h5>
              <h6>Director</h6>
            </div>
            <div className="people-card">
              <img src={people2} className="img-fluid" alt={"..."} />
              <h5>Sakar Mishra</h5>
              <h6>Creative Director</h6>
            </div>
            <div className="people-card">
              <img src={people3} className="img-fluid" alt={"..."} />
              <h5>Ayushi Verma</h5>
              <h6>Team Lead - Content</h6>
            </div>
            <div className="people-card">
              <img src={people4} className="img-fluid" alt={"..."} />
              <h5>Abhijeet Sinha</h5>
              <h6>Sr. Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={people5} className="img-fluid" alt={"..."} />
              <h5>Sarah Zarein Raza</h5>
              <h6>Sr. Content Strategist</h6>
            </div>
          </Slider>
        </div>
      </main>
    </>
  );
}
