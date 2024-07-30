import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h2>Page not found!!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo
        sint enim quo voluptatibus impedit omnis, placeat officia iusto,
        perspiciatis dignissimos nihil iste quas sapiente explicabo odio
        voluptatum libero, animi repellendus? Veritatis quod ex similique vel,
        suscipit voluptas rem autem, doloribus, alias ea assumenda ipsa fuga
        natus nulla soluta provident.
      </p>
      <p>
        Go to <NavLink to="/">HOme page</NavLink>
      </p>
    </>
  );
}

export default NotFound;
