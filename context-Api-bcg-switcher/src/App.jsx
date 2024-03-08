import { useEffect , useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setthemeMode] = useState("light")
  const lightTheme = ()=>{
    setthemeMode("light")
  }
  const darkTheme =()=>{
    setthemeMode("dark")
  }

  // How actual theme change occur

  useEffect(()=>{
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          {/* themebutton */}
          <ThemeBtn/>
          <div className="w-full max-w-sm mx-auto"></div>
          {/* card */}
          <Card/>
        </div>

      </div>
    </ThemeProvider>
  );
}

export default App;
