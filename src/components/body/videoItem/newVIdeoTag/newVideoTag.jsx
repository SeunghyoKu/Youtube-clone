import React from "react";
import styles from "./newVideoTag.module.css";

const newVideoTag = ({ elapsedTime }) => {
  const isNewVideo = /시간/.test(elapsedTime) || /분/.test(elapsedTime);

  return isNewVideo ? (
    <span className={styles.newVideoTag}>새 동영상</span>
  ) : (
    ""
  );
};

export default newVideoTag;
