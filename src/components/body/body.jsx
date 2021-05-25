import React, { useContext } from "react";
import Menu from "./menu/menu";
import Videos from "./videoList/videoList";
import VideoDetail from "./videoDetail/videoDetail";
import styled from "styled-components";
import ThemeContext from "../../contexts/theme";

const Body = ({
  menuOpened,
  menuInSmallSizedWindow,
  videoOpened,
  videoList,
  searched,
  onVideoClick,
  onThemeClick,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <BodyDiv theme={theme}>
      {(menuOpened && videoOpened) || !videoOpened ? (
        <Menu
          menuOpened={menuOpened}
          menuInSmallSizedWindow={menuInSmallSizedWindow}
          onThemeClick={onThemeClick}
        />
      ) : (
        ""
      )}
      <section>
        {!!videoOpened ? (
          <VideoDetail video={videoOpened} menuOpened={menuOpened} />
        ) : (
          ""
        )}
        <Videos
          videoList={videoList}
          menuOpened={menuOpened}
          searched={searched}
          videoOpened={videoOpened}
          onVideoClick={onVideoClick}
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
  background-color: ${({ theme }) =>
    theme === "dark" ? "#181818" : "#f9f9f9"};
`;
