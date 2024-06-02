import React from "react";
import { useEffect, useState } from "react";
function Bom() {
  const [position, setposition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    function handleMove(e) {
      setposition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handleMove);
    // alert("Hey");
    return () => {
      window.removeEventListener("pointermove", handleMove);
      //   alert("Hey i am unmounting");
    };
  }, []);

  //   console.log(position);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      />
    </>
  );
}

export default Bom;
