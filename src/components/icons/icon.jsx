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

  const Icon = styled.svg`
    margin-right: 24px;
    fill: ${getFillColor()};
  `;

  const IconClosed = styled.svg`
    margin: 0px 0px 6px 0px;
    fill: ${getFillColor()};
  `;

  return opened ? (
    <Icon viewBox="0 0 24 24" width="24">
      <g>
        <path d={d} fill="current"></path>
      </g>
    </Icon>
  ) : (
    <IconClosed viewBox="0 0 24 24" width="24">
      <g>
        <path d={d} fill="current"></path>
      </g>
    </IconClosed>
  );
};

export default Icon;
