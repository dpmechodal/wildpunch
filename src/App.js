import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrolltotop from "./Scrolltotop";
import Home from "./Components/Home";
import WildWeDo from "./Components/WildWeDo";
import Contact from "./Components/Contact";
import WildWeAre from "./Components/WildWeAre";
import WildWildWork from "./Components/WildWildWork";
import BeWildWithUs from "./Components/BeWildWithUs";
import Microlit from "./Components/Microlit";
import DhartiCo from "./Components/DhartiCo";
import LoomNeedles from "./Components/LoomNeedles";
import PetalsFurniture from "./Components/PetalsFurniture";
import ModernSchool from "./Components/ModernSchool";
import RDUC from "./Components/RDUC";
import SiddharthAgro from "./Components/SiddharthAgro";
import SpringTek from "./Components/SpringTek";
import TeaSaga from "./Components/TeaSaga";
import TridentHills from "./Components/TridentHills";
import Jabra from "./Components/Jabra";
import Kokam from "./Components/Kokam";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Router>
          <Scrolltotop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WildWeDo" element={<WildWeDo />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/WildWeAre" element={<WildWeAre />} />
            <Route path="/WildWildWork" element={<WildWildWork />} />
            <Route path="/BeWildWithUs" element={<BeWildWithUs />} />
            <Route path="/Microlit" element={<Microlit />} />
            <Route path="/DhartiCo" element={<DhartiCo />} />
            <Route path="/LoomNeedles" element={<LoomNeedles />} />
            <Route path="/PetalsFurniture" element={<PetalsFurniture />} />
            <Route path="/ModernSchool" element={<ModernSchool />} />
            <Route path="/RDUC" element={<RDUC />} />
            <Route path="/SiddharthAgro" element={<SiddharthAgro />} />
            <Route path="/SpringTek" element={<SpringTek />} />
            <Route path="/TeaSaga" element={<TeaSaga />} />
            <Route path="/TridentHills" element={<TridentHills />} />
            <Route path="/Jabra" element={<Jabra />} />
            <Route path="/Kokam" element={<Kokam />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
// import React, { useEffect, useState, useRef } from "react";
// import "./App.css"; // Make sure the CSS from above is in App.css
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Scrolltotop from "./Scrolltotop";
// import Home from "./Components/Home";
// import WildWeDo from "./Components/WildWeDo";
// import Contact from "./Components/Contact";
// import WildWeAre from "./Components/WildWeAre";
// import WildWildWork from "./Components/WildWildWork";
// import BeWildWithUs from "./Components/BeWildWithUs";

// const MathUtils = {
//   lineEq: (y2, y1, x2, x1, currentVal) => {
//     const m = (y2 - y1) / (x2 - x1),
//       b = y1 - m * x1;
//     return m * currentVal + b;
//   },
//   lerp: (a, b, n) => (1 - n) * a + n * b,
//   getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2),
// };

// function App() {
//   const cursorRef = useRef(null);
//   const circleRef = useRef(null);
//   const [mousePos, setMousePos] = useState({
//     x: window.innerWidth / 2,
//     y: window.innerHeight / 2,
//   });
//   const [scrollY, setScrollY] = useState(0); // State for scroll position
//   const [scale, setScale] = useState(1);
//   const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const { clientX: x, clientY: y } = e;
//       setMousePos({ x, y });
//     };

//     const handleScroll = () => {
//       // Update scroll position
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("scroll", handleScroll); // Add scroll listener
//     window.addEventListener("resize", () =>
//       setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
//     );

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("scroll", handleScroll); // Clean up scroll listener
//     };
//   }, []);

//   useEffect(() => {
//     const interval = requestAnimationFrame(() => render());
//     return () => cancelAnimationFrame(interval);
//   }, [mousePos, scrollY]); // Ensure the render updates when scroll changes

//   const render = () => {
//     // Check if circleRef.current is available
//     if (circleRef.current) {
//       setLastMousePos((prevPos) => ({
//         x: MathUtils.lerp(
//           prevPos.x,
//           mousePos.x - circleRef.current.offsetWidth / 2,
//           0.2
//         ),
//         y: MathUtils.lerp(
//           prevPos.y,
//           mousePos.y - circleRef.current.offsetHeight / 2 + scrollY, // Adjust y position by scrollY
//           0.2
//         ),
//       }));

//       if (cursorRef.current) {
//         cursorRef.current.style.transform = `translateX(${lastMousePos.x}px) translateY(${lastMousePos.y}px) scale(${scale})`;
//       }
//     }
//   };

//   const enter = () => {
//     setScale(1.9);
//   };

//   const leave = () => {
//     setScale(1);
//   };

//   const click = () => {
//     setScale(0.4);
//   };

//   return (
//     <HelmetProvider>
//       <div
//         ref={cursorRef}
//         className="js-cursor"
//         onMouseEnter={enter}
//         onMouseLeave={leave}
//         onClick={click}
//       >
//         <div
//           className="c-cursor__inner c-cursor__inner--circle js-cursor-inner"
//           ref={circleRef}
//         >
//           <div className="c-cursor__side c-cursor__side--left js-cursor-right"></div>
//           <div className="c-cursor__side c-cursor__side--right js-cursor-left"></div>
//         </div>
//       </div>
//       <div className="App">
//         <Router>
//           <Scrolltotop />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/WildWeDo" element={<WildWeDo />} />
//             <Route path="/Contact" element={<Contact />} />
//             <Route path="/WildWeAre" element={<WildWeAre />} />
//             <Route path="/WildWildWork" element={<WildWildWork />} />
//             <Route path="/BeWildWithUs" element={<BeWildWithUs />} />
//           </Routes>
//         </Router>
//       </div>
//     </HelmetProvider>
//   );
// }

// export default App;
