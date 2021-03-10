const axios = require("axios");
require("dotenv").config();

class YoutubeAPI {
  constructor() {
    this.key = process.env.REACT_APP_API_KEY;
    this.maxResults = 20;
  }
  async getFamousVideos() {
    return await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=${this.maxResults}`
      )
      .then((result) => {
        const { items } = result.data;
        console.log(items);
        return items;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }
  async getSearchWithText(searchText) {
    return await axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&maxResults=${this.maxResults}&q=${searchText}`
      )
      .then((result) => {
        const { items } = result.data;
        return items;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
  }
}

export default YoutubeAPI;
