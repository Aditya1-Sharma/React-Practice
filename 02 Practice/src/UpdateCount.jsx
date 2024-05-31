import React from "react";
import { useState } from "react";

function UpdateCount() {
  const [count, setCount] = useState(0);
  // console.log(count);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button
        onClick={handleClick}
        style={{
          border: "2px solid red",
          padding: "10px",
          borderRadius: "10%",
          fontSize: "large",
        }}>
        Clicked {count}
      </button>
    </>
  );
}

export default UpdateCount;
