import React from "react";
import "./Footer.css";
import logoImg from "../../assets/Logo.png";
import faceBook from "../../assets/facebook.png";
import linkedIn from "../../assets/linkedIn.png";
import youTube from "../../assets/youTube.png";

const footerData = {
  company: {
    title: "Company",
    links: ["Home", "About Us", "Offerings", "Benefits", "Contact Us"],
  },
  testingSolutions: {
    title: "Testing Solutions",
    links: [
      "Web Testing",
      "Playwright",
      "Selenium Testing",
      "Live Testing",
      "Locally Hosted Testing",
    ],
  },
  upcomingFeatures: {
    title: "Upcoming Features",
    links: [
      "Cypress Integration",
      "Mobile Emulators & Simulators",
      "Error Analysis",
      "Rest API Access",
      "Integration With CI/CD Tools",
    ],
  },
};

const Footer = () => {
  return (
    <div id="Footer" className="common_container_style">
      <div className="sm:justify-between footer_data">
        {Object.keys(footerData).map((section, index) => (
          <div key={index} className="footer_section">
            <h3 className="font_light text-2xl text">
              {footerData[section].title}
            </h3>
            {footerData[section].links.map((link, linkIndex) => (
              <div key={linkIndex} className="inner_text">
                {link}
              </div>
            ))}
          </div>
        ))}
        <div className="footer_section_img">
          <img src={logoImg} />
        </div>
      </div>
      <div className="flex justify-between footer">
        <div className="copyright_section">
          <div className="flex justify-center items-center copyright">
            Copyright 2023. All right reserved
          </div>
          <div>Privacy Policy</div>
        </div>
        <div className="text-end copyright">
          <div className="flex justify-center items-center gap-3 copyright">
            <div>Contact With Us</div>
            <div className="flex justify-between">
              <img src={faceBook} />
            </div>
            <div className="flex justify-between">
              <img src={linkedIn} />
            </div>
            <div className="flex justify-between">
              <img src={youTube} />
            </div>
          </div>
          <div className="text-center terms">Terms of Cookies</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
