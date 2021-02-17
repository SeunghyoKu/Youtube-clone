import React from "react";
import Video from "../videoItem/videoItem";
import styles from "./videoList.module.css";

const Videos = (props) => {
  const videos = props.videoList.videoList;
  return (
    <main className={styles.main}>
      <ul className={styles.videoList}>
        {videos.map((video) => (
          <Video video={video.snippet} />
        ))}
      </ul>
    </main>
  );
};

export default Videos;
