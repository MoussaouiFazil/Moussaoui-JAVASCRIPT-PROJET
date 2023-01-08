const titleElement = document.querySelector('h1');
const buttonElement = document.querySelector('button');

let colorIndex = 0;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

buttonElement.addEventListener('click', function() {
  titleElement.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

const headerElement = document.querySelector('header');
const mainElement = document.querySelector('main');

let headerHeight = headerElement.offsetHeight;

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > headerHeight) {
    headerElement.classList.add('sticky');
    mainElement.style.paddingTop = `${headerHeight}px`;
  } else {
    headerElement.classList.remove('sticky');
    mainElement.style.paddingTop = 0;
  }
});
