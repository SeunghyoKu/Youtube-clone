import React, { useContext } from "react";
import VideoItemInBoardView from "./videoItemInBoardView";
import styled from "styled-components";

import getElapsedTime from "../../../utils/getElapsedTime";
import VideoInfo from "./videoInfo/videoInfo";
import Thumbnails from "./thumbnails/thumbnails";
import SubscribedButton from "../subscribeButton/subscribeButton";
import ViewContext from "../../../contexts/view";

const Video = ({ video }) => {
  const {
    thumbnails,
    title,
    channelTitle,
    publishedAt,
    description,
  } = video.snippet;

  const { kind } = video.id;
  const isChannel = kind && /channel/.test(kind);

  const { state, actions } = useContext(ViewContext);
  const { viewType } = state;
  const { onVideoClick } = actions;

  const onClick = () => {
    if (!isChannel) {
      onVideoClick(video);
    }
  };

  if (viewType === "detail") {
    return (
      <VideoItem onClick={onClick}>
        <Thumbnails thumbnails={thumbnails.medium.url} />
        <VideoInfo
          title={title}
          channelTitle={channelTitle}
          isVideo={!isChannel}
          elapsedTime={getElapsedTime(publishedAt)}
        />
      </VideoItem>
    );
  } else if (viewType === "search") {
    return (
      <VideoItemSearched onClick={onClick}>
        <Thumbnails isChannel={isChannel} thumbnails={thumbnails.medium.url} />
        <VideoInfo
          title={title}
          channelTitle={channelTitle}
          description={description}
          isVideo={!isChannel}
          elapsedTime={getElapsedTime(publishedAt)}
        />
        {isChannel ? <SubscribedButton /> : ""}
      </VideoItemSearched>
    );
  } else if (viewType === "board") {
    return (
      <VideoItemInBoardView
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
