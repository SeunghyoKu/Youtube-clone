import React from "react";
import styles from "./videoItem.module.css";
import getElapsedTime from "../../../utils/getElapsedTime";

const Video = (props) => {
  const {
    thumbnails,
    title,
    channelTitle,
    publishedAt,
    description,
  } = props.video.snippet;
  const { kind } = props.video.id;
  const isVideo = kind && /#([a-zA-Z]*)/.exec(kind)[1] === "video";
  const { menuOpened, searched } = props;
  const isNewVideo = publishedAt && /시간/.exec(getElapsedTime(publishedAt));

  return searched ? (
    <li className={styles.searchedVideo}>
      {isVideo ? (
        <img
          className={styles.searchedThumbnails}
          src={thumbnails.medium.url}
          alt="thumbnails"
        ></img>
      ) : (
        <div className={styles.imageBox}>
          <img
            className={styles.channelProfile}
            src={thumbnails.medium.url}
            alt="channelProfile"
          ></img>
        </div>
      )}

      <div className={styles.videoInfo + " " + styles.videoInfoSearched}>
        <h3 className={styles.searchedTitle}>{title}</h3>
        {isVideo ? <p className={styles.channelTitle}>{channelTitle}</p> : ""}
        {isVideo ? (
          <p className={styles.elapsedTime}>{getElapsedTime(publishedAt)}</p>
        ) : (
          ""
        )}
        <p className={styles.description}>{description}</p>
        {isNewVideo ? (
          <span className={styles.newVideoTag}>새 동영상</span>
        ) : (
          ""
        )}
      </div>
      {!isVideo ? <button className={styles.subscribe}>구독</button> : ""}
    </li>
  ) : (
    <li
      className={
        menuOpened ? styles.video : styles.video + " " + styles.videoClosed
      }
    >
      <img
        className={styles.thumbnails}
        src={thumbnails.medium.url}
        alt="thumbnails"
      ></img>
      <div className={styles.videoInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.channelTitle}>{channelTitle}</p>
        <p className={styles.elapsedTime}>{getElapsedTime(publishedAt)}</p>
      </div>
    </li>
  );
};

export default Video;
