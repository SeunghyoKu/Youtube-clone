import React from "react";
import styled from "styled-components";
import Icon from "../../icons/icon";
import Moon from "../../icons/moon";
import icons from "../../../service/icons";

const Menu = ({ menuOpened, menuInSmallSizedWindow, theme, onThemeClick }) => {
  const opened = menuOpened;
  const iswindowSmall = window.innerWidth < 1200;
  menuInSmallSizedWindow(iswindowSmall);

  const MenuBar = styled.div`
    float: left;
    position: fixed;
    top: 59px;
    left: 0px;
    bottom: 0px;
    width: ${opened ? "240px" : "72px"};
    height: 100%;
    padding: 12px 0px 12px 0px;
    background-color: ${theme === "dark" ? "rgba(33, 33, 33, 0.98)" : "white"};
    color: ${theme === "dark" ? "white" : "black"};
    z-index: 2;
  `;

  const Menu = styled.div`
    height: ${opened ? " 40px" : "74px"};
    padding: 0px 24px 0px 24px;
    display: flex;
    flex-direction: ${opened ? "row" : "column"};
    align-items: center;
    cursor: pointer;
    ${opened ? "" : "justify-content: center"};

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `;

  const MenuSpan = styled.span`
    font-size: ${opened ? "14px" : "10px"};
    text-align: center;
  `;

  return (
    <MenuBar>
      <Menu>
        <Icon opened={opened} d={icons.home} theme={theme} home={true} />
        <MenuSpan>홈</MenuSpan>
      </Menu>
      <Menu>
        <Icon opened={opened} d={icons.hot} theme={theme} />
        <MenuSpan>인기</MenuSpan>
      </Menu>
      <Menu>
        <Icon opened={opened} d={icons.subscribe} theme={theme} />
        <MenuSpan>구독</MenuSpan>
      </Menu>
      <Menu>
        <Icon opened={opened} d={icons.original} theme={theme} />
        <MenuSpan>Originals</MenuSpan>
      </Menu>
      <Menu onClick={onThemeClick}>
        <Moon opened={opened} d={icons.moon} />
        <MenuSpan>{theme + " mode"}</MenuSpan>
      </Menu>
    </MenuBar>
  );
};

export default Menu;
