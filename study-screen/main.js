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

const $EntriesContainer = document.querySelector('.entries-container');
const $NewEntryButton = document.querySelector('.new-entry-button');


const createDomElement = (type, variousClasses, someText) => {
  const newDom = document.createElement(type);
  newDom.className = variousClasses;
  newDom.textContent = someText;
  return newDom;
}

const newEntryClicked = () => {
  const newEntryDiv = createDomElement('div', 'justify-content-center', '');
  if (newEntryDiv.textContent !== '') {
    $EntriesContainer.append(newEntryDiv);
    console.log('created!')
  } else {
    console.log('not created!')
    return;
  }
}

$NewEntryButton.addEventListener('click', newEntryClicked)
