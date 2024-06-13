import { useState } from "react";

import "./App.css";
import { createContext } from "react";
import { useContext } from "react";
import Panel from "./Components/Panel";
import Greeting from "./Components/Greeting";
import LoginForm from "./Components/LoginForm";
export const ThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);
function App() {
  const [theme, settheme] = useState("light");
  const [currentUser, setcurrentUser] = useState(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setcurrentUser,
        }}>
        <h1>Multiple context</h1>
        <WelcomePanel />
        <label>
          Use Dark mode {": "}
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => settheme(e.target.checked ? "dark" : "light")}
          />
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <Panel title={"Welcome"}>
        {currentUser !== null ? <Greeting /> : <LoginForm />}
      </Panel>
    </>
  );
}

export function Button({ children, disabled, onClick }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <>
      <button className={className} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
export default App;
