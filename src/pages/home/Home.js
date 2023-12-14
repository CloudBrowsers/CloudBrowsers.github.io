import React from "react";

const Home = () => {
  return (
    <div
      id="Home"
      className="common_container_style page_common_container flex flex-col md:flex-row mt-[10rem] md:mt-0 justify-between items-center"
    >
      <div className="flex-1 flex flex-col gap-8">
        <div className="font_light text-xl">Welcome to CloudifyTests</div>
        <div className="font_bolder text-5xl">
          <div>Cross Browser Testing Platform</div>
          <div>Platform</div>
        </div>
        <div className="text-xl">
          Clean and competent testing solutions for your Selenium{" "}
          <span className="font_semibold">Automations</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="common_button bg-primary-btn-color">
            Schedule your demo
          </button>
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
  );
};

export default Home;
