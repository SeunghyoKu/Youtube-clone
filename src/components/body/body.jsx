import React, { useContext } from "react";
import Menu from "./menu/menu";
import Videos from "./videoList/videoList";
import VideoDetail from "./videoDetail/videoDetail";
import styled from "styled-components";
import ThemeContext from "contexts/theme";
import ViewContext from "contexts/view";

const Body = ({ menuInSmallSizedWindow, videoList, onThemeClick }) => {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(ViewContext);
  const { menuOpened, viewType } = state;

  return (
    <BodyDiv theme={theme}>
      {(menuOpened && viewType === "detail") || viewType !== "detail" ? (
        <Menu
          menuInSmallSizedWindow={menuInSmallSizedWindow}
          onThemeClick={onThemeClick}
        />
      ) : (
        ""
      )}
      <section>
        {viewType === "detail" ? <VideoDetail /> : ""}
        <Videos videoList={videoList} />
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
