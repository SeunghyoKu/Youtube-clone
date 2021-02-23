import React from "react";
import Menu from "./menu/menu";
import Videos from "./videoList/videoList";
import VideoDetail from "./videoDetail/videoDetail";
import styles from "./body.module.css";

const Body = (props) => {
  return (
    <body className={styles.body}>
      {!props.videoOpened ? <Menu menuOpened={props.menuOpened} /> : ""}
      <section
        className={
          !!props.videoOpened
            ? styles.sectionVideoOpened
            : styles.sectionVideoClosed
        }
      >
        {!!props.videoOpened ? (
          <VideoDetail id={props.videoOpened} menuOpened={props.menuOpened} />
        ) : (
          ""
        )}
        <Videos
          videoList={props.videoList}
          menuOpened={props.menuOpened}
          searched={props.searched}
          videoOpened={props.videoOpened}
          setVideoOpened={props.setVideoOpened}
        />
      </section>
    </body>
  );
};

export default Body;
