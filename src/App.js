import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./pages/about/AboutUs";
import Capabilities from "./pages/capabilities/Capabilities";
import ContactUs from "./pages/contactus/ContactUs";
import CostCalculator from "./pages/costCalculator/CostCalculator";
import Features from "./pages/features/Features";
import Footer from "./pages/footer/Footer";
import Home from "./pages/home/Home";
import Offerings from "./pages/offerings/Offerings";
import Usage from "./pages/usage/Usage";

const App = () => {
  return (
    <div className="main_container">
      <Navbar />
      <Home />
      <AboutUs />
      <Features />
      <Offerings />
      <Capabilities />
      <Usage />
      <CostCalculator />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
