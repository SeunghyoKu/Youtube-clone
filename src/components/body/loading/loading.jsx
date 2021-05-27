import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import ThemeContext from "contexts/theme";
import ViewContext from "contexts/view";

const Loading = (props) => {
  const { theme } = useContext(ThemeContext);
  const { state } = useContext(ViewContext);
  const { menuOpened } = state;
  return (
    <LoadingDiv>
      <StyledLoading theme={theme} menuOpened={menuOpened} />
    </LoadingDiv>
  );
};

export default Loading;

const Spin = keyframes`
    from {
        transform: rotate(90deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoadingDiv = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoading = styled.div`
  width: 5em;
  height: 5em;
  position: relative;
  border-radius: 50%;
  border: 10px solid lightgray;
  border-top: 10px solid red;
  animation: ${Spin} 2s linear infinite;
`;
