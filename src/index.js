import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import YoutubeAPI from "./service/youtubeAPI";
const youtubeAPI = new YoutubeAPI();

ReactDOM.render(
  <React.StrictMode>
    <App youtubeAPI={youtubeAPI} />
  </React.StrictMode>,
  document.getElementById("root")
);
