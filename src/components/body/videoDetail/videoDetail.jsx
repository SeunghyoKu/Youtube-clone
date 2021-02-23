import React from "react";

const VideoDetail = ({ id }) => {
  return (
    <>
      <iframe
        title="hello"
        className="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/${id}`}
        frameborder="0"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default VideoDetail;
