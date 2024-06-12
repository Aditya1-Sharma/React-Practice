import { createContext, useState, useContext } from "react";
import Form from "./Component/Form";
import "./App.css";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <h1>Updating a value via context</h1>
      <Form />
      <label>
        Use dark Mode
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => {
            setTheme(e.target.checked ? "dark" : "light");
          }}
        />
      </label>
    </ThemeContext.Provider>
  );
}

export default App;
