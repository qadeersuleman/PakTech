import React from "react";
import { Route, Routes } from "react-router";
import AboutUs from "./About/AboutUs";
import Main from "./Main";
import CustomNavbar from "./Home/CustomNavbar";
import Projects from "./Project/Projects";
import Services from "./About/Services";
import Contact from "./About/Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Routers(props) {
  return (
    <div>
      <CustomNavbar />
      <ScrollToTop />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Routers;
