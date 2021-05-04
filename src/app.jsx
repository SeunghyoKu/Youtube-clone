import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Body from "./components/body/body";
import styles from "./app.module.css";

function App({ youtubeAPI }) {
  const [videos, setVideos] = useState([]);
  const [menuOpened, setMenuOpened] = useState(true);
  const [searched, setSearched] = useState(false);
  const [videoOpened, setVideoOpened] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const getVideos = async () => {
      const famousVideos = await youtubeAPI.getFamousVideos();
      setVideos(famousVideos);
    };
    getVideos();
  }, [youtubeAPI]);

  const onSearh = async (searchText) => {
    setVideos([]);
    setVideoOpened(null);
    const searchedVideos = await youtubeAPI.getSearchWithText(searchText);
    const filteredVideos = searchedVideos.filter(
      (video) => video.id.kind !== "youtube#playlist"
    );
    setVideos(filteredVideos);
  };

  const onMenuClick = () => {
    const reversedState = !menuOpened;
    setMenuOpened(reversedState);
  };

  const menuInSmallSizedWindow = (smallWindowSize) => {
    smallWindowSize && setMenuOpened(false);
  };

  const onVideoClick = (video) => {
    setMenuOpened(false);
    setVideoOpened(video);
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
    console.log(theme);
  };

  return (
    <>
      <div
        className={menuOpened && !!videoOpened ? styles.modalWrapper : ""}
      ></div>
      <Header
        onSearch={onSearh}
        onMenuClick={onMenuClick}
        setSearched={setSearched}
        theme={theme}
      />
      <Body
        videoList={videos}
        setVideos={setVideos}
        menuOpened={menuOpened}
        menuInSmallSizedWindow={menuInSmallSizedWindow}
        searched={searched}
        videoOpened={videoOpened}
        onVideoClick={onVideoClick}
        theme={theme}
        onThemeClick={onThemeClick}
      />
    </>
  );
}

export default App;
