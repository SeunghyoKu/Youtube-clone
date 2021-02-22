import React from "react";
import Video from "../videoItem/videoItem";
import styles from "./videoList.module.css";

const Videos = (props) => {
  const { videoList, menuOpened, searched } = props;

  return (
    <main className={styles.main}>
      <ul
        className={
          menuOpened
            ? styles.videoList
            : styles.videoList + " " + styles.videoListClosed
        }
      >
        {videoList.map((video) => (
          <Video video={video} menuOpened={menuOpened} searched={searched} />
        ))}
      </ul>
    </main>
  );
};

export default Videos;
