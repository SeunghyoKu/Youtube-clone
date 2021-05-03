import React from "react";
import Menu from "./menu/menu";
import Videos from "./videoList/videoList";
import VideoDetail from "./videoDetail/videoDetail";
import styles from "./body.module.css";

const Body = ({
  menuOpened,
  menuInSmallSizedWindow,
  videoOpened,
  videoList,
  searched,
  onVideoClick,
  theme,
  onThemeClick,
}) => {
  return (
    <body className={styles.body}>
      {(menuOpened && videoOpened) || !videoOpened ? (
        <Menu
          menuOpened={menuOpened}
          menuInSmallSizedWindow={menuInSmallSizedWindow}
          theme={theme}
          onThemeClick={onThemeClick}
        />
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
          searched={searched}
          videoOpened={videoOpened}
          onVideoClick={onVideoClick}
        />
      </section>
    </body>
  );
};

export default Body;
