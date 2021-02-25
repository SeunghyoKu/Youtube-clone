import React from "react";
import styles from "./thumbnails.module.css";

const Thumbnails = ({ isChannel, thumbnails }) => {
  if (isChannel) {
    return (
      <div className={styles.imageBox}>
        <img
          className={styles.channelProfile}
          src={thumbnails}
          alt="channelProfile"
        ></img>
      </div>
    );
  } else {
    return (
      <img
        className={styles.searchedThumbnails}
        src={thumbnails}
        alt="thumbnails"
      ></img>
    );
  }
};

export default Thumbnails;