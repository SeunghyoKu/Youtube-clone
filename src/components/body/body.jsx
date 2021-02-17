import React from "react";
import Menu from "../menu/menu";
import Videos from "../videoList/videoList";
import styles from "./body.module.css";

const Body = (props) => {
  return (
    <body className={styles.body}>
      <Menu />
      <Videos videoList={props} />
    </body>
  );
};

export default Body;
