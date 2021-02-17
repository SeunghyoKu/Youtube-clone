import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Body from "./components/body/body";

require("dotenv").config();
const axios = require("axios");

function App() {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const maxResults = 24;
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

  return (
    <>
      <Header />
      <Body videoList={videos} />
    </>
  );
}

export default App;
