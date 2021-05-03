import React from "react";
import styled from "styled-components";

const Moon = ({ opened, d }) => {
  const Icon = styled.svg`
    margin-right: 24px;
    fill: #ffe07d;
  `;

  const IconClosed = styled.svg`
    margin: 0px 0px 6px 0px;
    fill: #ffe07d;
  `;
  return opened ? (
    <Icon viewBox="0 0 512 512" width="24" height="24">
      <g>
        <path d={d} fill="current"></path>
      </g>
    </Icon>
  ) : (
    <IconClosed viewBox="0 0 512 512" width="24" height="24">
      <g>
        <path d={d} fill="current"></path>
      </g>
    </IconClosed>
  );
};

export default Moon;
