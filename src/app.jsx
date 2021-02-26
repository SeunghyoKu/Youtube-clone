import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Body from "./components/body/body";
import styles from "./app.module.css";

function App({ youtubeAPI }) {
  const [videos, setVideos] = useState([]);
  const [menuOpened, setMenuOpened] = useState(true);
  const [searched, setSearched] = useState(false);
  const [videoOpened, setVideoOpened] = useState(null);

  const getVideos = async () => {
    const videos = await youtubeAPI.getFamousVideos();
    setVideos(videos);
  };

  useEffect(() => {
    getVideos();
  });

  const onSearh = async (searchText) => {
    setVideos([]);
    setVideoOpened(null);
    const videos = await youtubeAPI.getSearchWithText(searchText);
    setVideos(videos);
  };

  const onMenuClick = () => {
    const reversedState = !menuOpened;
    setMenuOpened(reversedState);
  };

  const onVideoClick = (video) => {
    setMenuOpened(false);
    setVideoOpened(video);
  };

  // To do : set channel list
  // const filterChannel = (video) => {
  //   const kind = video.id.kind || video.kind;
  //   const isVideo = kind === "youtube#video";
  //   return isVideo;
  // };

  // if (!!videoOpened) {
  //   const filteredList = videos.filter(filterChannel);
  //   console.log(filteredList);
  //   //    setVideos(filteredList);
  // }

  return (
    <>
      <div
        className={menuOpened && !!videoOpened ? styles.modalWrapper : ""}
      ></div>
      <Header
        onSearch={onSearh}
        onMenuClick={onMenuClick}
        setSearched={setSearched}
      />
      <Body
        videoList={videos}
        setVideos={setVideos}
        menuOpened={menuOpened}
        searched={searched}
        videoOpened={videoOpened}
        onVideoClick={onVideoClick}
      />
    </>
  );
}

export default App;
