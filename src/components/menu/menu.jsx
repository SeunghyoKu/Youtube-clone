import React from "react";
import styles from "./menu.module.css";

const Menu = (props) => {
  //   const handleClickMenu = () => {
  //     const isOpen = props;
  //     console.log(isOpen);
  //   };
  return (
    <div className={styles.menuBar}>
      <div className={styles.menu + " " + styles.menuHome}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={styles.menuIcon}
        >
          <g className={styles.menuIcon} fill="#FFFFFF">
            <path
              d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"
              className={styles.menuIcon}
              fill="#FFFFFF"
            ></path>
          </g>
        </svg>
        <span className={styles.menuChar}>홈</span>
      </div>
      <div className={styles.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={styles.menuIcon}
        >
          <g className={styles.menuIcon} fill="#909090">
            <path
              d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"
              className={styles.menuIcon}
              fill="#909090"
            ></path>
          </g>
        </svg>
        <span className={styles.menuChar}>인기</span>
      </div>
      <div className={styles.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={styles.menuIcon}
        >
          <g className={styles.menuIcon} fill="#909090">
            <path
              d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"
              className={styles.menuIcon}
              fill="#909090"
            ></path>
          </g>
        </svg>
        <span className={styles.menuChar}>구독</span>
      </div>

      <div className={styles.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={styles.menuIcon}
        >
          <g className={styles.menuIcon} fill="#909090">
            <path
              d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z"
              className={styles.menuIcon}
              fill="#909090"
            ></path>
          </g>
        </svg>
        <span className={styles.menuChar}>Originals</span>
      </div>

      <div className={styles.menu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={styles.menuIcon}
        >
          <g className={styles.menuIcon} fill="#909090">
            <path
              d="M12 0.47998C5.63998 0.47998 0.47998 5.63998 0.47998 12C0.47998 18.36 5.63998 23.52 12 23.52C18.36 23.52 23.52 18.36 23.52 12C23.52 5.63998 18.36 0.47998 12 0.47998ZM12 18.82C8.22998 18.82 5.17998 15.77 5.17998 12C5.17998 8.22998 8.22998 5.17998 12 5.17998C15.77 5.17998 18.82 8.22998 18.82 12C18.82 15.77 15.77 18.82 12 18.82Z"
              className={styles.menuIcon}
              fill="#909090"
            ></path>
            <path
              d="M12 6.02002C8.70996 6.02002 6.01996 8.70002 6.01996 12C6.01996 15.3 8.69996 17.98 12 17.98C15.3 17.98 17.98 15.3 17.98 12C17.98 8.70002 15.29 6.02002 12 6.02002ZM9.74996 15.4V8.60002L15.63 12L9.74996 15.4Z"
              className={styles.menuIcon}
              fill="#909090"
            ></path>
          </g>
        </svg>
        <span className={styles.menuChar}>Youtube Music</span>
      </div>
    </div>
  );
};

export default Menu;
