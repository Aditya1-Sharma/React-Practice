import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const AddVal = ()=>{
    setCount(count => count+1);
    setCount(count => count+1);
    setCount(count => count+1);
    setCount(count => count+1);
    // setCount(count+1) 
  }
  const RemoveVal = ()=>{
    
    if(count>0)setCount(count-1);
  }
  return (
   <div>
   <h1 class = "first counter">Chai aur Code Counter Code</h1>
   <h3>Aditya Sharma</h3>
   <button id = 'btn' onClick={AddVal}>Add value {count}</button>
   <br />
   <button id = 'btn' onClick={RemoveVal}>Remove Value : {count}</button>
   </div>
  )
}

export default App
