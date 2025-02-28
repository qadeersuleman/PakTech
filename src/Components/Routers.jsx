import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import AboutUs from "./About/AboutUs";
import Contact from "./About/Contact";
import CustomNavbar from "./Home/CustomNavbar";
import Footer from "./Footer";
import Services from "./About/Services";
import Projects from "./Project/Projects";

const Routers = () => {
  return (
    <>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </>
  );
};

export default Routers;
