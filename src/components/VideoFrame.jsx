import React from "react";
const VideoFrame = ({ component }) => {
  const videoId = component.videoLink.url.slice(-11);

  return (
    <div className="video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1`}
        title={component.videoLink.title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        rel="0"
        allowFullScreen
      />
    </div>
  );
};
export default VideoFrame;
