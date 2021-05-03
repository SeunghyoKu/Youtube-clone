import React from "react";
import styles from "./menu.module.css";

const Menu = ({ menuOpened, menuInSmallSizedWindow }) => {
  const opened = menuOpened;
  const iswindowSmall = window.innerWidth < 1200;
  menuInSmallSizedWindow(iswindowSmall);

  return (
    <div
      className={
        opened ? styles.menuBar : styles.menuBar + " " + styles.menuBarClosed
      }
    >
      <div
        className={
          opened
            ? styles.menu + " " + styles.menuHome
            : styles.menu + " " + styles.menuClosed
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={opened ? styles.menuIcon : styles.menuIconClosed}
        >
          <g className={styles.menuIcon}>
            <path
              d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8"
              className={styles.menuIcon + " " + styles.menuHomeIcon}
              fill="#FFFFFF"
            ></path>
          </g>
        </svg>
        <span
          className={
            opened ? "" : styles.menuCharClosed + " " + styles.menuCharHome
          }
        >
          홈
        </span>
      </div>
      <div
        className={opened ? styles.menu : styles.menu + " " + styles.menuClosed}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={opened ? styles.menuIcon : styles.menuIconClosed}
        >
          <g className={styles.menuIcon} fill="#909090">
            <path
              d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"
              className={styles.menuIcon}
              fill="#909090"
            ></path>
          </g>
        </svg>
        <span className={opened ? "" : styles.menuCharClosed}>인기</span>
      </div>
      <div
        className={opened ? styles.menu : styles.menu + " " + styles.menuClosed}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={opened ? styles.menuIcon : styles.menuIconClosed}
        >
          <g className={styles.menuIcon} fill="#909090">
            <path
              d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"
              className={styles.menuIcon}
              fill="#909090"
            ></path>
          </g>
        </svg>
        <span className={opened ? "" : styles.menuCharClosed}>구독</span>
      </div>

      <div
        className={opened ? styles.menu : styles.menu + " " + styles.menuClosed}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={opened ? styles.menuIcon : styles.menuIconClosed}
        >
          <g className={styles.menuIcon} fill="#909090">
            <path
              d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z"
              className={styles.menuIcon}
              fill="#909090"
            ></path>
          </g>
        </svg>
        <span className={opened ? "" : styles.menuCharClosed}>Originals</span>
      </div>

      <div
        className={opened ? styles.menu : styles.menu + " " + styles.menuClosed}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          className={opened ? styles.menuIcon : styles.menuIconClosed}
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
        <span className={opened ? "" : styles.menuCharClosed}>
          Youtube Music
        </span>
      </div>

      <div
        className={opened ? styles.menu : styles.menu + " " + styles.menuClosed}
      >
        <svg
          height="24"
          viewBox="0 0 512 512"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          className={opened ? styles.menuIcon : styles.menuIconClosed}
        >
          <g>
            <path
              d="m473.396 366.853c-93.59 54.034-212.996 22.848-268.362-69.481-56.378-94.015-24.303-218.074 70.619-272.912 2.916-1.685 5.857-3.286 8.821-4.806 9.403-4.822 6.247-19.013-4.311-19.443-47.968-1.953-97.071 9.55-141.491 36.086-119.816 71.58-160.094 227.193-90.153 347.972 70.763 122.199 227.156 164.021 349.484 93.395 43.506-25.118 76.839-61.083 98.57-102.505 4.924-9.385-5.736-19.272-14.64-13.522-2.786 1.8-5.632 3.539-8.537 5.216z"
              fill="#ffe07d"
            />
            <path
              d="m473.396 366.853c-93.59 54.034-212.996 22.848-268.362-69.481-56.378-94.015-24.303-218.074 70.619-272.912 2.916-1.685 5.857-3.286 8.821-4.806 9.403-4.822 6.247-19.013-4.311-19.443-47.968-1.953-97.071 9.55-141.491 36.086-119.816 71.58-160.094 227.193-90.153 347.972 70.763 122.199 227.156 164.021 349.484 93.395 43.506-25.118 76.839-61.083 98.57-102.505 4.924-9.385-5.736-19.272-14.64-13.522-2.786 1.8-5.632 3.539-8.537 5.216z"
              fill="#ffe07d"
            />
            <g fill="#ffd064">
              <path d="m473.396 366.853c-81.322 46.951-182.135 29.557-243.491-36.382-53.179 47.116-115.835 71.864-172.56 67.936 74.298 111.186 223.179 147.083 340.657 79.257 43.506-25.118 76.839-61.083 98.57-102.505 4.924-9.385-5.736-19.272-14.64-13.522-2.785 1.8-5.631 3.539-8.536 5.216z" />
              <path d="m342.612 174.195 4.26-1.826c2.408-1.032 2.408-4.445 0-5.477l-4.26-1.826c-16.391-7.025-28.995-20.723-34.634-37.64l-3.916-11.747c-.905-2.716-4.747-2.716-5.653 0l-3.916 11.747c-5.639 16.917-18.243 30.616-34.634 37.64l-4.26 1.826c-2.407 1.032-2.407 4.445 0 5.477l4.26 1.826c16.391 7.025 28.995 20.723 34.634 37.64l3.916 11.747c.905 2.716 4.747 2.716 5.653 0l3.916-11.747c5.639-16.917 18.243-30.616 34.634-37.64z" />
              <path d="m445.671 280.454 2.13-.913c2.408-1.032 2.408-4.445 0-5.477l-2.13-.913c-13.113-5.62-23.196-16.578-27.707-30.112l-2.567-7.702c-.905-2.716-4.747-2.716-5.653 0l-2.567 7.702c-4.511 13.534-14.595 24.493-27.707 30.112l-2.13.913c-2.408 1.032-2.408 4.445 0 5.477l2.13.913c13.112 5.62 23.196 16.578 27.707 30.112l2.567 7.702c.905 2.716 4.747 2.716 5.653 0l2.567-7.702c4.511-13.534 14.594-24.492 27.707-30.112z" />
              <path d="m455.084 130.749c2.408-1.032 2.408-4.445 0-5.477-9.834-4.215-17.397-12.434-20.78-22.584l-1.219-3.657c-.905-2.716-4.747-2.716-5.653 0l-1.219 3.657c-3.383 10.15-10.946 18.369-20.78 22.584-2.408 1.032-2.408 4.445 0 5.477 9.834 4.215 17.397 12.434 20.78 22.584l1.219 3.657c.905 2.716 4.747 2.716 5.653 0l1.219-3.657c3.383-10.15 10.946-18.369 20.78-22.584z" />
            </g>
          </g>
        </svg>
        <span className={opened ? "" : styles.menuCharClosed}>Dark Mode</span>
      </div>
    </div>
  );
};

export default Menu;
