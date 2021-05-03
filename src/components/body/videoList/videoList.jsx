import React from "react";
import Video from "../videoItem/videoItem";
import styles from "./videoList.module.css";

const Videos = (props) => {
  const { videoList, menuOpened, searched, videoOpened, onVideoClick } = props;
  // videoList.map((video) => console.log(video.id));
  // console.log(videoList);
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
              key={video.id.videoId || video.id}
              video={video}
              menuOpened={menuOpened}
              searched={searched}
              videoOpened={videoOpened}
              onVideoClick={onVideoClick}
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
              key={video.id.videoId || video.id}
              video={video}
              menuOpened={menuOpened}
              searched={searched}
              videoOpened={videoOpened}
              onVideoClick={onVideoClick}
            />
          ))}
        </ul>
      </main>
    );
  }
};

export default Videos;
