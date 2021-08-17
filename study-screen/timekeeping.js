const acquireTime = () => {
  const currentTime = new Date();
  currentTime.hours = currentTime.getHours();
  if (currentTime.hours >= 12 && currentTime.hours < 24) {
    currentTime.amPm = 'PM';
  } else {
    currentTime.amPm = 'AM';
  }
  if (currentTime.hours > 12) {
    currentTime.hours = currentTime.hours - 12;
  }
  currentTime.minutes = currentTime.getMinutes();
  if (currentTime.minutes.toString().length < 2) {
    currentTime.minutes = '0' + currentTime.minutes;
  }
  return currentTime;
}
module.exports = acquireTime;
