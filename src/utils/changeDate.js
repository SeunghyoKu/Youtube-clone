const changeDate = (date) => {
  const MAX_DATE_LENGTH = 10;
  const changedDate = date.slice(0, MAX_DATE_LENGTH).split("-");
  return changedDate.join(". ") + ".";
};

export default changeDate;
