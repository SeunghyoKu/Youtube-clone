import React, { useState, useEffect } from "react";
import Header from "./components/header/header";
import Body from "./components/body/body";

import styled from "styled-components";
import ThemeContext from "./contexts/theme";
import ViewContext from "./contexts/view";

function App({ youtubeAPI }) {
  const [videos, setVideos] = useState([]);
  const [menuOpened, setMenuOpened] = useState(true);
  const [videoOpened, setVideoOpened] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [viewType, setViewType] = useState("board");
  const [loading, setLoading] = useState(false);

  // 인기 동영상을 videos에 저장
  useEffect(() => {
    const getVideos = async () => {
      setLoading(true);
      const famousVideos = await youtubeAPI.getFamousVideos();
      setLoading(false);
      setVideos(famousVideos);
    };
    getVideos();
  }, [youtubeAPI]);

  // 검색해서 playlist 제외한 영상 videos에 저장
  const onSearh = async (searchText) => {
    if (!!searchText) {
      setVideos([]);
      setViewType("search");
      setLoading(true);
      const searchedVideos = await youtubeAPI.getSearchWithText(searchText);
      setLoading(false);
      const filteredVideos = searchedVideos.filter(
        (video) => video.id.kind !== "youtube#playlist"
      );
      setVideos(filteredVideos);
    }
  };

  // 메뉴 껐다 켰다 하는 거 감지
  const onMenuClick = () => {
    const reversedState = !menuOpened;
    setMenuOpened(reversedState);
  };

  // 작은 화면에서 메뉴 화면 꺼지게 해주기
  const windowInSmallSize = (windowSize) => {
    windowSize && setMenuOpened(false);
  };

  // 비디오 클릭시 detail 화면으로 바뀌며
  // videos 에서 channel을 제외함 (추천 동영상이기 때문)
  const onVideoClick = (video) => {
    setMenuOpened(false);
    setVideoOpened(video);
    setViewType("detail");
    const filteredList = videos
      .filter(filterChannel)
      .filter((curr) => video !== curr);
    setVideos(filteredList);
  };

  // 위에서 channel을 필터링할 때 사용
  const filterChannel = (video) => {
    const kind = video.id.kind || video.kind;
    const isVideo = kind === "youtube#video";
    return isVideo;
  };

  // 테마 클릭시 light <-> dark
  const onThemeClick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      {menuOpened && videoOpened && (
        <ModalWrapper onClick={() => onMenuClick()} />
      )}
      <Header onSearch={onSearh} onMenuClick={onMenuClick} />
      <ViewContext.Provider
        value={{
          state: { menuOpened, viewType, currVideo: videoOpened, loading },
          actions: { onVideoClick },
        }}
      >
        <Body
          videoList={videos}
          menuInSmallSizedWindow={windowInSmallSize}
          onThemeClick={onThemeClick}
        />
      </ViewContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 50%;
  background: black;
`;
