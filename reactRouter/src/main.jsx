import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Homes/Home.jsx'
import About from './Components/Abouts/About.jsx'
import Github from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"/about",
//         element: <About/>
//       },
//       {
//         path: "/github",
//         element: <Github/>
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='Github' element={<Github/>}/>
    <Route path='user/:userid' element={<User/>}/>
    

  </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
