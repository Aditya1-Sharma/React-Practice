import React from "react";
import { Outlet } from "react-router-dom";

function CareerLayout() {
  return (
    <div className="career-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        ducimus quisquam ipsum, possimus minus unde d
      </p>
      <Outlet />
    </div>
  );
}

export default CareerLayout;
