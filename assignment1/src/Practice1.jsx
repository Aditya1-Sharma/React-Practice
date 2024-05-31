import React from "react";
import { useState } from "react";
import { useRef } from "react";
useState;
function Practice1() {
  const [count, setCount] = useState(0);
  const [chnage, setchnage] = useState(0);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);
  function handleSubmit() {
    if (!error) setCount(chnage + count);
    inputRef.current.value = "";
  }
  function handleChange(e) {
    let val = e.target.value;
    if (isNaN(val)) {
      setError(true);
    } else {
      setError(false);
      setchnage(+val);
    }
  }
  return (
    <>
      <label htmlFor="inp">Enter the number</label>
      <input
        type="text"
        placeholder="Enter the number"
        onChange={handleChange}
        id="inp"
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <div style={{ color: "red" }}>Please enter a number</div>}
      <div>{count}</div>
    </>
  );
}

export default Practice1;
