import React from "react";
import { useRef } from "react";

function Practice2() {
  const FocusRef = useRef(null);

  function handleFocus() {
    FocusRef.current.focus();
  }
  return (
    <>
      <h1>Using useRef hooks to focus </h1>
      <input
        type="text"
        placeholder="Enter the number"
        ref={FocusRef}
        style={{ padding: "10px", margin: "15px", borderRadius: "10px" }}
      />
      <button onClick={handleFocus}>Focus on text</button>
    </>
  );
}

export default Practice2;
