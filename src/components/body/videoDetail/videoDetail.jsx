import React from "react";
import SubscribeButton from "../subscribeButton/subscribeButton";
import styles from "./videoDetail.module.css";
import changeDate from "../../../utils/changeDate";

const VideoDetail = ({ video, menuOpened }) => {
  const videoId = video.id.videoId ? video.id.videoId : video.id;
  const { title, channelTitle, publishedAt, description } = video.snippet;

  return (
    <div className={styles.videoDetail}>
      <div className={styles.video}>
        <iframe
          title="ytbVideo"
          className="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.videoInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.elapsedTime}>{changeDate(publishedAt)}</p>
        <p className={styles.channelTitle}>{channelTitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <SubscribeButton />
    </div>
  );
};

export default VideoDetail;
