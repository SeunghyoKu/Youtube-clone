import React from "react";
import SearchBar from "./searchBar";
import Logo from "./logo";
import HeaderRightIcons from "./headerRightIcons";

import styles from "./header.module.css";

const Header = ({ onMenuClick, onSearch, setSearched }) => {
  return (
    <>
      <header className={styles.headerBar}>
        <Logo onMenuClick={onMenuClick} />
        <SearchBar onSearch={onSearch} setSearched={setSearched} />
        <HeaderRightIcons />
      </header>
    </>
  );
};

export default Header;
