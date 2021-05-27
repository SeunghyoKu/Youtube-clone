import React, { useContext } from "react";
import VideoItemInBoardView from "./videoItemInBoardView";
import styled from "styled-components";

import getElapsedTime from "../../../utils/getElapsedTime";
import VideoInfo from "./videoInfo/videoInfo";
import Thumbnails from "./thumbnails/thumbnails";
import SubscribedButton from "../subscribeButton/subscribeButton";
import ViewContext from "contexts/view";

const Video = ({ video }) => {
  const {
    thumbnails,
    title,
    channelTitle,
    publishedAt,
    description,
  } = video.snippet;

  const { kind } = video.id;

  // 채널일 경우 구독 버튼 달기 위해
  const isChannel = kind && /channel/.test(kind);

  const { state, actions } = useContext(ViewContext);
  const { viewType } = state;
  const { onVideoClick } = actions;

  // 채널을 보여주는 것은 구현하지 않아 비디오만 보여줍니다
  const onClick = () => {
    if (!isChannel) {
      onVideoClick(video);
    }
  };

  // 화면 유형 별로 보여지는 정보가 다 달라서
  // detail, search, board 별로 나누었습니다
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
        {isChannel && <SubscribedButton />}
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
