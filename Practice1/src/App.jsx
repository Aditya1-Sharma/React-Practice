import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const FocusRef = useRef(null);
  function handleCount() {
    setCount((prev) => {
      return prev + 1;
    });
  }
  return (
    <>
      <h1>Practice 1</h1>

      <div className="container" onMouseEnter={handleCount}></div>

      <button onClick={() => setCount(0)}>Counter {count}</button>
    </>
  );
}

export default App;
