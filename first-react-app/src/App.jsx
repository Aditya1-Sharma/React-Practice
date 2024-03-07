import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const AddVal = ()=>{
    // setCount(count => count+1);
    // setCount(count => count+1);
    // setCount(count => count+1);
    // setCount(count => count+1);

    // setCount(count+1)
    // setCount(count+2)
    if(count<20)setCount(count+1) 
    else{
    setCount(0);
    }
  }
  const RemoveVal = ()=>{
    
    if(count>0)setCount(count-1);
  }
    // console.log(count);
  return (
   <div>
   <h1 className = "first counter">Chai aur Code Counter Code {count}</h1>
   <h3>Aditya Sharma</h3>
   <button id = 'btn' onClick={AddVal}>Add value {count}</button>
   <br />
   <button id = 'btn' onClick={RemoveVal}>Remove Value : {count}</button>
   </div>
  )
}

export default App
