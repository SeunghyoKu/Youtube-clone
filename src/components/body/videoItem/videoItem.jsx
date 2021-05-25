import React from "react";
import VideoItemInBoardView from "./videoItemInBoardView";
import styled from "styled-components";

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
  const { menuOpened, searched, videoOpened, onVideoClick } = props;

  const onClick = () => {
    if (!isChannel) {
      onVideoClick(props.video);
    }
  };

  if (!!videoOpened) {
    return (
      <VideoItem onClick={onClick}>
        <Thumbnails isDetailView={true} thumbnails={thumbnails.medium.url} />
        <VideoInfo
          title={title}
          channelTitle={channelTitle}
          isVideo={!isChannel}
          elapsedTime={getElapsedTime(publishedAt)}
          viewType="detail"
        />
      </VideoItem>
    );
  } else if (!!searched) {
    return (
      <VideoItemSearched onClick={onClick}>
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
      </VideoItemSearched>
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

const VideoItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;

const VideoItemSearched = styled.li`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 10%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 14px;
  &:hover {
    cursor: pointer;
  }
`;
