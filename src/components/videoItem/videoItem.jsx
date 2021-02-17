import React from "react";
import styles from "./videoItem.module.css";
import getElapsedTime from "../../utils/getElapsedTime";

const Video = (props) => {
  //const { id } = props.video;
  const { thumbnails, title, channelTitle, publishedAt } = props.video;

  const applyEllipsis = (title) => {
    const maxString = 77;
    return title.length > maxString
      ? title.substr(0, maxString - 3) + "..."
      : title;
  };

  // 225 : 202
  return (
    <li className={styles.video}>
      <img
        className={styles.thumbnails}
        src={thumbnails.medium.url}
        alt="thumbnails"
      ></img>
      <div className={styles.videoInfo}>
        <h3 className={styles.title}>{applyEllipsis(title)}</h3>
        <p className={styles.channelTitle}>{channelTitle}</p>
        <p className={styles.elapsedTime}>{getElapsedTime(publishedAt)}</p>
      </div>
    </li>
  );
};

export default Video;
