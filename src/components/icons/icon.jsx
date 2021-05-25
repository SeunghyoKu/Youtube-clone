import React from "react";
import styled from "styled-components";

const Icon = ({ opened, d, theme, home }) => {
  const pallete = {
    light: {
      home: "red",
      general: "#909090",
    },
    dark: {
      home: "white",
      general: "#909090",
    },
  };

  const getFillColor = () => {
    if (theme === "dark") {
      return home ? pallete.dark.home : pallete.dark.general;
    } else {
      return home ? pallete.light.home : pallete.light.general;
    }
  };

  return opened ? (
    <IconSVG viewBox="0 0 24 24" width="24" color={getFillColor()}>
      <g>
        <path d={d} fill="current"></path>
      </g>
    </IconSVG>
  ) : (
    <IconClosedSVG viewBox="0 0 24 24" width="24" color={getFillColor()}>
      <g>
        <path d={d} fill="current"></path>
      </g>
    </IconClosedSVG>
  );
};

export default Icon;

const IconSVG = styled.svg`
  margin-right: 24px;
  fill: ${({ color }) => color};
`;

const IconClosedSVG = styled.svg`
  margin: 0px 0px 6px 0px;
  fill: ${({ color }) => color};
`;
