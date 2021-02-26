import React from "react";
import styles from "./videoItem.module.css";
import VideoInfo from "./videoInfo/videoInfo";

const VideoItemInBoardView = (props) => {
  const {
    menuOpened,
    onClick,
    thumbnails,
    title,
    channelTitle,
    elapsedTime,
  } = props;
  return (
    <li
      className={
        menuOpened ? styles.video : styles.video + " " + styles.videoClosed
      }
      onClick={onClick}
    >
      <img
        className={styles.thumbnails}
        src={thumbnails}
        alt="thumbnails"
      ></img>
      <VideoInfo
        title={title}
        channelTitle={channelTitle}
        elapsedTime={elapsedTime}
        viewType="board"
      />
    </li>
  );
};

export default VideoItemInBoardView;
