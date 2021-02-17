import React from "react";
import SearchBar from "./searchBar";
import Logo from "./logo";
import HeaderRightIcons from "./headerRightIcons";

import styles from "./header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.headerBar}>
        <Logo />
        <SearchBar />
        <HeaderRightIcons />
      </header>
    </>
  );
};

export default Header;
