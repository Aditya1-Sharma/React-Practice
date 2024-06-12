import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterPRovider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount, name: "Aditya" }}>
      {props.children}
    </CounterContext.Provider>
  );
};
