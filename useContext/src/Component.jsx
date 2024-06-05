import React from "react";
import { useContext } from "react";
import { counterContext } from "./Context/Context";
function Component() {
  const value = useContext(counterContext);
  return <div>{value.count}</div>;
}

export default Component;
