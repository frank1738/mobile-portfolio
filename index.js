const mobileLinks = document.querySelectorAll('.mob-link');
const menuTab = document.querySelector('.mob-menu');
const hamburgerBtn = document.querySelector('.fa-bars');
const removeBtn = document.querySelector('.fa-xmark');
const desktopLinks = document.querySelectorAll('.menu-link');
const homeLink = document.querySelector('.desktop');
homeLink.classList.add('selected');
const popDiv = document.querySelector('.description-container');
const projectContainer = document.querySelectorAll('.last-container');
const workSection = document.querySelector('.work-section-div');
const form = document.querySelector('.form-section');
const emailAddress = document.querySelector('.email');
const messege = document.querySelector('.messege');
const fullName = document.querySelector('.full');
const textArea = document.querySelector('.text-area');
const myData = {
  title: 'Multi post stories',
  html: 'html',
  css: 'css',
  rubyrails: 'ruby',
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

projectContainer.forEach((item) => {
  const project = document.createElement('div');
  project.classList.add('project');
  project.innerHTML = `
<div class="sub-description">
<h2 class="subsequent-worksub-header">
  Profesional Art<br />
  Printing Data
</h2>
<p class="work-description">
  A daily selection of privately personalized reads; no accounts
  or sign-ups required. has been the industry's standard dummy
  text ever since the 1500s, when an unknown printer took a
  standard dummy text.
</p>
<ul class="btns">
  <li><button class="btn after">${myData.css}</button></li>
  <li><button class="btn after">${myData.html}</li>
  <li><button class="btn after">${myData.bootsrap}</button></li>
  <li><button class="btn after">${myData.rubyrails}</button></li>
</ul>
<button class="submit-btn after project-btn" >see project</button>
</div>
`;
  item.appendChild(project);
});

const workDiv = document.createElement('div');
workDiv.innerHTML = `
<h1 class="work-header">My Recent Works</h1>
<div class="work-container">
  <img
    src="./workImages/image1.png"
    alt="work-sample-image"
    class="workimg"
  />
  <div class="work-description-container">
    <h2 class="worksub-header">Mutli-Post Stories</h2>
    <p class="my-work">
      A daily selection of privately personalized reads no accounts or
      sign-ups required. has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a standard
      dummy text.
    </p>
    <ul class="btns one">
      <li><button class="btn">${myData.css}</button></li>
      <li><button class="btn">${myData.html}</button></li>
      <li><button class="btn">${myData.bootsrap}</button></li>
      <li><button class="btn">${myData.rubyrails}</button></li>
    </ul>
    <button class="submit-btn right project-btn">See Project</button>
  </div>
</div>
`;
workSection.appendChild(workDiv);

const projectBtns = document.querySelectorAll('.project-btn');

projectBtns.forEach((btn) => {
  btn.addEventListener('click', popUp);
});

function validate(event) {
  const lowerCase = emailAddress.value.toLowerCase();
  if (lowerCase === emailAddress.value) {
    messege.innerText = '';
    form.submit();
  } else {
    event.preventDefault();
    messege.innerText = 'email address should be lower case!';
  }
}

form.addEventListener('submit', validate);

if (!localStorage.getItem('formData')) {
  let nameUpdate = '';
  let emailUpdate = '';
  let textUpdate = '';
} else {
  const mydata = localStorage.getItem('formData');
  const parsedData = JSON.parse(mydata);
   nameUpdate = parsedData.name;
   emailUpdate = parsedData.email;
   textUpdate = parsedData.text;
  fullName.value = nameUpdate;
  emailAddress.value = emailUpdate;
  textArea.value = textUpdate;
}
updateLocalStorage();
function updateLocalStorage() {
  if (!localStorage.getItem('formData')) {
    let formData = {
      name: '',
      email: '',
      text: '',
    };
    let stringifiedFormData = JSON.stringify(formData);
    localStorage.setItem('formData', stringifiedFormData);
  } else {
    let formData = {
      name: nameUpdate,
      email: emailUpdate,
      text: textUpdate,
    };
    let stringifiedFormData = JSON.stringify(formData);
    localStorage.setItem('formData', stringifiedFormData);
  }
}

function updateName(event) {
  nameUpdate = event.target.value;
  updateLocalStorage();
}

function updateEmail(event) {
  emailUpdate = event.target.value;
  updateLocalStorage();
}

function updateText(event) {
  textUpdate = event.target.value;
  console.log('yea');
  updateLocalStorage();
}

fullName.addEventListener('change', updateName);
emailAddress.addEventListener('change', updateEmail);
textArea.addEventListener('change', updateText);
