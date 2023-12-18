import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Home = () => {
  return (
    <div className="h-screen relative" id="Home">
      <VideoTitle id={"test"} title={"test"} overview={"test"} />
      <VideoBackground />
    </div>
  );
};

export default Home;
