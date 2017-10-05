export function formattedTime(timestamp) {
  var date = new Date(timestamp*1000);
  // Hours part from the timestamp
  var hours = date.getHours();
  // Minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // Will display time in 10:30 format
  return hours + ':' + minutes.substr(-2);
}
