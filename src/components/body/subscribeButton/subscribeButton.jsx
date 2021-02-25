import React, { useState } from "react";
import styles from "./subscribeButton.module.css";

const SubscribeButton = (props) => {
  const [subscribed, setSuscirbed] = useState(false);

  const onClick = () => {
    const subscribeStatus = subscribed;
    setSuscirbed(!subscribeStatus);
  };

  return subscribed ? (
    <button
      className={styles.subscribe + " " + styles.notSubscribed}
      onClick={onClick}
    >
      구독
    </button>
  ) : (
    <button
      className={styles.subscribe + " " + styles.subscribed}
      onClick={onClick}
    >
      구독중
    </button>
  );
};

export default SubscribeButton;
