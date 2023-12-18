import React from "react";

const VideoTitle = ({ id, title, overview }) => {
  return (
    <div className="absolute w-full h-full text-white bg-gradient-to-r from-black flex flex-col justify-between items-center pt-16">
      <div className="text-center">
        <h1
          className="text-xl py-2 font-light"
          style={{
            color: "#FFFFFF",
            textShadow: "0px 3px 6px #000000AD",
            opacity: "0.93",
          }}
        >
          Welcome to the cloudifyTests
        </h1>

        <p className="text-2xl py-2 font-bold">
          Cross Browser Testing Platform
        </p>
        {/* <p>Clean and competent testing solutions for your Selenium Automations</p> */}
      </div>
      <div className="flex w-fit gap-5 pb-5">
        <button className="p-4 w-56 bg-primary-btn-color">
          Schedule your demo
        </button>

        <button className="p-4 w-56 bg-secondary-btn-color">
          Try for free
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
