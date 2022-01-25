import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import YoutubeAPI from "./service/youtubeAPI";

const axios = require("axios");
require('dotenv').config();

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {key: process.env.REACT_APP_API_KEY},
})
const youtubeAPI = new YoutubeAPI(httpClient);

ReactDOM.render(
  <React.StrictMode>
    <App youtubeAPI={youtubeAPI} />
  </React.StrictMode>,
  document.getElementById("root")
);
