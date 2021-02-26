import React from "react";
import VideoItemInBoardView from "./videoItemInBoardView";
import styles from "./videoItem.module.css";
import getElapsedTime from "../../../utils/getElapsedTime";
import VideoInfo from "./videoInfo/videoInfo";
import Thumbnails from "./thumbnails/thumbnails";
import SubscribedButton from "../subscribeButton/subscribeButton";

const Video = (props) => {
  const {
    thumbnails,
    title,
    channelTitle,
    publishedAt,
    description,
  } = props.video.snippet;

  const { kind } = props.video.id;
  const isChannel = kind && /channel/.test(kind);
  const { menuOpened, searched, videoOpened } = props;
  const { onVideoClick } = props;

  const onClick = () => {
    if (!isChannel) {
      onVideoClick(props.video);
    }
  };

  if (!!videoOpened) {
    return (
      <li className={styles.videoItemInDetailView} onClick={onClick}>
        <Thumbnails isDetailView={true} thumbnails={thumbnails.medium.url} />
        <VideoInfo
          title={title}
          channelTitle={channelTitle}
          isVideo={!isChannel}
          elapsedTime={getElapsedTime(publishedAt)}
          viewType="detail"
        />
      </li>
    );
  } else if (!!searched) {
    return (
      <li className={styles.searchedVideo} onClick={onClick}>
        <Thumbnails isChannel={isChannel} thumbnails={thumbnails.medium.url} />
        <VideoInfo
          title={title}
          channelTitle={channelTitle}
          description={description}
          isVideo={!isChannel}
          elapsedTime={getElapsedTime(publishedAt)}
          viewType="search"
        />
        {isChannel ? <SubscribedButton /> : ""}
      </li>
    );
  } else {
    // in BoarView (in main page)
    return (
      <VideoItemInBoardView
        menuOpened={menuOpened}
        onClick={onClick}
        thumbnails={thumbnails.medium.url}
        title={title}
        channelTitle={channelTitle}
        elapsedTime={getElapsedTime(publishedAt)}
      />
    );
  }
};

export default Video;
