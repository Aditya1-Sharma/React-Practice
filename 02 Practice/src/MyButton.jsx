import React from "react";

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "10px", fontSize: "large" }}>
      Clicked {count}
    </button>
  );
}

export default MyButton;
