const mobileLinks = document.querySelectorAll('.mob-link');
const menuTab = document.querySelector('.mob-menu');
const hamburgerBtn = document.querySelector('.fa-bars');
const removeBtn = document.querySelector('.fa-xmark');
const desktopLinks = document.querySelectorAll('.menu-link');
const homeLink = document.querySelector('.desktop');
homeLink.classList.add('selected');
const popDiv = document.querySelector('.description-container');
const myData = {
  title: 'Multi post stories',
  html: 'html',
  bootsrap: 'bootsrap',
  ruby: 'ruby and rails',
  image: './workImages/background/Snapshoot Portfolio.png',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
};
let hidden = false;
function showMenuTab() {
  menuTab.style.width = '100%';
}

function removeMenuTab() {
  menuTab.style.width = '0%';
}

mobileLinks.forEach((link) => {
  link.addEventListener('click', removeMenuTab);
});

let selectedLink = '';

function select(event) {
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
desktopLinks.forEach((link) => {
  link.addEventListener('click', select);
});

function removeDescription() {
  popDiv.classList.add('remove');
  hidden = true;
}

function popUp() {
  if (hidden) {
    popDiv.classList.remove('remove');
    hidden = false;
    return;
  }
  const popContainer = document.createElement('div');
  popContainer.classList.add('pop-up');
  popContainer.innerHTML = `
  <div class="pop-container">
  <div class="pop-head">
    <h2 class="pop-heading">${myData.title}</h2>
    <i class="fa-solid fa-xmark hide-pop"></i>
    </div>
    <ul class="btns one snap">
      <li><button class="btn snap">${myData.html}</button></li>
      <li><button class="btn snap">${myData.bootsrap}</button></li>
      <li><button class="btn snap">${myData.ruby}</button></li>
    </ul>
    <div class='pop-img-div'>
    <div class='snap-div'>
    <img
    src="${myData.image}"
    alt="project-snapshot"
    class="snapshot"
    />
    </div>
    <div class='pop-btn-desc'>
    <p class="pop-description">${myData.content}</p>
    <div class="btns pop">
      <button class="submit-btn right pop-btn">
        See Live
        <img src="./workImages/background/btn-1.png" alt="vector-img"  class="btn-img"/>
      </button>
      <button class="submit-btn right pop-btn">
        See Source
        <img
        src="./workImages/background/Icon - Export.png"
        alt="vector-img" class="btn-img"
        />
      </button>
      </div>
      </div>
</div>
 
  `;
  popDiv.appendChild(popContainer);
  const removePop = document.querySelector('.hide-pop');
  removePop.addEventListener('click', removeDescription);
}

const projectBtns = document.querySelectorAll('.project-btn');

projectBtns.forEach((btn) => {
  btn.addEventListener('click', popUp);
});
