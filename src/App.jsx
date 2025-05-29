import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Services from "./Components/Services/Services.jsx";
import { Route, Routes } from "react-router-dom";
import RecipesDisplay from "./Components/RecipesDisplay.jsx";


const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Services" element={<Services />} />
      </Routes>
      <RecipesDisplay></RecipesDisplay>
    </>
  );
}
export default App; 