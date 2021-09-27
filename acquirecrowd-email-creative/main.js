const $offerContainer = document.querySelector('.offer-container')
const $prizeName = document.querySelector('.prize-name');
const $offerMainText = document.querySelector('.offer-main-text')
const $prizeImg = document.querySelector('.prize-image')

$offerContainer.addEventListener('click', (event) => {
  console.log(window.location)
})

const prize = {
  name: 'Airpod Pros',
  nameExtended: 'pair of Apple Airpod Pros',
  imageSource: 'images/apple-watch.png'
}

const prizeNameTextContent = prize.name;
$prizeName.textContent = prizeNameTextContent

const offerMainTextContent = `We're choosing a winner for a brand new ${prize.nameExtended}! Enter now and find out if you're the lucky winner!`
$offerMainText.textContent = offerMainTextContent

$prizeImg.setAttribute('src', prize.imageSource)
