import React from "react";
import styles from "./videoInfo.module.css";

import NewVideoTag from "../newVIdeoTag/newVideoTag";

const VideoInfo = (props) => {
  const { title, channelTitle, elapsedTime, viewType } = props; // board
  const { isVideo, description } = props; // search

  if (viewType === "board") {
    return (
      <>
        <div className={styles.videoInfo}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.channelTitle}>{channelTitle}</p>
          <p className={styles.elapsedTime}>{elapsedTime}</p>
        </div>
      </>
    );
  } else if (viewType === "search") {
    return (
      <div className={styles.videoInfo + " " + styles.videoInfoSearched}>
        <h3 className={styles.title}>{title}</h3>
        {isVideo ? <p className={styles.channelTitle}>{channelTitle}</p> : ""}
        {isVideo ? <p className={styles.elapsedTime}>{elapsedTime}</p> : ""}
        <p className={styles.description}>{description}</p>
        <NewVideoTag elapsedTime={elapsedTime} />
      </div>
    );
  }
};

export default VideoInfo;
