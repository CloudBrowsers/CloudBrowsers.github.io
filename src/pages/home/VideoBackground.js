import React from "react";

const VideoBackground = ({ movieId }) => {
  return (
    <div className="w-full h-full">
      <video
        className="w-full h-full object-cover"
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
  );
};

export default VideoBackground;
