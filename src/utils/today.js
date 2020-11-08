export const getTheCurrentDate = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy+mm+dd;
  return today;
};
export const getTheDateSixMonthsLater = date => {
  date = new Date();
  date.setDate(date.getDate() + 180);
  var dd = String(date.getDate()).padStart(2, "0");
  var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = date.getFullYear();
  date = yyyy+mm+dd;
  return date;
};
