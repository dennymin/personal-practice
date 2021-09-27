const $prizeName = document.querySelector('.prize-name');
const $offerMainText = document.querySelector('.offer-main-text')
const $prizeImg = document.querySelector('.prize-image')

const prizes = [
  {
    name: 'Airpod Pros',
    nameExtended: 'pair of Apple Airpod Pros',
    imageSource: 'images/airpod-pros.png',
    productId: 1
  },
  {
    name: 'Apple Watch',
    nameExtended: 'Apple Watch',
    imageSource: 'images/apple-watch2.png',
    productId: 2
  }, {
    name: 'Dyson Animal V8',
    nameExtended: 'Dyson Animal V8 cordless vacuum engineered for homes with pets',
    imageSource: 'images/dyson2.png',
    productId: 3
  }, {
    name: 'EcoFlow',
    nameExtended: 'EcoFlow Portable Power Station',
    imageSource: 'images/ecoflow2.png',
    productId: 4
  }, {
    name: 'MacBook Pro',
    nameExtended: 'MacBook Pro',
    imageSource: 'images/laptop.png',
    productId: 5
  }, {
    name: 'Oura Ring',
    nameExtended: 'Oura Ring that monitors sleep, readiness, and activity',
    imageSource: 'images/ring.png',
    productId: 6
  }, {
    name: 'Purple Pillow',
    nameExtended: 'Purple Pillow with optimal head and neck support',
    imageSource: 'images/purple-pillow.png',
    productId: 7
  }
]

const prize = prizes[0];

const prizeNameTextContent = prize.name;
$prizeName.textContent = prizeNameTextContent

const offerMainTextContent = `We're choosing a winner for a brand new ${prize.nameExtended}! Enter now and find out if you're the lucky winner!`
$offerMainText.textContent = offerMainTextContent

$prizeImg.setAttribute('src', prize.imageSource)
