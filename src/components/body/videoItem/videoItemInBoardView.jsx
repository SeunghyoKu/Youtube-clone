import React from "react";
import styled from "styled-components";
import VideoInfo from "./videoInfo/videoInfo";

const VideoItemInBoardView = (props) => {
  const {
    menuOpened,
    onClick,
    thumbnails,
    title,
    channelTitle,
    elapsedTime,
  } = props;
  return (
    <VideoList onClick={onClick} menuOpened={menuOpened}>
      <img src={thumbnails} alt="thumbnails"></img>
      <VideoInfo
        title={title}
        channelTitle={channelTitle}
        elapsedTime={elapsedTime}
        viewType="board"
      />
    </VideoList>
  );
};

export default VideoItemInBoardView;

const VideoList = styled.li`
  display: flex;
  flex-direction: column;
  width: ${({ menuOpened }) =>
    menuOpened ? "calc(100% / 4 - 24px)" : "calc(100% / 5 - 24px)"};
  margin: 0px 8px 40px 8px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1300px) {
    width: calc(100% / 4 - 24px);
  }
  @media (max-width: 1100px) {
    width: calc(100% / 3 - 24px);
  }
  @media (max-width: 800px) {
    width: calc(100% / 2 - 24px);
  }
  @media (max-width: 800px) {
    width: calc(100% - 48px);
  }
`;
