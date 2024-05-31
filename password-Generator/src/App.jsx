import { useRef } from "react";
import { useState, useCallback , useEffect} from "react";
function App() {
  const [length, setlength] = useState(8);
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setPassword] = useState("");

  // UseRef hook

  const passwordRef = useRef()
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()_+";
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, num, char, setPassword]);
// passwordGenerator()

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password)
    alert("Copied to clipboard")
  },[password]);
  useEffect(() => {
    passwordGenerator()
  } , [length , num , char , passwordGenerator])
  
  return (
    <>
      <h1 className="text-3xl font-bold text-center underline text-white">
        Password Generator
      </h1>
      <div className=" p-33 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-center align-bottom mt-20">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref = {passwordRef}
          />
          <button onClick = {copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setlength(e.target.value)}}
            />
            <label>Length {length}</label>
            {/* <span>Length : {length}</span> */}
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={num}
              className="cursor-pointer"
              onChange={() => (setnum((prev) => !prev))}
            />
            <label>Number</label>
            </div>
            <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              value={char}
              className="cursor-pointer"
              onChange={() => (setchar((prev) => !prev))}
            />
            <label>charecter</label>
            </div>
            
        </div>
      </div>
    </>
  );
}

export default App;
