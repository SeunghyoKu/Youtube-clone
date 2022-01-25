class YoutubeAPI {
  constructor(httpClient) {
    this.youtube = httpClient;
    this.maxResults = 20;
  }

  // 인기 비디오 가져오기
  async getFamousVideos() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: this.maxResults,
      }
    })
    return response.data.items;
  }

  // 키워드로 검색해 비디오 가져오기
  async getSearchWithText(searchText) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: this.maxResults,
        q: searchText
      }
    })
    return response.data.items;
  }
}

export default YoutubeAPI;
