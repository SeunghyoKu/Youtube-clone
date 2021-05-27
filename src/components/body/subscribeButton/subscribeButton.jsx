import React, { useState } from "react";
import styled from "styled-components";

const SubscribeButton = (props) => {
  // 개인의 구독 정보 대신 일단은 useState로 버튼만 만들어 둠
  const [subscribed, setSuscirbed] = useState(true);

  const onClick = () => {
    const subscribeStatus = subscribed;
    setSuscirbed(!subscribeStatus);
  };

  return subscribed ? (
    <Button onClick={onClick} subscribed={subscribed}>
      구독중
    </Button>
  ) : (
    <Button onClick={onClick} subscribed={subscribed}>
      구독
    </Button>
  );
};

const Button = styled.button`
  height: 40px;
  width: 72px;
  color: white;
  border: none;
  border-radius: 5%;
  padding: 10px 16px 10px 160x;
  font-size: 14px;
  margin: auto 0px auto 0px;
  background-color: ${(props) => (props.subscribed ? "#606060" : "red")};
`;

export default SubscribeButton;
