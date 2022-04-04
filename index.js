const mobileLinks = document.querySelectorAll('.mob-link');
const menuTab = document.querySelector('.mob-menu');
const hamburgerBtn = document.querySelector('.fa-bars');
const removeBtn = document.querySelector('.fa-xmark');
const desktopLinks = document.querySelectorAll('.menu-link');
const homeLink = document.querySelector('.desktop');

homeLink.classList.add('selected');

function showMenuTab() {
  menuTab.style.width = '100%';
}

function removeMenuTab() {
  menuTab.style.width = '0%';
}

mobileLinks.forEach((link) => {
  link.addEventListener('click', removeMenuTab);
});

desktopLinks.forEach((link) => {
  link.addEventListener('click', select);
});

let selectedLink = '';

function select() {
  homeLink.classList.remove('selected');
  if (selectedLink) {
    selectedLink.classList.remove('selected');
    selectedLink = event.target;
    selectedLink.classList.add('selected');
  } else {
    selectedLink = event.target;
    selectedLink.classList.add('selected');
  }
}

hamburgerBtn.addEventListener('click', showMenuTab);
removeBtn.addEventListener('click', removeMenuTab);
homeLink.addEventListener('click', select);
