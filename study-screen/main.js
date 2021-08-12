const $CurrentDate = document.querySelector('.current-date');

const flashing = setInterval(function() {
  const colon = ':';
  const space = ' ';
  const current = acquireTime();
  if ($CurrentDate.textContent.includes(colon)) {
    $CurrentDate.textContent = `${current.hours} ${current.minutes}`;
  } else if ($CurrentDate.textContent.includes(space)) {
    $CurrentDate.textContent = `${current.hours}:${current.minutes}`;
  }
  $CurrentDate.textContent = $CurrentDate.textContent + ' ' + current.amPm;
},1000)

const acquireTime = () => {
  const currentTime = new Date();
  currentTime.hours = currentTime.getHours();
  if (currentTime.hours > 12) {
    currentTime.amPm = 'PM';
    currentTime.hours = currentTime.hours - 12;
  } else {
    currentTime.amPm = 'AM';
  }
  currentTime.minutes = currentTime.getMinutes();
  return currentTime;
}
