import React from "react";

function ListPicker(props) {
  const randIdx = Math.floor(Math.random() * props.values.length);
  console.log(randIdx);
  const ele = props.values[randIdx];
  return (
    <>
      <h3>The Value Picked is : {ele}</h3>
    </>
  );
}

export default ListPicker;
