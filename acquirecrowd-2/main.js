const pages = [
  {
    header: 'Get a FREE Quote Today!',
    imageSrc: 'images/YGQ-Image1.png',
    mainText: 'Finding the right, low-cost health coverage for you just got SO much easier! Request a quote today'
  },
  {
    header: 'Coverage that Works For YOU!',
    imageSrc: 'images/YGQ-Image2.png',
    mainText: 'Is your health insurance too expensive? Compare your coverage options today!'
  }
];

const $headerContainer = document.querySelector('.header-container');
const headerRender = (page, highlight) => {
  const splitSentence = page.header.split(' ');
  const $headerWrapper = document.createElement('h1');
  for (let i = 0; i < splitSentence.length; i++) {
    const $newSpan = document.createElement('span');
    $newSpan.textContent = splitSentence[i];
    if (splitSentence[i] === highlight) {
      $newSpan.className = 'light-blue-font'
    } else {
      $newSpan.className = 'dark-grey-font'
    }
    $newSpan.className = $newSpan.className + ' margin-0-4 line-height-header'
    $headerWrapper.appendChild($newSpan);
  }
  $headerWrapper.className = 'col-8 justify-content-center flex-wrap'
  return $headerWrapper;
}
$headerContainer.appendChild(headerRender(pages[0], 'FREE'))
