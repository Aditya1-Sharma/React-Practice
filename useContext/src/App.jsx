import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import { counterContext } from "./Context/Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        <Navbar />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </counterContext.Provider>
    </>
  );
}

export default App;
