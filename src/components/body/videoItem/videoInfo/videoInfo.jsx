import React from "react";
import styles from "./videoInfo.module.css";

const VideoInfo = (props) => {
  const { title, channelTitle, elapsedTime } = props;
  return (
    <div className={styles.videoInfo}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.channelTitle}>{channelTitle}</p>
      <p className={styles.elapsedTime}>{elapsedTime}</p>
    </div>
  );
};

export default VideoInfo;
