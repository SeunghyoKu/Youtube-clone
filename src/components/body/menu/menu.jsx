import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "../../icons/icon";
import Moon from "../../icons/moon";
import icons from "../../../service/icons";

import ThemeContext from "../../../contexts/theme";
import ViewContext from "../../../contexts/view";

const Menu = ({ menuInSmallSizedWindow, onThemeClick }) => {
  const iswindowSmall = window.innerWidth < 1200;
  menuInSmallSizedWindow(iswindowSmall);

  const { theme } = useContext(ThemeContext);
  const { state } = useContext(ViewContext);
  const { menuOpened: opened } = state;

  return (
    <MenuBar opened={opened} theme={theme}>
      <MenuDiv opened={opened}>
        <Icon opened={opened} d={icons.home} theme={theme} home={true} />
        <MenuSpan opened={opened}>홈</MenuSpan>
      </MenuDiv>
      <MenuDiv opened={opened}>
        <Icon opened={opened} d={icons.hot} theme={theme} />
        <MenuSpan opened={opened}>인기</MenuSpan>
      </MenuDiv>
      <MenuDiv opened={opened}>
        <Icon opened={opened} d={icons.subscribe} theme={theme} />
        <MenuSpan opened={opened}>구독</MenuSpan>
      </MenuDiv>
      <MenuDiv opened={opened}>
        <Icon opened={opened} d={icons.original} theme={theme} />
        <MenuSpan opened={opened}>Originals</MenuSpan>
      </MenuDiv>
      <MenuDiv opened={opened} onClick={onThemeClick}>
        <Moon opened={opened} d={icons.moon} />
        <MenuSpan opened={opened}>{theme + " mode"}</MenuSpan>
      </MenuDiv>
    </MenuBar>
  );
};

export default Menu;

const MenuBar = styled.div`
  float: left;
  position: fixed;
  top: 59px;
  left: 0px;
  width: ${({ opened }) => (opened ? "240px" : "72px")};
  height: 100%;
  padding: 12px 0px 12px 0px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(33, 33, 33, 0.98)" : "white"};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  z-index: 2;

  @media (max-width: 800px) {
    display: none;
    width: 0px;
  }
  @media (max-width: 410px) {
    display: flex;
    position: fixed;
    width: 100%;
    height: 10%;
    padding: 0px;
    top: 90%;
  }
`;

const MenuDiv = styled.div`
  height: ${({ opened }) => (opened ? "40px" : "74px")};
  padding: 0px 24px 0px 24px;
  display: flex;
  flex-direction: ${({ opened }) => (opened ? "row" : "column")};
  align-items: center;
  cursor: pointer;
  ${({ opened }) => (opened ? "" : "justify-content: center")};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 410px) {
    height: "30px";
  }
`;

const MenuSpan = styled.span`
  font-size: ${({ opened }) => (opened ? "14px" : "10px")};
  text-align: center;
`;
