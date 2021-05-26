import React, { useContext } from "react";
import styled from "styled-components";
import icons from "service/icons";
import ThemeContext from "contexts/theme";

const Logo = ({ onMenuClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <LogoBar>
      <MenuIcon viewBox="0 0 24 24" onClick={onMenuClick} theme={theme}>
        <g>
          <path d={icons.menu} fill="current"></path>
        </g>
      </MenuIcon>

      <a href="/">
        <LogoImage
          src={
            theme === "dark"
              ? "./images/logo_dark.png"
              : "./images/logo_light.png"
          }
          alt="logo"
        />
      </a>

      <Language theme={theme}>KR</Language>
    </LogoBar>
  );
};

export default Logo;

const LogoBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Language = styled.span`
  height: 24px;
  margin-left: 2px;
  font-size: 10px;
  color: ${({ theme }) => (theme === "dark" ? "#aaaaaa" : "#606060")};
`;

const LogoImage = styled.img`
  height: 24px;
`;

const MenuIcon = styled.svg`
  fill: ${({ theme }) => (theme === "dark" ? "white" : "#606060")};
  width: 24px;
  padding: 8px;
  margin-right: 16px;
  border-radius: 50%;
  transition: background-color 10ms ease-in-out;
  &:active {
    background-color: ${({ theme }) =>
      theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
  }
  @media (max-width: 420px) {
    display: none;
  }
`;
