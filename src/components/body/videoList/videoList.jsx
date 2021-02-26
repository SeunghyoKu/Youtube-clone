import React from "react";
import Video from "../videoItem/videoItem";
import styles from "./videoList.module.css";

const Videos = (props) => {
  const {
    videoList,
    menuOpened,
    setMenuOpened,
    searched,
    videoOpened,
    setVideoOpened,
  } = props;

  if (!videoOpened) {
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
            <Video
              video={video}
              menuOpened={menuOpened}
              searched={searched}
              videoOpened={videoOpened}
              setVideoOpened={setVideoOpened}
            />
          ))}
        </ul>
      </main>
    );
  } else {
    return (
      <main className={styles.main}>
        <ul className={styles.videoList + " " + styles.videoListInDetailView}>
          {videoList.map((video) => (
            <Video
              video={video}
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
              searched={searched}
              videoOpened={videoOpened}
              setVideoOpened={setVideoOpened}
            />
          ))}
        </ul>
      </main>
    );
  }
};

export default Videos;
