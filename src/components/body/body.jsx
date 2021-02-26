import React from "react";
import Menu from "./menu/menu";
import Videos from "./videoList/videoList";
import VideoDetail from "./videoDetail/videoDetail";
import styles from "./body.module.css";

const Body = ({
  menuOpened,
  setMenuOpened,
  videoOpened,
  videoList,
  searched,
  setVideoOpened,
}) => {
  return (
    <body className={styles.body}>
      {(menuOpened && videoOpened) || !videoOpened ? (
        <Menu menuOpened={menuOpened} videoOpened={videoOpened} />
      ) : (
        ""
      )}
      <section
        className={
          !!videoOpened ? styles.sectionVideoOpened : styles.sectionVideoClosed
        }
      >
        {!!videoOpened ? (
          <VideoDetail video={videoOpened} menuOpened={menuOpened} />
        ) : (
          ""
        )}
        <Videos
          videoList={videoList}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          searched={searched}
          videoOpened={videoOpened}
          setVideoOpened={setVideoOpened}
        />
      </section>
    </body>
  );
};

export default Body;
