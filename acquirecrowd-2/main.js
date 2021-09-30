const pages = [
  {
    header: 'Get a FREE Quote Today!',
    headerHighlight: 'FREE',
    imageSrc: 'images/yqg-image1.png',
    mainText: 'Finding the right, low-cost health coverage for you just got SO much easier! Request a quote today.',
    pageIndex: 1
  },
  {
    header: 'Coverage that Works For YOU!',
    headerHighlight: 'YOU!',
    imageSrc: 'images/yqg-image2.png',
    mainText: 'Is your health insurance too expensive? Compare your coverage options today!',
    pageIndex: 2
  }
];

const page = pages[1];

const $headerContainer = document.querySelector('.header-container');
const headerRender = (currentPage, highlight) => {
  const splitSentence = currentPage.header.split(' ');
  const $headerWrapper = document.createElement('h1');
  for (let i = 0; i < splitSentence.length; i++) {
    const $newSpan = document.createElement('span');
    $newSpan.textContent = splitSentence[i];
    if (splitSentence[i] === highlight) {
      $newSpan.className = 'light-blue-bold-font'
    } else {
      $newSpan.className = 'dark-grey-font'
    }
    $newSpan.className = $newSpan.className + ' margin-0-4 line-height-header'
    $headerWrapper.appendChild($newSpan);
  }
  $headerWrapper.className = 'col-8 justify-content-center flex-wrap smaller-header-font'
  return $headerWrapper;
}
$headerContainer.appendChild(headerRender(page, page.headerHighlight))

const $mainText = document.querySelector('.main-text')
$mainText.textContent = page.mainText;

const $image = document.querySelector('.main-image')
$image.setAttribute('src', page.imageSrc);
