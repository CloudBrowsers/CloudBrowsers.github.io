import React from "react";
import "./Usage.css";
import fullStart from "../../assets/star.png";
import halfStar from "../../assets/halfStar.png";

const Usage = () => {
  return (
    <div id="Usage" className="page_common_container flex flex-col">
      <div className="common_container_style flex flex-col">
        <h1 className="flex font_light text-4xl py-16 ">
          <div className="top_header_text">Usage Information</div>
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-between">
          <div className="usgae_container">
            <h3 className="font_semibold text-2xl">
              Software As A Service(Saas)
            </h3>
            <p style={{ color: "#727f9c" }}>
              A delivery model in which a software application is hosted by a
              third-party provider and made available to customers over the
              Internet. Customers can access the software through a web browser
              or a mobile app, without the need to install and maintain it on
              their own local servers or computers.
            </p>
          </div>
          <div className="usgae_container2">
            <h3 className="font_semibold text-2xl">On Premise Setup</h3>
            <p style={{ color: "#727f9c" }}>
              A software that is installed and runs on a customer’s own local
              servers or computers. The customer is responsible for setting up,
              maintaining and upgrading the software, as well as ensuring its
              proper functioning and security
            </p>
          </div>
        </div>
        <div className="flex justify-center py-16 gap-5">
          <div className="mx-auto">
            <div className="star_data">
              <img src={fullStart} />
              <img src={fullStart} />
              <img src={fullStart} />
              <img src={halfStar} />
            </div>
            <div className="title">Title</div>
          </div>
          <div className="mx-auto">
            <div className="star_data">
              <img src={fullStart} />
              <img src={fullStart} />
              <img src={fullStart} />
            </div>
            <div className="title">Title</div>
          </div>
          <div className="mx-auto">
            <div className="star_data">
              <img src={fullStart} />
              <img src={fullStart} />
              <img src={fullStart} />
            </div>
            <div className="title">Title</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
