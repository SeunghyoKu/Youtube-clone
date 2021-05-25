import React, { useContext } from "react";
import SearchBar from "./searchBar";
import Logo from "./logo";
import HeaderRightIcons from "./headerRightIcons";
import styled from "styled-components";
import ThemeContext from "../../contexts/theme";

const Header = ({ onMenuClick, onSearch, setSearched }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <HeaderBar theme={theme}>
        <Logo onMenuClick={onMenuClick} />
        <SearchBar onSearch={onSearch} setSearched={setSearched} />
        <HeaderRightIcons />
      </HeaderBar>
    </>
  );
};

export default Header;

const HeaderBar = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px 8px 16px;
  z-index: 99;
  background-color: ${({ theme }) =>
    theme === "dark" ? "rgba(33, 33, 33, 0.98)" : "white"};
`;
