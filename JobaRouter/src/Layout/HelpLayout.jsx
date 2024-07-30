import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        blanditiis voluptas reprehenderit voluptatum, itaque quam hic autem sit
        quae, distinctio laboriosam voluptate corporis! Earum tempora dolorem
        asperiores sit repellat. Nulla!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ's</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default HelpLayout;
