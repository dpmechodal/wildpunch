import React from "react";
import c2 from "../img/afaqs.png";
import c3 from "../img/AOTW.png";
import c4 from "../img/POTW.png";
import c5 from "../img/ST.png";
import c6 from "../img/WBDS.png";
import CursorErrow from "./CursorErrow";

export default function Marquee() {
  const images = [c2, c3, c4, c5, c6, c2, c3, c4, c5, c6, c2, c3, c4, c5, c6];

  return (
    <div className="marquee">
      <div className="marquee-content">
        {images.map((image, index) => (
          <div className="marquee-item" key={index}>
            <img src={image} alt={`Marquee Image ${index + 1}`} />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="marquee-item" key={`duplicate-${index}`}>
            <img src={image} alt={`Duplicate Marquee Image ${index + 1}`} />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="marquee-item" key={`duplicate-${index}`}>
            <img src={image} alt={`Duplicate Marquee Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
