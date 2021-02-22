import React, { useState } from "react";
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
  const isChannel = kind && /#([a-zA-Z]*)/.exec(kind)[1] === "channel";
  const { menuOpened, searched } = props;
  const isNewVideo = publishedAt && /시간/.exec(getElapsedTime(publishedAt));
  const [subscribed, setSuscirbed] = useState(false);

  const onClick = () => {
    const subscribeStatus = subscribed;
    setSuscirbed(!subscribeStatus);
  };

  return searched ? (
    <li className={styles.searchedVideo}>
      {!isChannel ? (
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
        {!isChannel ? (
          <p className={styles.channelTitle}>{channelTitle}</p>
        ) : (
          ""
        )}
        {!isChannel ? (
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
      {isChannel ? (
        subscribed ? (
          <button
            className={styles.subscribe + " " + styles.notSubscribed}
            onClick={onClick}
          >
            구독
          </button>
        ) : (
          <button
            className={styles.subscribe + " " + styles.subscribed}
            onClick={onClick}
          >
            구독중
          </button>
        )
      ) : (
        ""
      )}
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
