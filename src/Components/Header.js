import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import gsap from "gsap";

const Header = () => {
  const location = useLocation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  useEffect(() => {
    const splitTarget = document.querySelectorAll(".js-splitText");

    splitTarget.forEach((target) => {
      // Ensure text splitting happens only once
      if (!target.classList.contains("is-processed")) {
        const originalText = target.textContent.trim(); // Get text content
        target.textContent = ""; // Clear existing content to prevent duplication

        let newText = "";
        originalText.split("").forEach((char) => {
          // Handle spaces explicitly by adding a non-breaking space
          if (char === " ") {
            newText += `<span>&nbsp;</span>`; // Preserve spaces as &nbsp;
          } else {
            newText += `<span>${char}</span>`;
          }
        });

        const newTextBefore = `<div class="before">${newText}</div>`;
        const newTextAfter = `<div class="after">${newText}</div>`;
        const wrappedText = `<span class="text-wrap">${newTextBefore}${newTextAfter}</span>`;

        target.innerHTML = wrappedText;
        target.classList.add("is-processed"); // Mark as processed
      }
    });

    splitTarget.forEach((target) => {
      const beforeSpan = target
        .querySelector(".before")
        ?.querySelectorAll("span");
      const afterSpan = target
        .querySelector(".after")
        ?.querySelectorAll("span");

      const handleMouseEnter = () => {
        if (beforeSpan && afterSpan) {
          gsap.to(beforeSpan, {
            y: "-100%",
            stagger: 0.03,
            ease: "power2.out",
          });
          gsap.to(afterSpan, { y: "0%", stagger: 0.03, ease: "power2.out" });
        }
      };

      const handleMouseLeave = () => {
        if (beforeSpan && afterSpan) {
          gsap.to(beforeSpan, { y: "0%", stagger: 0.03, ease: "power2.out" });
          gsap.to(afterSpan, { y: "100%", stagger: 0.03, ease: "power2.out" });
        }
      };

      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup event listeners on component unmount
      return () => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div>
      <nav className={`navbar ${isNavbarOpen ? "bg-nav" : "bg-dark"}`}>
        <div className="container-fluid">
          <Link to={"/"} className="logo">
            <img src={logo} className="img-fluid" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            {isNavbarOpen ? <i className="fa-solid fa-xmark"></i> : "MENU"}
          </button>
          <div
            className={`collapse navbar-collapse ${
              isNavbarOpen ? "show" : ""
            } p-header__nav p-nav`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto p-nav__lists">
              <li
                className={`${
                  location.pathname === "/" ? "active" : ""
                } p-nav__list`}
              >
                <Link to="/" className="js-splitText">
                  HOME
                </Link>
                {/* <NavLink to={"/"}></NavLink> */}
              </li>
              <li
                className={`${
                  location.pathname === "/WildWeAre" ? "active" : ""
                } p-nav__list`}
              >
                <Link to="/WildWeAre" className="js-splitText">
                  WILD WE ARE
                </Link>
                {/* <NavLink to={"/WildWeAre"}>WILD WE ARE</NavLink> */}
              </li>
              <li
                className={`${
                  location.pathname === "/WildWeDo" ? "active" : ""
                } p-nav__list`}
              >
                <Link to="/WildWeDo" className="js-splitText">
                  WILD WE DO
                </Link>
                {/* <NavLink to={"/WildWeDo"}>WILD WE DO</NavLink> */}
              </li>
              <li
                className={`${
                  location.pathname === "/WildWildWork" ? "active" : ""
                } p-nav__list`}
              >
                <Link to="/WildWildWork" className="js-splitText">
                  WILD WILD WORK
                </Link>
                {/* <NavLink to={"/WildWildWork"}>WILD WILD WORK</NavLink> */}
              </li>
              <li
                className={`${
                  location.pathname === "/BeWildWithUs" ? "active" : ""
                } p-nav__list`}
              >
                <Link to="/BeWildWithUs" className="js-splitText">
                  BE WILD WITH US
                </Link>
                {/* <NavLink to={"/BeWildWithUs"}>BE WILD WITH US</NavLink> */}
              </li>
              <li
                className={`${
                  location.pathname === "/Contact" ? "active" : ""
                } p-nav__list`}
              >
                <Link to="/Contact" className="js-splitText">
                  CONTACT
                </Link>
                {/* <NavLink to={"/Contact"}>CONTACT</NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
