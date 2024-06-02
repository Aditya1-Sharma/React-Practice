import React, { useRef, useEffect } from "react";
import { MapWidget } from "./Map-widget";

function Map({ zoomLevel }) {
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);
  }, [zoomLevel]);

  return <div style={{ width: 200, height: 200 }} ref={containerRef} />;
}

export default Map;
