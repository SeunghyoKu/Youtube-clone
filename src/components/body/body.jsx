import React from "react";
import Menu from "../menu/menu";
import Videos from "../videoList/videoList";
import styles from "./body.module.css";

const Body = (props) => {
  return (
    <body className={styles.body}>
      <Menu menuOpened={props.menuOpened} />
      <Videos videoList={props.videoList} menuOpened={props.menuOpened} />
    </body>
  );
};

export default Body;
