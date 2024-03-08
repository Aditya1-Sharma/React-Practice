import { useState } from 'react'
import Header from './Components/Headers/Header'
import Home from './Components/Homes/Home'
import Footer from './Components/Footers/Footer'
import Github from './Components/Github/Github'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-center font-bold text-3xl bg-blue-500 p-3 rounded-lg'>Hello Aditya </div>
      <Header/>
      <Home/>
      <Github/>
      <Footer/>
    </>
  )
}

export default App
