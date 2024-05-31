import React from "react";
import { useState } from "react";
import MyButton from "./MyButton";

function CounterUpdateSimul() {
  let count1 = 0;
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    // count1++;
    // console.log(count1);
  }
  console.log(count);

  return (
    <>
      <h1>Counter update Simultaneously</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count1} onClick={handleClick} />
      {/* <MyButton count={count1} /> */}
      {/* <div>{count1}</div>
      <div>{count1}</div> */}
    </>
  );
}

export default CounterUpdateSimul;
