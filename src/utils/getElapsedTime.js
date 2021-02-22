const elapsedTime = (publishedAt) => {
  const elapsedMs = new Date().getTime() - new Date(publishedAt).getTime();
  const elapsedDate = elapsedMs / 1000 / 60 / 60 / 24;

  if (elapsedDate > 365) {
    return `${Math.floor(elapsedDate / 365)}년 전`;
  } else if (elapsedDate > 35) {
    return `${Math.floor(elapsedDate / 30)}달 전`;
  } else if (elapsedDate > 6) {
    return `${Math.floor(elapsedDate / 7)}주 전`;
  } else if (elapsedDate > 1) {
    return `${Math.floor(elapsedDate)}일 전`;
  } else if (elapsedDate * 24 > 1) {
    return `${Math.floor(elapsedDate * 24)}시간 전`;
  } else {
    return `${Math.floor(elapsedDate * 24 * 60)}분 전`;
  }
};

export default elapsedTime;
