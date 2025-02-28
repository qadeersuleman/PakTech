import React from "react";
// import CustomNavbar from "./Home/CustomNavbar";
import FrontpageComponent from "./Home/FrontpageComponent";
import Fact from "./Project/Fact";
import AboutUs from "./About/AboutUs";
import Services from "./About/Services";
import Projects from "./Project/Projects";
// import Blog from "./About/Blog";
import Team from "./Project/Team";
import Testimonials from "./Testimonials";
import Contact from "./About/Contact";
import Footer from "./Footer";
// import TermsCondition from "./Terms/Terms_Condition";

export default function Main() {
  return (
    <div>
      <FrontpageComponent />
      <Fact />
      <AboutUs />
      <Services />
      <Projects />
      {/* <Blog /> */}
      <Team />
      <Testimonials />
      <Contact />
      
      {/* <TermsCondition /> */}
    </div>
  );
}
