import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Body from "./components/body/body";

function App({ youtubeAPI }) {
  const [videos, setVideos] = useState([]);
  const [menuOpened, setMenuOpened] = useState(true);
  const [searched, setSearched] = useState(false);

  const getVideos = async () => {
    const videos = await youtubeAPI.getFamousVideos();
    setVideos(videos);
  };

  useEffect(() => {
    getVideos();
  }, []);

  const handleSearh = async (searchText) => {
    setVideos([]);
    const videos = await youtubeAPI.getSearchWithText(searchText);
    setVideos(videos);
  };

  const handleMenuClick = () => {
    const reversedState = !menuOpened;
    setMenuOpened(reversedState);
  };

  return (
    <>
      <Header
        handleSearch={handleSearh}
        handleMenuClick={handleMenuClick}
        setSearched={setSearched}
      />
      <Body videoList={videos} menuOpened={menuOpened} searched={searched} />
    </>
  );
}

export default App;
