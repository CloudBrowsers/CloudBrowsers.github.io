import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOfferingsSelectedTab } from "../../redux/appSlice";
import "./Offerings.css";
import chrome from "../../assets/chrome.png";
import firefox from "../../assets/firefox.png";
import opera from "../../assets/Opera.png";
import microsoft from "../../assets/microsoft.png";
import seek from "../../assets/Seek.png";

const offeringsList = [
  "Dashboard",
  "Live Session Monitor",
  "Script-Generator",
  "History Sessions",
  "Locally Hosted Testing",
];

const Offerings = () => {
  const dispatch = useDispatch();

  const selectedTab = useSelector((store) => {
    return store.app.offeringsSelectedTab;
  });

  const logos = [
    { src: firefox, alt: "Firefox" },
    { src: chrome, alt: "Chrome" },
    { src: microsoft, alt: "Microsoft" },
    { src: seek, alt: "Seek" },
    { src: opera, alt: "Opera" },
  ];

  const LogoContainer = () => {
    return (
      <div className="common_container_style flex flex-row justify-center items-center gap-16">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="w-10 h-10 cursor-pointer transition-all duration-500 relative hover:scale-150"
          />
        ))}
      </div>
    );
  };

  const handleSelectedTabs = (ele) => {
    switch (ele) {
      case "Dashboard":
        dispatch(setOfferingsSelectedTab("Dashboard"));
        break;
      case "Live Session Monitor":
        dispatch(setOfferingsSelectedTab("Live Session Monitor"));
        break;
      case "Script-Generator":
        dispatch(setOfferingsSelectedTab("Script-Generator"));
        break;
      case "History Sessions":
        dispatch(setOfferingsSelectedTab("History Sessions"));
        break;
      case "Locally Hosted Testing":
        dispatch(setOfferingsSelectedTab("Locally Hosted Testing"));
        break;
      default:
        break;
    }
  };
  return (
    <div id="Offerings" className="page_common_container flex flex-col">
      <div className="common_container_style flex flex-col">
        <h1 className="flex font_light text-4xl py-16">
          <div className="top_header_text">Offerings</div>
        </h1>
      </div>
      <ul className="common_container_style offerings_list bg-offering-list-bg-color flex justify-between overflow-x-auto">
        {offeringsList.map((offering) => (
          <li
            onClick={() => handleSelectedTabs(offering)}
            key={offering}
            className={`whitespace-nowrap w-full text-center p-4 cursor-pointer ${
              selectedTab === offering && "bg-primary-btn-color text-white"
            } hover:bg-primary-btn-color hover:text-white`}
          >
            {offering}
          </li>
        ))}
      </ul>
      {/* tabs */}
      <div className="common_container_style flex-1 flex flex-col md:flex-row pt-16 md:pt-0 justify-between items-center">
        <div className="flex-1 flex flex-col gap-8">
          <h3 className="font_semibold text-2xl">
            {selectedTab === "Dashboard"
              ? "Dashboard"
              : selectedTab === "Live Session Monitor"
              ? "Live Session Monitor"
              : selectedTab === "Script-Generator"
              ? "Script-Generator"
              : selectedTab === "History Sessions"
              ? "History Sessions"
              : "Locally Hosted Testing"}
          </h3>
          <p className="flex flex-col md:flex-row gap-4">
            Displays number of running and pending sessions. Provides a graph of
            daily application usage including session completion, abortion,
            errors and timeouts over a date range.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="common_button bg-secondary-btn-color">
              Try for free
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="py-4 md:p-4">
            <video
              className="rounded-lg"
              loop="true"
              muted
              autoPlay="true"
              // controls="false"
              id="vid"
            >
              <source
                type="video/mp4"
                src="https://res.cloudinary.com/dsrutn5ee/video/upload/v1700033612/cloudifytests/cloudifytests_video.mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font_semibold text-2xl py-16 text-center">
          Browser Support
        </h3>
        {LogoContainer()}
      </div>
    </div>
  );
};

export default Offerings;
