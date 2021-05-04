import React, { useState } from "react";
import styled from "styled-components";

const SubscribeButton = (props) => {
  const [subscribed, setSuscirbed] = useState(false);

  const onClick = () => {
    const subscribeStatus = subscribed;
    setSuscirbed(!subscribeStatus);
  };

  return subscribed ? (
    <Button onClick={onClick} subscribed={subscribed}>
      구독
    </Button>
  ) : (
    <Button onClick={onClick} subscribed={subscribed}>
      구독중
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
  background-color: ${(props) =>
    props.subscribed ? "rgba(255, 255, 255, 0.1)" : "red"};
`;

export default SubscribeButton;
