import React from "react";
import Video from "../videoItem/videoItem";
import styles from "./videoList.module.css";

const Videos = (props) => {
  const { videoList, menuOpened, searched, videoOpened, onVideoClick } = props;

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
              onVideoClick={onVideoClick}
            />
          ))}
        </ul>
      </main>
    );
  } else if (!!videoList.length) {
    return (
      <main className={styles.main}>
        <ul className={styles.videoList + " " + styles.videoListInDetailView}>
          {videoList.map((video) => (
            <Video
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
      <div>
        <p className={styles.error}>API 호출이 하루 최대 양을 초과했습니다.</p>
        <p className={styles.error}>죄송하지만 다음에 이용해주세요. :-(</p>
      </div>
    );
  }
};

export default Videos;
