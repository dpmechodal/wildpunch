import React, { useEffect, useRef, useState } from "react";

function CursorErrow() {
  const cursorRef = useRef(null);
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      cursor.style.transform = `translate(${mousePos.x}px, ${mousePos.y}px) scale(${scale})`;
    }
  }, [mousePos, scale]);

  const handleMouseEnter = () => setScale(1.5);
  const handleMouseLeave = () => setScale(1);
  const handleClick = () => {
    setScale(0.7);
    setTimeout(() => setScale(1), 300);
  };

  return (
    <div
      ref={cursorRef}
      className="cursor"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    ></div>
  );
}

export default CursorErrow;
