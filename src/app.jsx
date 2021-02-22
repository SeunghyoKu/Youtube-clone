import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Body from "./components/body/body";

require("dotenv").config();
const axios = require("axios");

function App() {
  const [videos, setVideos] = useState([]);
  const [menuOpened, setMenuOpened] = useState(true);

  const getVideos = async () => {
    const maxResults = 40;
    try {
      await axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_API_KEY}&part=snippet&chart=mostPopular&maxResults=${maxResults}`
        )
        .then((result) => {
          const { items } = result.data;
          setVideos(items);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const handleSearh = async (searchText) => {
    const maxResults = 40;

    try {
      await axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=${maxResults}&q=${searchText}`
        )
        .then((result) => {
          const { items } = result.data;
          setVideos(items);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleMenuClick = () => {
    const reversedState = !menuOpened;
    setMenuOpened(reversedState);
  };

  return (
    <>
      <Header handleSearch={handleSearh} handleMenuClick={handleMenuClick} />
      <Body videoList={videos} menuOpened={menuOpened} />
    </>
  );
}

export default App;
