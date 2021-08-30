// const xhr = new XMLHttpRequest();
// const nasaLink = 'https://api.nasa.gov/planetary/apod?api_key=y8jNV4xuVdYhFomWbDpeWwObDoBvhSbnXby9uhEw';
// const pokeLink = pokemon => {
//   return ` https://pokeapi.co/api/v2/pokemon/${pokemon}`;
// }
// xhr.open('GET', pokeLink('bulbasaur'));
// xhr.responseType = 'json';
// xhr.send();
// xhr.addEventListener('load', function () {
//   console.log(xhr.response);
//   $testImage.setAttribute('src', xhr.response.sprites['front_default'])
// });
// const wtf = () => {console.log('hi')}

// const $testImage = document.querySelector('.test-image');
// const denner = new Promise((resolve, reject) => {
//   resolve('denner ya')
//   reject('denner no')
// });

// denner.then((value, error) => {
//   console.log(value)
// }, error => {
//   console.log(error);
// })

function addTwoDigits(n) {
  const stringy = n.toString();
  const dig1 = parseInt(stringy[0]);
  const dig2 = parseInt(stringy[1]);
  return dig1 + dig2;
}
console.log(addTwoDigits(29));
