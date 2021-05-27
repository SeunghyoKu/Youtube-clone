const axios = require("axios");
require("dotenv").config();

class YoutubeAPI {
  constructor() {
    this.key = process.env.REACT_APP_API_KEY;
    this.maxResults = 20;
  }

  // 인기 비디오 가져오기
  async getFamousVideos() {
    return await axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=${this.maxResults}`
      )
      .then((result) => {
        const { items } = result.data;
        return items;
      })
      .catch((err) => {
        console.error(err);
        return [];
      });
  }

  // 키워드로 검색해 비디오 가져오기
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
        console.error(err);
        return [];
      });
  }
}

export default YoutubeAPI;
