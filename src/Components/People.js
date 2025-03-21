import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Images
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

// Employee Data
const employees = [
  { img: g, name: "Magun Trehan", position: "Founder & Director" },
  { img: q, name: "Sakar Mishra", position: "Creative Director" },
  { img: v, name: "Superna Trehan", position: "HR Manager" },
  { img: l, name: "Prachita Omar", position: "Senior Account Manager" },
  { img: b, name: "Arya Roy", position: "Senior Account Manager" },
  { img: x, name: "Simran Jalota", position: "Account Manager" },
  { img: s, name: "Shruti Mishra", position: "Account Executive" },
  { img: w, name: "Vividha Mishra", position: "Social Media Manager" },
  { img: o, name: "Priyanka Sharma", position: "Social Media Manager" },
  { img: r, name: "Sarah Zarein Raza", position: "Senior Creative Strategist" },
  { img: d, name: "Ayushi Verma", position: "Senior Creative Strategist" },
  { img: h, name: "Manju Gupta", position: "Copywriter" },
  { img: y, name: "Ashutosh Pandey", position: "Copywriter" },
  { img: m, name: "Prakhar Srivastava", position: "Content Writer" },
  { img: a, name: "Abhijeet Sinha", position: "Senior Graphic Designer" },
  { img: i, name: "Mohd. Ishan", position: "Senior Graphic Designer" },
  { img: j, name: "Muskan Goyal", position: "Senior Graphic Designer" },
  { img: k, name: "Nadeem Ansari", position: "Graphic Designer" },
  { img: f, name: "Himanshu Gupta", position: "Graphic Designer" },
  { img: z, name: "Mohd. Azam Khan", position: "Graphic Designer" },
  { img: e, name: "Harsh Rao Holkar", position: "Graphic Designer" },
  { img: n, name: "Pratyush Jaiswal", position: "Graphic Designer" },
  { img: c, name: "Asim Jafri", position: "Motion Graphic Designer" },
  { img: t, name: "Shubh Gupta", position: "Motion Graphic Designer" },
  { img: u, name: "Shubham Yadav", position: "Motion Graphic Designer" },
  { img: aa, name: "Mohd. Sharukh", position: "Digital Marketing Manager" },
  { img: p, name: "Qayam Raza", position: "Accountant" },
];

export default function Profile() {
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);

  // Arrows Click Handlers
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: null,
    prevArrow: null,
    afterChange: (index) => {
      setProgress(((index + 1) / employees.length) * 100);
    },
    responsive: [
      { breakpoint: 1025, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
      { breakpoint: 525, settings: { slidesToShow: 1.67 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
      { breakpoint: 425, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  return (
    <>
      <main>
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {employees.map((employee, index) => (
              <div key={index} className="people-card">
                <img src={employee.img} className="img-fluid" alt={employee.name} />
                <h5>{employee.name}</h5>
                <h6>{employee.position}</h6>
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
    </>
  );
}
