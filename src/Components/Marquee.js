import React from 'react';
import c1 from "../img/client-1.svg";
import c2 from "../img/client-2.svg";
import c3 from "../img/client-3.svg";
import c4 from "../img/client-4.svg";
import c5 from "../img/client-5.svg";
import c6 from "../img/client-6.svg";

export default function Marquee() {
    const images = [c1,c2,c3,c4,c5,c6];

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
