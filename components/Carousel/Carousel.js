/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let images = [
  'mountains.jpeg',
  'computer.jpeg',
  'trees.jpeg',
  'turntable.jpeg',
  'mountains.jpeg',
  'computer.jpeg',
  'trees.jpeg',
  'turntable.jpeg'
]

const carouselElement = document.querySelector('.carousel-container');

carouselElement.appendChild(createCarousel(images));

function createCarousel(images){
  let carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');

  const left = '\u25c4';
  const right = '\u25ba';

  let leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.click(function() {nextSlide(5)})
  leftButton.textContent = left;

  let rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.click(function() {nextSlide(1)})
  rightButton.textContent = right;

  carouselDiv.appendChild(leftButton);

  images.forEach((image) => {
    let imagesElem = document.createElement('img');
    imagesElem.classList.add("slides")
    imagesElem.src = `../../assets/carousel/${image}`;
    carouselDiv.appendChild(imagesElem);
  })

  carouselDiv.appendChild(rightButton);

  return carouselDiv;
}

var index = 0;
showSlides(index);
// nextSlide(index);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {index = 1}
  slides[index-1].style.display = "block";
  setTimeout(showSlides, 4000);
}

function nextSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[index-1].style.display = "block";
}

function previousSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[index-1].style.display = "block";
}