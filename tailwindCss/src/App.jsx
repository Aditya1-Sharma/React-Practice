import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("red")

  return (
    <> 
    <div className="w-xl h-screen"
    style={{backgroundColor: color}}>
    
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-4 '>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl'>
      <button onClick = {()=>setcolor("red")} className="outline-none px-4 py-1 rounded-xl"
      style={{backgroundColor: "red" , border: "black" , borderBlock: "black"}}

      >
        Red
      </button>
    </div>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl'>
      <button onClick = {()=>setcolor("blue")} className="outline-none px-4 py-1 rounded-xl"
      style={{backgroundColor: "blue" , border: "black" , borderBlock: "black"}}
      >
        blue
      </button>
    </div>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl'>
      <button onClick = {()=>setcolor("green")}className="outline-none px-4 py-1 rounded-xl"
      style={{backgroundColor: "Green" , border: "black" , borderBlock: "black"}}
      >
        Green
      </button>
    </div>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl'>
      <button onClick = {()=>setcolor("Pink")} className="outline-none px-4 py-1 rounded-xl"
      style={{backgroundColor: "Pink" , border: "black" , borderBlock: "black"}}
      >
        Pink
      </button>
    </div>
    </div>
    </div>

    </>
  )
}

export default App 
