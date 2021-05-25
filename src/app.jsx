import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Body from "./components/body/body";

import styles from "./app.module.css";
import ThemeContext from "./contexts/theme";
import ViewContext from "./contexts/view";

function App({ youtubeAPI }) {
  const [videos, setVideos] = useState([]);
  const [menuOpened, setMenuOpened] = useState(true);
  const [videoOpened, setVideoOpened] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [viewType, setViewType] = useState("board");

  useEffect(() => {
    const getVideos = async () => {
      const famousVideos = await youtubeAPI.getFamousVideos();
      setVideos(famousVideos);
    };
    getVideos();
  }, [youtubeAPI]);

  const onSearh = async (searchText) => {
    if (!!searchText) {
      setVideos([]);
      const searchedVideos = await youtubeAPI.getSearchWithText(searchText);
      const filteredVideos = searchedVideos.filter(
        (video) => video.id.kind !== "youtube#playlist"
      );
      setVideos(filteredVideos);
      setViewType("search");
    }
  };

  const onMenuClick = () => {
    const reversedState = !menuOpened;
    setMenuOpened(reversedState);
  };

  const windowInSmallSize = (windowSize) => {
    windowSize && setMenuOpened(false);
  };

  const onVideoClick = (video) => {
    setMenuOpened(false);
    setVideoOpened(video);
    setViewType("detail");
    const filteredList = videos
      .filter(filterChannel)
      .filter((curr) => video !== curr);
    setVideos(filteredList);
  };

  const filterChannel = (video) => {
    const kind = video.id.kind || video.kind;
    const isVideo = kind === "youtube#video";
    return isVideo;
  };

  const onThemeClick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div
        className={menuOpened && !!videoOpened ? styles.modalWrapper : ""}
      ></div>
      <Header onSearch={onSearh} onMenuClick={onMenuClick} />
      <ViewContext.Provider
        value={{
          state: { menuOpened, viewType, currVideo: videoOpened },
          actions: { onVideoClick },
        }}
      >
        <Body
          videoList={videos}
          menuInSmallSizedWindow={windowInSmallSize}
          onThemeClick={onThemeClick}
        />
      </ViewContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
