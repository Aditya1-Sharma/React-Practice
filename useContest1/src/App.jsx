import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useContext } from "react";
import { CounterContext } from "./Context/Context";
function App() {
  const counterState = useContext(CounterContext);
  function handleClick() {
    counterState.setCount(counterState.count + 1);
    console.log(counterState);
  }

  return (
    <>
      <h1>Hello World {counterState.count}</h1>
      <button onClick={handleClick}>Click me {counterState.count}</button>
    </>
  );
}

export default App;
