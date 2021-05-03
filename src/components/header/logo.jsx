import React from "react";
import styles from "./header.module.css";

const Logo = ({ onMenuClick }) => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div className={styles.logoBar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles.icons + " " + styles.menuIcon}
        onClick={onMenuClick}
      >
        <g className={styles.icons + " " + styles.menuIcon} fill="#FFFFFF">
          <path
            d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            className={styles.icons + " " + styles.menuIcon}
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>
      <a href="/">
        <img
          className={styles.logo}
          src={
            isDarkMode ? "./images/logo_dark.png" : "./images/logo_light.png"
          }
          alt="logo"
        ></img>
      </a>

      <span className={styles.language}>KR</span>
    </div>
  );
};

export default Logo;
