import React, { useState, useContext } from "react";
import SubscribeButton from "../subscribeButton/subscribeButton";
import changeDate from "utils/changeDate";
import styled from "styled-components";
import ThemeContext from "contexts/theme";
import ViewContext from "contexts/view";

const VideoDetail = () => {
  const { state } = useContext(ViewContext);
  const { currVideo: video } = state;
  const videoId = video.id.videoId ? video.id.videoId : video.id;
  const { title, channelTitle, publishedAt, description } = video.snippet;

  const [learnMore, setLearnMore] = useState(true);
  const { theme } = useContext(ThemeContext);

  const onClick = () => {
    const currentState = learnMore;
    setLearnMore(!currentState);
  };

  return (
    <VideoDetailDiv>
      <Video>
        <Iframe
          title="ytbVideo"
          className="ytplayer"
          type="text/html"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></Iframe>
      </Video>
      <VideoInfo theme={theme}>
        <h3>{title}</h3>
        <P>{changeDate(publishedAt)}</P>
        <Bar />
        <VideoInfoInDetailView>
          <VideoInfoBoxLeftSide>
            <p>{channelTitle}</p>
            <Description learnMore={learnMore}>{description}</Description>
          </VideoInfoBoxLeftSide>
          <SubscribeButton />
        </VideoInfoInDetailView>
        {learnMore ? (
          <LearnMore onClick={onClick} theme={theme}>
            자세히
          </LearnMore>
        ) : (
          <LearnMore onClick={onClick}>간략히</LearnMore>
        )}
      </VideoInfo>
      <Bar />
    </VideoDetailDiv>
  );
};

export default VideoDetail;

const VideoDetailDiv = styled.div`
  margin: 0px;
  width: 65%;
  float: left;
  margin-top: 84px;
  margin-left: 48px;
  @media (max-width: 1430px) {
    width: 60%;
  }
  @media (max-width: 1300px) {
    width: 55%;
  }
  @media (max-width: 1000px) {
    width: 90%;
    vertical-align: center;
    margin-left: 5%;
  }
`;

const Video = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

const LearnMore = styled.button`
  background-color: transparent;
  border: none;
  padding: 0px;
  font-size: 14px;
  margin-bottom: 14px;
  color: ${(props) => (props.theme === "dark" ? "#aaaaaa" : "#606060")};
`;

const Bar = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) =>
    props.theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "#cccccc"};
`;

const Description = styled.p`
  margin-right: 120px;
  height: ${(props) => (props.learnMore ? "54px" : "")};
  margin-right: ${(props) => (props.learnMore ? "120px" : "")};
  overflow: ${(props) => (props.learnMore ? "hidden" : "")};
  @media (max-width: 410px) {
    margin-right: 0px;
  }
`;

const VideoInfo = styled.div`
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

const P = styled.p`
  color: ${(props) => (props.theme === "dark" ? "#aaaaaa" : "#606060")};
`;

const VideoInfoInDetailView = styled.div`
  display: flex;
`;

const VideoInfoBoxLeftSide = styled.div`
  width: 95%;
  @media (max-width: 410px) {
    width: 75%;
  }
`;
