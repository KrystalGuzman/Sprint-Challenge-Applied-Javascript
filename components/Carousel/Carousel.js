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
const container = document.querySelector('.carousel-container');

function createCarousel(){

	// elements created
  const carousel = document.createElement('div');
  const left = document.createElement('div');
  const mountain = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');
  const right = document.createElement('div');

  //classes added
  carousel.classList.add('carousel');
  left.classList.add('left-button');
  mountain.classList.add('carousel1');
  computer.classList.add('carousel1');
  trees.classList.add('carousel1');
  turntable.classList.add('carousel1');
  right.classList.add('right-button');
  
//content added
  mountain.src = './assets/carousel/mountains.jpeg';
  computer.src = './assets/carousel/computer.jpeg';
  trees.src = './assets/carousel/trees.jpeg';
  turntable.src = './assets/carousel/turntable.jpeg';
  const rightBtn = '\u25ba';
  const leftBtn = '\u25c4';
  
  // elements structured
  carousel.append(left);
  carousel.append(mountain);
  carousel.append(computer);
  carousel.append(trees);
  carousel.append(turntable);
  carousel.append(right);

  // // add this functionality later
  // left.addEventListener("click", () => {
  //   left.classList.toggle("left-button");
  // });
  // right.addEventListener("click", () => {
  //   right.classList.toggle("right-button");
  // });
  return carousel;
}
console.log(createCarousel());

