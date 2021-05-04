import React from "react";
import SearchBar from "./searchBar";
import Logo from "./logo";
import HeaderRightIcons from "./headerRightIcons";
import styled from "styled-components";

import styles from "./header.module.css";

const Header = ({ onMenuClick, onSearch, setSearched, theme }) => {
  return (
    <>
      <HeaderBar theme={theme}>
        <Logo onMenuClick={onMenuClick} theme={theme} />
        <SearchBar
          onSearch={onSearch}
          setSearched={setSearched}
          theme={theme}
        />
        <HeaderRightIcons theme={theme} />
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
  background-color: ${(props) =>
    props.theme === "dark" ? "rgba(33, 33, 33, 0.98)" : "white"};
`;
