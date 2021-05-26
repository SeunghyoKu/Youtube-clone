import React, { useContext } from "react";
import styled from "styled-components";
import NewVideoTag from "../newVIdeoTag/newVideoTag";
import ThemeContext from "../../../../contexts/theme";
import ViewContext from "../../../../contexts/view";

const VideoInfo = ({
  title,
  channelTitle,
  elapsedTime,
  isVideo,
  description,
}) => {
  const decode = require("unescape");
  const decodedTitle = decode(title);

  const { theme } = useContext(ThemeContext);
  const { state } = useContext(ViewContext);
  const { viewType } = state;

  if (viewType === "board") {
    return (
      <StyledVideoInfo>
        <Title theme={theme}>{decodedTitle}</Title>
        <P theme={theme}>{channelTitle}</P>
        <P theme={theme}>{elapsedTime}</P>
      </StyledVideoInfo>
    );
  } else if (viewType === "search") {
    return (
      <VideoInfoSearched>
        <TitleSearched theme={theme}>{decodedTitle}</TitleSearched>
        {isVideo ? <P theme={theme}>{channelTitle}</P> : ""}
        {isVideo ? <P theme={theme}>{elapsedTime}</P> : ""}
        <Description>{description}</Description>
        <NewVideoTag elapsedTime={elapsedTime} />
      </VideoInfoSearched>
    );
  } else if (viewType === "detail") {
    return (
      <VideoInfoDetailed>
        <Title theme={theme} viewType={viewType}>
          {decodedTitle}
        </Title>
        <P theme={theme}>{channelTitle}</P>
        <P theme={theme}>{elapsedTime}</P>
        <NewVideoTag elapsedTime={elapsedTime} />
      </VideoInfoDetailed>
    );
  }
};

export default VideoInfo;

const StyledVideoInfo = styled.div`
  padding: 0px 24px 0px 0px;
  font-size: 14px;
`;

const VideoInfoSearched = styled.div`
  padding: 0px 24px 0px 0px;
  font-size: 14px;
  width: 55%;
  margin-left: 14px;
  font-size: 13px;
`;

const VideoInfoDetailed = styled.div`
  width: 66%;
  font-size: 12px;
  padding-left: 10px;
  margin: 0px;
`;

const Title = styled.h3`
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  margin: 12px 0px 6px 0px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: ${({ viewType }) => (viewType === "detail" ? "0px" : "")};
`;

const TitleSearched = styled.h3`
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  width: 70%;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 0px;
`;

const P = styled.p`
  margin: 0px;
  padding: 1px;
  color: ${({ theme }) => (theme === "dark" ? "#aaaaaa" : "#606060")};
`;

const Description = styled.p`
  margin: 0px;
  padding: 1px;
  color: ${({ theme }) => (theme === "dark" ? "#aaaaaa" : "#606060")};
  @media (max-with: 1200px) {
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }
  @media (max-with: 800px) {
    display: none;
  }
`;
