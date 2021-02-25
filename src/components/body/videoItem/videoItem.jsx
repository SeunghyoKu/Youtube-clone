import React, { useState } from "react";
import SubscribedButton from "../subscribeButton/subscribeButton";
import VideoItemInBoardView from "./videoItemInBoardView";
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
  const { menuOpened, searched, videoOpened } = props;
  const isNewVideo = publishedAt && /시간/.exec(getElapsedTime(publishedAt));

  const isListView = !!searched || !!videoOpened;

  const onVideoClick = () => {
    props.setVideoOpened(props.video);
  };

  return isListView ? (
    <li className={styles.searchedVideo} onClick={onVideoClick}>
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
      {isChannel ? <SubscribedButton /> : ""}
    </li>
  ) : (
    <VideoItemInBoardView
      menuOpened={menuOpened}
      onVideoClick={onVideoClick}
      thumbnails={thumbnails.medium.url}
      title={title}
      channelTitle={channelTitle}
      elapsedTime={getElapsedTime(publishedAt)}
    />
  );
};

export default Video;
