import React from "react";
import { useState } from "react";
import Map from "./Map";
function Container() {
  const [zoomLevel, setzoomLevel] = useState(0);
  return (
    <>
      Zoom level : {zoomLevel}x
      <button onClick={() => setzoomLevel(zoomLevel + 1)}>+</button>
      <button onClick={() => setzoomLevel(zoomLevel - 1)}>-</button>
      <Map zoomLevel={zoomLevel} />
    </>
  );
}

export default Container;
