import React from "react";
import { useState } from "react";
import MyButton from "./MyButton";

function CounterUpdateSimul() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Counter update Simultaneously</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </>
  );
}

export default CounterUpdateSimul;
