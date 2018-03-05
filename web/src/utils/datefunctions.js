// return a readable date from timestamp
const momentFromTimestamp = timestamp => {
  return "2 days ago";
};
// return a timestamp from a date
const timestampFromDate = date => {
  return Date.now();
};

export { momentFromTimestamp, timestampFromDate };
