import React from "react";

function Item({ name, isPacked }) {
  return (
    <li className="item" style={{ fontSize: "large" }}>
      <b>
        {name} {isPacked && "✅"}
      </b>
    </li>
  );
}
function Conditional() {
  return (
    <section>
      <h1>Conditional Rendering</h1>
      <h2>Sally Ride's Packing List</h2>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={false} name="Helmet with a golden leaf" />
        <Item isPacked={true} name="Photo of Tam" />
      </ul>
    </section>
  );
}

export default Conditional;
