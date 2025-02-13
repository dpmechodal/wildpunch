import React, { useEffect, useState } from "react";
import logo from "../logo-dark.svg";

const Splash = () => {
  const [speed, setSpeed] = useState(1); // Start with 1s
  const [visible, setVisible] = useState(true); // Splash screen visible

  useEffect(() => {
    let interval = setInterval(() => {
      setSpeed((prev) => Math.max(0.1, prev - 0.1)); // Reduce speed gradually
    }, 100); // Change speed every 400ms

    setTimeout(() => {
      clearInterval(interval); // Stop interval after 2 seconds
      setVisible(false); // Hide splash screen after 2s
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null; // Hide splash screen

  return (
    <div className="splash-screen">
      <img
        src={logo}
        className="img-fluid"
        alt="Logo"
        style={{ animation: `rotation ${speed}s infinite linear` }}
      />
    </div>
  );
};

export default Splash;
