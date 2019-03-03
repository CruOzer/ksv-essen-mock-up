// Startpoint
let  i = 0;
const time = 5000;

const imgs=[
  '/img/slide-1.jpeg',
  '/img/slide-2.jpeg',
  '/img/slide-3.jpeg'
];


function loadImage() {
  const slide = document.getElementById('slide');
  console.log(slide);
  slide.style.backgroundImage = `url('${imgs[i]}')`;
  if (i < imgs.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("loadImage()", time);
}

window.onload = loadImage;

// Select dom items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const menuItems = document.querySelectorAll('.nav-item');


let showMenu = false;


menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    menuItems.forEach((item) => {
      item.classList.add('show');
    });
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    menuItems.forEach((item) => {
      item.classList.remove('show');
    });
    showMenu = false;
  }
}
