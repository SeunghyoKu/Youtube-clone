import React, { useContext } from "react";
import Video from "../videoItem/videoItem";
import styled from "styled-components";
import ViewContext from "contexts/view";

const Videos = ({ videoList }) => {
  const { state } = useContext(ViewContext);
  const { menuOpened, viewType } = state;

  if (viewType !== "detail") {
    return (
      <main>
        <VideoList menuOpened={menuOpened}>
          {videoList.map((video) => (
            <Video key={video.id.videoId || video.id} video={video} />
          ))}
        </VideoList>
      </main>
    );
  } else {
    return (
      <main>
        <VideoListInDetailView>
          {videoList.map((video) => (
            <Video key={video.id.videoId || video.id} video={video} />
          ))}
        </VideoListInDetailView>
      </main>
    );
  }
};

const VideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0px;
  padding: ${({ menuOpened }) =>
    menuOpened ? "83px 0px 0px 240px" : "83px 0px 0px 72px"};
  @media (max-width: 800px) {
    padding-left: 0px;
    color: red;
  }
`;

const VideoListInDetailView = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0px;
  flex-direction: column;
  width: 350px;
  padding: 83px 24px 0px 24px;

  @media (max-width: 1000px) {
    width: 90%;
    padding-top: 24px;
    margin-left: 24px;
  }
  @media (max-width: 800px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export default Videos;
