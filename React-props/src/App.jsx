import React from 'react'
import './App.css'
import Card from './Component/Card'
function App() {
const price={
  about: "laptop",
  name: "macBook"
}
  return (
    <>
     <h1 className=" text-gray-400 text-4xl font-bold underline text-center">
      Hello world!
    </h1>
    
    <Card name="macbook" obj = {price}/>
    <Card name="Dell inspiron" obj = {price}/>


    </> 
  )
}

export default App
