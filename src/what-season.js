module.exports = function getSeason(date) {
  if (date===undefined) {
    return 'Unable to determine the time of year!';
  } else if (date.toString() === Date()) {
    throw Error;
  }
  let monthIdx = date.getMonth();
  switch (true) {
    case (monthIdx >= 0 && (monthIdx < 2 || monthIdx === 11)) : return "winter";
    case (monthIdx >= 2 && monthIdx < 5) : return "spring";
    case (monthIdx >= 5 && monthIdx < 8) : return "summer";
    case (monthIdx >= 8 && monthIdx < 11) : return "autumn";
    default: return 'Unable to determine the time of year!';
  }
};
