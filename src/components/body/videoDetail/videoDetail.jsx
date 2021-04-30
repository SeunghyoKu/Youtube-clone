import React, { useState } from "react";
import SubscribeButton from "../subscribeButton/subscribeButton";
import styles from "./videoDetail.module.css";
import changeDate from "../../../utils/changeDate";

const VideoDetail = ({ video, menuOpened }) => {
  const videoId = video.id.videoId ? video.id.videoId : video.id;
  const { title, channelTitle, publishedAt, description } = video.snippet;

  const [learnMore, setLearnMore] = useState(false);

  const onClick = () => {
    const currentState = learnMore;
    setLearnMore(!currentState);
  };

  return (
    <div className={styles.videoDetail}>
      <div className={styles.video}>
        <iframe
          title="ytbVideo"
          className="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.videoInfo}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.elapsedTime}>{changeDate(publishedAt)}</p>
        <div className={styles.bar}></div>
        <div className={styles.videoInfoBoxInDetailView}>
          <div className={styles.videoInfoBoxLeftSide}>
            <p className={styles.channelTitle}>{channelTitle}</p>
            <p
              className={
                learnMore ? styles.description : styles.descriptionInLearnMore
              }
            >
              {description}
            </p>
          </div>
          <SubscribeButton />
        </div>
        {learnMore ? (
          <button onClick={onClick} className={styles.learnMoreButton}>
            간략히
          </button>
        ) : (
          <button onClick={onClick} className={styles.learnMoreButton}>
            자세히
          </button>
        )}
      </div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default VideoDetail;
