import React from "react";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Container/Home";
import Features from "../Features/Features";
import Offerings from "../Offerings/Offerings";
import Usage from "../Usage/Usage";
import Footer from "../../Pages/Footer/Footer";
import CalculatorModule from "../Calculator/NewClaculator/CalculatorModule";

function LandingPage() {
  return (
    <div className="App">
      <Home />
      <About />
      <Offerings />
      <Features />
      <Usage />
      <CalculatorModule />
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;