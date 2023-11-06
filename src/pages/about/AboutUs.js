import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="About Us" className="page_common_container flex flex-col">
      <div className="flex-1 common_container_style bg-secondary-page-color flex flex-col">
        <h1 className="flex font_light text-4xl py-16 ">
          <div className="header_text">About Us</div>
        </h1>
        <div className="flex flex-col md:flex-row flex-1 items-center">
          <div className="flex-1 flex flex-col gap-8">
            <h3 className="font_semibold text-2xl">Cloudifytests</h3>
            <p className="flex flex-col md:flex-row gap-4">
              At CloudifyTests, we understand the importance of ensuring your
              applications run seamlessly in the cloud. That's why we've created
              a comprehensive testing solution that leverages our proprietary
              tools to streamline your testing process. Our platform is built
              with security and reliability in mind, ensuring your data remains
              protected while we carry out your testing requirements. With
              CloudifyTests, you can access a range of testing solutions,
              including functional, performance, and security testing, all
              designed to meet industry standards and best practices. We believe
              in providing a personalized testing experience that is tailored to
              your specific needs. That's why we offer scalable and customizable
              testing services, allowing you to choose the services that fit
              your budget and requirements. Our goal is to improve your ROI by
              up to 8x by delivering faster, more accurate, and efficient
              testing solutions.
            </p>
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
                  src="https://ui-imagefile.s3.amazonaws.com/assets/cloudifytests_video.mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="common_container_style bg-count-section-bg-color flex justify-evenly items-center !py-8">
        <div className="flex-1  text-center border-x-2 border-black-500">
          <div className="font_bolder text-4xl">200+</div>
          <div className="text-2xl">Heading</div>
        </div>
        <div className="flex-1  text-center border-r-2 border-black-500">
          <div className="font_bolder text-4xl">50+</div>
          <div className="text-2xl">Heading</div>
        </div>
        <div className="flex-1 text-center border-r-2 border-black-500">
          <div className="font_bolder text-4xl">150+</div>
          <div className="text-2xl">Heading</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
