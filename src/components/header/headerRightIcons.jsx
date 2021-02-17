import React from "react";
import styles from "./header.module.css";

const HeaderRightIcons = (props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles.icons + " " + styles.rightIcons}
      >
        <g className={styles.icons + " " + styles.rightIcons} fill="#FFFFFF">
          <path
            d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
            className={styles.icons + " " + styles.rightIcons}
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles.icons + " " + styles.rightIcons}
      >
        <g className={styles.icons + " " + styles.rightIcons} fill="#FFFFFF">
          <path
            d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
            className={styles.icons + " " + styles.rightIcons}
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={styles.icons + " " + styles.rightIcons}
      >
        <g className={styles.icons + " " + styles.rightIcons} fill="#FFFFFF">
          <path
            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            className={styles.icons + " " + styles.rightIcons}
            fill="#FFFFFF"
          ></path>
        </g>
      </svg>

      <img
        alt="profile"
        className={styles.profile}
        width="32"
        height="32"
        src="https://yt3.ggpht.com/yti/ANoDKi4lRxJEeG4u-effK1KPNFamV9dEIiPAUNcX1Bm4yg=s88-c-k-c0x00ffffff-no-rj-mo"
      ></img>
    </div>
  );
};

export default HeaderRightIcons;
