import React from "react";
import SubscribedButton from "../subscribeButton/subscribeButton";
import VideoItemInBoardView from "./videoItemInBoardView";
import styles from "./videoItem.module.css";
import getElapsedTime from "../../../utils/getElapsedTime";
import VideoInfo from "./videoInfo/videoInfo";
import Thumbnails from "./thumbnails/thumbnails";

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

  const isListView = !!searched || !!videoOpened;

  const onVideoClick = () => {
    props.setVideoOpened(props.video);
  };

  return isListView ? (
    <li className={styles.searchedVideo} onClick={onVideoClick}>
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
  ) : (
    // in BoarView (in main page)
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
