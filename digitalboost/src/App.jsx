import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Carrer from "./pages/Carrer";
import ServicesDetails from "./pages/ServicesDetails";
import Form from "./pages/From";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServicesDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/form" element={<Form />} />
        <Route path="/termsandcondition" element={<TermsAndConditions />} />
      </Routes>
    </div>
  );
};

export default App;
