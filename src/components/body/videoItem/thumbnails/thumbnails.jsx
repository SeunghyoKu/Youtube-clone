import React from "react";
import styled from "styled-components";

const Thumbnails = ({ isChannel, thumbnails, isDetailView }) => {
  if (isChannel) {
    return (
      <ImageBox>
        <ChannelProfile src={thumbnails} alt="channelProfile"></ChannelProfile>
      </ImageBox>
    );
  } else {
    return (
      <StyledThumbnails
        isDetailView={isDetailView}
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
  width: ${(props) => (props.isDetailView ? "168px" : "320px")};
`;
