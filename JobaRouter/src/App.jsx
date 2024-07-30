import { useState } from "react";
// import "./App.css";

import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import Contact, { contactAction } from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Career, { carrersLoader } from "./Pages/Career";
// Layouts
import RootLayout from "./Layout/RootLayout";
import HelpLayout from "./Layout/HelpLayout";

import CareerLayout from "./Layout/CareerLayout";
import CareerDetails, { careerDetailsLoader } from "./Pages/CareerDetails";
import CareersError from "./Pages/CareersError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      {/* Help Route */}
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      {/* Carrer Route */}
      <Route path="careers" element={<CareerLayout />}>
        <Route index element={<Career />} loader={carrersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          errorElement={<CareersError />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <>
      {/* <BrowserRouter>
        <header>
          <nav>
            <h1>Jobarouter</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </main>
      </BrowserRouter> */}

      {/* Alternative method  */}

      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
