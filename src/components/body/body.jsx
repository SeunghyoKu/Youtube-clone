import React from "react";
import Menu from "./menu/menu";
import Videos from "./videoList/videoList";
import VideoDetail from "./videoDetail/videoDetail";
import styles from "./body.module.css";

const Body = (props) => {
  return (
    <body className={styles.body}>
      <Menu menuOpened={props.menuOpened} />
      {!!props.videoOpened ? <VideoDetail id={props.videoOpened} /> : ""}
      <Videos
        videoList={props.videoList}
        menuOpened={props.menuOpened}
        searched={props.searched}
        videoOpened={props.videoOpened}
        setVideoOpened={props.setVideoOpened}
      />
    </body>
  );
};

export default Body;
