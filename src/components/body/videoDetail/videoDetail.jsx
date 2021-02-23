import React from "react";
import styles from "./videoDetail.module.css";

const VideoDetail = ({ id, menuOpened }) => {
  console.log(menuOpened);
  return (
    <div className={styles.videoDetail}>
      <div className={styles.video}>
        <iframe
          title="ytbVideo"
          className="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${id}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;
