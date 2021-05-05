import React from "react";
import icons from "../../service/icons";
import styled from "styled-components";

const HeaderRightIcons = ({ theme }) => {
  return (
    <div>
      <RightIcon viewBox="0 0 24 24" theme={theme}>
        <g>
          <path d={icons.add} fill="current"></path>
        </g>
      </RightIcon>
      <RightIcon viewBox="0 0 24 24" theme={theme}>
        <g>
          <path d={icons.board} fill="current"></path>
        </g>
      </RightIcon>
      <RightIcon viewBox="0 0 24 24" theme={theme}>
        <g>
          <path d={icons.alarm} fill="current"></path>
        </g>
      </RightIcon>

      <a href="https://github.com/SeunghyoKu/Youtube-clone">
        <Profile
          alt="profile"
          src="https://yt3.ggpht.com/yti/ANoDKi4lRxJEeG4u-effK1KPNFamV9dEIiPAUNcX1Bm4yg=s88-c-k-c0x00ffffff-no-rj-mo"
        ></Profile>
      </a>
    </div>
  );
};

export default HeaderRightIcons;

const RightIcon = styled.svg`
  fill: ${(props) => (props.theme === "dark" ? "white" : "#606060")};
  cursor: pointer;
  padding: 8px;
  width: 24px;
  height: 24px;
`;

const Profile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 4px 8px 4px 8px;
  padding: 0px 14px 0px 14px;
  @media (max-width: 410px) {
    padding: 0;
  }
`;
