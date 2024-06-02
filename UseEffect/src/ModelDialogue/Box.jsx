import React, { forwardRef, useEffect, useRef, useState } from "react";
import Dialogue from "./Dialogue";

function Box() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(true)}>open dialogue</button>
      <Dialogue isOpen={show}>
        Hello there Aditya!
        <br />
        <button
          style={{ position: "relative" }}
          onClick={() => {
            setShow(false);
          }}>
          Close
        </button>
      </Dialogue>
    </>
  );
}

export default Box;
