

import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username: "Aditya",
    age: 21
  }

  return (
    <>
    
    <h1 className='bg-green-400 text-slate-500 rounded-lg'>Hello world</h1>
    <h2 className='text-3xl font-semibold'>Hello myself Aditya</h2>
      
    <Card  username = "baniyan" someobj = {myObj}  btnText = "Click me" />
    <br />
    <Card username={`earphone`}/>
    <br />
    <Card username={`spectacles`}></Card>
    </>
  )
}

export default App
