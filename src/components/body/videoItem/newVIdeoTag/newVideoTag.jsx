import React from "react";
import styled from "styled-components";

const newVideoTag = ({ elapsedTime }) => {
  // 하루 내에 올라온 동영상일 경우 새 동영상 태그 붙여주기
  const isNewVideo = /시간/.test(elapsedTime) || /분/.test(elapsedTime);

  return isNewVideo && <StylednewVideoTag>새 동영상</StylednewVideoTag>;
};

export default newVideoTag;

const StylednewVideoTag = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  color: #aaaaaa;
  font-size: 12px;
  padding: 0px 3px 0px 3px;
`;
