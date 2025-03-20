import React, { useEffect } from "react";
import Slider from "react-slick";
import a from "../img/OfficePhotos/a.JPG";
import b from "../img/OfficePhotos/b.JPG";
import c from "../img/OfficePhotos/c.JPG";
import d from "../img/OfficePhotos/d.JPG";
import e from "../img/OfficePhotos/e.JPG";
import f from "../img/OfficePhotos/f.JPG";
import g from "../img/OfficePhotos/g.JPG";
import h from "../img/OfficePhotos/h.JPG";
import i from "../img/OfficePhotos/i.JPG";
import j from "../img/OfficePhotos/j.jpg";
import k from "../img/OfficePhotos/k.jpg";
import l from "../img/OfficePhotos/l.jpg";
import m from "../img/OfficePhotos/m.jpg";
import n from "../img/OfficePhotos/n.JPG";
import o from "../img/OfficePhotos/o.JPG";
import p from "../img/OfficePhotos/p.JPG";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CursorErrow from "./CursorErrow";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

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
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 200,
      once: false, // Whether animation should happen only once
    });
    setTimeout(() => {
      AOS.refresh(); // Ensure AOS elements are reloaded after DOM changes
    }, 500); // Add a small delay if elements aren't detected immediately
  }, [location]);
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
      {/* <CursorErrow /> */}
      <main>
        <div
          className="slider">
          <div className="overlay"></div>
          <Slider {...settings}>
            <div className="card-container">
              <img src={a} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={b} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={c} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={d} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={e} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={f} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={g} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={h} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={i} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={j} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={k} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={l} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={m} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={n} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={o} className="img-fluid" alt={"..."} />
            </div>
            <div className="card-container">
              <img src={p} className="img-fluid" alt={"..."} />
            </div>
          </Slider>
        </div>
      </main>
    </>
  );
}
