import React from "react";

function Greeter({ person = "Everyone", from = "Los Angles" }) {
  return (
    <div>
      <h1>
        Hello {person} , {from}
      </h1>
    </div>
  );
}

export default Greeter;
