import React from "react";
import "./Capabilities.css";
import curl from "../../assets/curl.png";
import python from "../../assets/python.png";
import ruby from "../../assets/ruby.png";
import java from "../../assets/java.png";

const Capabilities = () => {
  return (
    <div id="Capabilities" className="page_common_container flex flex-col">
      <div className="common_container_style flex flex-col">
        <h1 className="flex font_light text-4xl py-16">
          <div className="top_header_text">Use the language Capabilities</div>
        </h1>
        <div>
          <p className="flex flex-col md:flex-row font_light pb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
        </div>
        {/* Code snippit */}
        <div class="grid-container">
          <div className="flex justify-center items-center language_section">
            <div className="language_text">
              <img src={curl} />
            </div>
            {/* <div className="language_text"> */}
            <img className="language_text_img" src={python} />
            {/* </div> */}
            {/* <div className="language_text"> */}
            <img className="language_text_img" src={ruby} />
            {/* </div> */}
            {/* <div className="language_text"> */}
            <img className="language_text_img" src={java} />
            {/* </div> */}
          </div>
          <div className="snippit_data">hell</div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
