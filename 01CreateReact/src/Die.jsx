import React from "react";

function Die({ numsides }) {
  const roll = Math.floor(Math.random() * 7);
  return (
    <h2>
      Die roll {roll} of {numsides}
    </h2>
  );
}

export default Die;
