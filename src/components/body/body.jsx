import React from "react";
import Menu from "./menu/menu";
import Videos from "./videoList/videoList";
import VideoDetail from "./videoDetail/videoDetail";
import styled from "styled-components";

const Body = ({
  menuOpened,
  menuInSmallSizedWindow,
  videoOpened,
  videoList,
  searched,
  onVideoClick,
  theme,
  onThemeClick,
}) => {
  return (
    <BodyDiv theme={theme}>
      {(menuOpened && videoOpened) || !videoOpened ? (
        <Menu
          menuOpened={menuOpened}
          menuInSmallSizedWindow={menuInSmallSizedWindow}
          theme={theme}
          onThemeClick={onThemeClick}
        />
      ) : (
        ""
      )}
      <section>
        {!!videoOpened ? (
          <VideoDetail
            video={videoOpened}
            menuOpened={menuOpened}
            theme={theme}
          />
        ) : (
          ""
        )}
        <Videos
          videoList={videoList}
          menuOpened={menuOpened}
          searched={searched}
          videoOpened={videoOpened}
          onVideoClick={onVideoClick}
          theme={theme}
        />
      </section>
    </BodyDiv>
  );
};

export default Body;

const BodyDiv = styled.div`
  height: 100%;
  position: static;
  top: 59px;
  background-color: ${(props) =>
    props.theme === "dark" ? "#181818" : "#f9f9f9"};
`;
