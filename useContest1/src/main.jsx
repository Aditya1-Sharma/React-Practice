import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CounterPRovider } from "./Context/Context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterPRovider>
      <App />
    </CounterPRovider>
  </React.StrictMode>
);
