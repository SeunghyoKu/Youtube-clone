import React, { useContext } from "react";
import styled from "styled-components";
import ViewContext from "contexts/view";

const Thumbnails = ({ isChannel, thumbnails }) => {
  const { state } = useContext(ViewContext);
  const { viewType } = state;
  if (isChannel) {
    return (
      <ImageBox>
        <ChannelProfile src={thumbnails} alt="channelProfile"></ChannelProfile>
      </ImageBox>
    );
  } else {
    return (
      <StyledThumbnails
        isDetailView={viewType === "detail"}
        src={thumbnails}
        alt="thumbnails"
      ></StyledThumbnails>
    );
  }
};

export default Thumbnails;

const ImageBox = styled.div`
  text-align: center;
  width: 320px;
`;

const ChannelProfile = styled.img`
  border-radius: 50%;
  width: 50%;
`;

const StyledThumbnails = styled.img`
  width: ${({ isDetailView }) => (isDetailView ? "168px" : "320px")};
`;
