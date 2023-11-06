import React from "react";
import "./Feature.css";
import UnlimitedBrowsers from "../../assets/UnlimitedBrowsers.png";
import SessionRecording from "../../assets/Session-Recording.png";

const arrayOfFeatures = [
  {
    id: 1,
    img: "img",
    name: "Unlimited Browsers",
    description: "Run as many browsers as your cluster allows",
    hoverImageUrl: UnlimitedBrowsers,
    imageUrl: SessionRecording,
  },
  {
    id: 2,
    img: "img",
    name: "on-premise cluster",
    description:
      "Deploy on any on-premise cluster for enhanced control and security",
  },
  {
    id: 3,
    img: "img",
    name: "cross-platform",
    description: "Works across multiple types of browser platform",
  },
  {
    id: 4,
    img: "img",
    name: "cross-platform",
    description: "Works across multiple types of browser platform",
  },
  {
    id: 5,
    img: "img",
    name: "cross-platform",
    description: "Works across multiple types of browser platform",
  },
  {
    id: 6,
    img: "img",
    name: "cross-platform",
    description: "Works across multiple types of browser platform",
  },
  {
    id: 7,
    img: "img",
    name: "cross-platform",
    description: "Works across multiple types of browser platform",
  },
  {
    id: 8,
    img: "img",
    name: "cross-platform",
    description: "Works across multiple types of browser platform",
  },
];

const Features = () => {
  return (
    <div id="Features" className="page_common_container flex flex-col">
      <div className="common_container_style flex flex-col">
        <h1 className="flex font_light text-4xl py-16  ">
          <div className="top_header_text">Features</div>
        </h1>
        <div>
          <h3 className="font_semibold text-2xl pb-8">
            Why use Cloudifytests?
          </h3>
          <p className="flex flex-col md:flex-row font_light pb-8">
            Ensure your web/mobile applications' compatibility across different
            browsers, environments and devices. We allow for a higher throughput
            of test scenario completion, quick identification of defects and
            handling of multiple parallel and sequential sessions, helping your
            product achieve increased efficiency and improved scalability.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-between gap-8">
            {arrayOfFeatures.map((feature) => (
              <div
                key={feature.id}
                className="feature_box flex flex-col gap-2 w-[15rem] md:w-[20rem]"
              >
                <div className="text-xl font_bolder h-10 w-10">
                  <img
                    className="h-full w-full img"
                    src={feature.imageUrl}
                    onMouseOver={(e) =>
                      (e.currentTarget.src = feature.hoverImageUrl)
                    }
                    onMouseOut={(e) => (e.currentTarget.src = feature.imageUrl)}
                  />
                </div>
                <div className="text-xl font_bolder">{feature.name}</div>
                <div className="">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
