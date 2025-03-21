import React from "react";
import Slider from "react-slick";
import a from "../img/EmployeePhotos/Abhijeet Sinha - Senior Graphic Designer .JPG";
import b from "../img/EmployeePhotos/Arya Roy - Senior Account Manager .JPG";
import c from "../img/EmployeePhotos/Asim Jafri - Motion Graphic Designer .JPG";
import d from "../img/EmployeePhotos/Ayushi Verma - Senior Creative Strategist .JPG";
import e from "../img/EmployeePhotos/Harsh Rao Holkar - Graphic Designer .JPG";
import f from "../img/EmployeePhotos/Himanshu Gupta - Graphic Designer .JPG";
import g from "../img/EmployeePhotos/Magun Trehan - Founder & Director .JPG";
import h from "../img/EmployeePhotos/Manju Gupta - Copywriter .JPG";
import i from "../img/EmployeePhotos/Mohd. Ishan - Senior Graphic Designer .JPG";
import j from "../img/EmployeePhotos/Muskan Goyal - Senior Graphic Designer .JPG";
import k from "../img/EmployeePhotos/Nadeem Ansari - Graphic Designer .JPG";
import l from "../img/EmployeePhotos/Prachita Omar - Senior Account Manager.JPG";
import m from "../img/EmployeePhotos/Prakhar Srivastava - Content Writer .JPG";
import n from "../img/EmployeePhotos/Pratyush Jaiswal - Graphic Designer.JPG";
import o from "../img/EmployeePhotos/Priyanka Sharma - Social Media Manager.JPG";
import p from "../img/EmployeePhotos/Qayam Raza - Accountant.JPG";
import q from "../img/EmployeePhotos/Sakar Mishra - Creative Director .JPG";
import r from "../img/EmployeePhotos/Sarah Zarein Raza - Senior Creative Strategist .JPG";
import s from "../img/EmployeePhotos/Shruti Mishra - Account Executive .JPG";
import t from "../img/EmployeePhotos/Shubh Gupta - Motion Graphic Designer .JPG";
import u from "../img/EmployeePhotos/Shubham Yadav - Motion Graphic Designer .JPG";
import v from "../img/EmployeePhotos/Superna Trehan - HR Manager .JPG";
import w from "../img/EmployeePhotos/Vividha Mishra - Social Media Manager.JPG";
import x from "../img/EmployeePhotos/Simran Jalota - Account Manager.jpg";
import y from "../img/EmployeePhotos/Ashutosh Pandey.jpg";
import z from "../img/EmployeePhotos/Mohd. Azam Khan - Graphic Designer .jpg";
import aa from "../img/EmployeePhotos/Mohd. Sharukh - Digital Marketing Manager .jpg";
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
    autoplaySpeed: 5000,
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
              <img src={g} className="img-fluid" alt={"..."} />
              <h5>Magun Trehan</h5>
              <h6>Founder & Director</h6>
            </div>
            <div className="people-card">
              <img src={q} className="img-fluid" alt={"..."} />
              <h5>Sakar Mishra</h5>
              <h6>Creative Director</h6>
            </div>
            <div className="people-card">
              <img src={v} className="img-fluid" alt={"..."} />
              <h5>Superna Trehan</h5>
              <h6>HR Manager</h6>
            </div>
            <div className="people-card">
              <img src={l} className="img-fluid" alt={"..."} />
              <h5>Prachita Omar</h5>
              <h6>Senior Account Manager</h6>
            </div>
            <div className="people-card">
              <img src={b} className="img-fluid" alt={"..."} />
              <h5>Arya Roy</h5>
              <h6>Senior Account Manager</h6>
            </div>
            <div className="people-card">
              <img src={x} className="img-fluid" alt={"..."} />
              <h5>Simran Jalota</h5>
              <h6>Account Manager</h6>
            </div>
            <div className="people-card">
              <img src={s} className="img-fluid" alt={"..."} />
              <h5>Shruti Mishra</h5>
              <h6>Account Executive</h6>
            </div>
            <div className="people-card">
              <img src={w} className="img-fluid" alt={"..."} />
              <h5>Vividha Mishra</h5>
              <h6>Social Media Manager</h6>
            </div>
            <div className="people-card">
              <img src={o} className="img-fluid" alt={"..."} />
              <h5>Priyanka Sharma</h5>
              <h6>Social Media Manager</h6>
            </div>
            <div className="people-card">
              <img src={r} className="img-fluid" alt={"..."} />
              <h5>Sarah Zarein Raza</h5>
              <h6>Senior Creative Strategist</h6>
            </div>
            <div className="people-card">
              <img src={d} className="img-fluid" alt={"..."} />
              <h5>Ayushi Verma</h5>
              <h6>Senior Creative Strategist</h6>
            </div>
            <div className="people-card">
              <img src={h} className="img-fluid" alt={"..."} />
              <h5>Manju Gupta</h5>
              <h6>Copywriter</h6>
            </div>
            <div className="people-card">
              <img src={y} className="img-fluid" alt={"..."} />
              <h5>Ashutosh Pandey</h5>
              <h6>Copywriter</h6>
            </div>
            <div className="people-card">
              <img src={m} className="img-fluid" alt={"..."} />
              <h5>Prakhar Srivastava</h5>
              <h6>Content Writer</h6>
            </div>
            <div className="people-card">
              <img src={a} className="img-fluid" alt={"..."} />
              <h5>Abhijeet Sinha</h5>
              <h6>Senior Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={i} className="img-fluid" alt={"..."} />
              <h5>Mohd. Ishan</h5>
              <h6>Senior Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={j} className="img-fluid" alt={"..."} />
              <h5>Muskan Goyal</h5>
              <h6>Senior Graphic Designer </h6>
            </div>
            <div className="people-card">
              <img src={k} className="img-fluid" alt={"..."} />
              <h5>Nadeem Ansari</h5>
              <h6>Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={f} className="img-fluid" alt={"..."} />
              <h5>Himanshu Gupta</h5>
              <h6>Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={z} className="img-fluid" alt={"..."} />
              <h5>Mohd. Azam Khan</h5>
              <h6>Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={e} className="img-fluid" alt={"..."} />
              <h5>Harsh Rao Holkar</h5>
              <h6>Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={n} className="img-fluid" alt={"..."} />
              <h5>Pratyush Jaiswal</h5>
              <h6>Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={c} className="img-fluid" alt={"..."} />
              <h5>Asim Jafri</h5>
              <h6>Motion Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={t} className="img-fluid" alt={"..."} />
              <h5>Shubh Gupta</h5>
              <h6>Motion Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={u} className="img-fluid" alt={"..."} />
              <h5>Shubham Yadav</h5>
              <h6>Motion Graphic Designer</h6>
            </div>
            <div className="people-card">
              <img src={aa} className="img-fluid" alt={"..."} />
              <h5>Mohd. Sharukh</h5>
              <h6>Digital Marketing Manager</h6>
            </div>
            <div className="people-card">
              <img src={p} className="img-fluid" alt={"..."} />
              <h5>Qayam Raza</h5>
              <h6>Accountant</h6>
            </div>
          </Slider>
        </div>
      </main>
    </>
  );
}
