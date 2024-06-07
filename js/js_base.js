// Get the elements from HTML
const topBar = document.querySelector('.top-bar');
const searchBar = document.querySelector('.search-bar');
const registerButton = document.querySelector('.register-btn');
const loginButton = document.querySelector('.login-btn');
const footerButtons = document.querySelectorAll('.footer-buttons.btn');
const aboutUsSection = document.querySelector('#About Us');
const newsSection = document.querySelector('#news');
const guidesSection = document.querySelector('#guides');
const dwarfBlock = document.querySelector('#Dwarf');
const gnomeBlock = document.querySelector('#Gnome');
const dragonBlock = document.querySelector('#Dragon');
const merryBlock = document.querySelector('#Merry');
const suramaraBlock = document.querySelector('#Suramara');

// Add event listeners to the buttons
registerButton.addEventListener('click', () => {
  alert('Register button clicked!');
});

loginButton.addEventListener('click', () => {
  alert('Login button clicked!');
});

// Add event listener to the search bar
searchBar.addEventListener('input', () => {
  console.log('Search query:', searchBar.value);
});

// Add event listeners to the footer buttons
footerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Footer button clicked:', button.textContent);
  });
});

// Add animation to the about us section
aboutUsSection.addEventListener('mouseover', () => {
  aboutUsSection.style.transform = 'cale(1.1)';
});

aboutUsSection.addEventListener('mouseout', () => {
  aboutUsSection.style.transform = 'cale(1)';
});

// Add animation to the blocks with images
dwarfBlock.addEventListener('mouseover', () => {
  dwarfBlock.style.transform = 'cale(1.1)';
});

dwarfBlock.addEventListener('mouseout', () => {
  dwarfBlock.style.transform = 'cale(1)';
});

gnomeBlock.addEventListener('mouseover', () => {
  gnomeBlock.style.transform = 'cale(1.1)';
});

gnomeBlock.addEventListener('mouseout', () => {
  gnomeBlock.style.transform = 'cale(1)';
});

dragonBlock.addEventListener('mouseover', () => {
  dragonBlock.style.transform = 'cale(1.1)';
});

dragonBlock.addEventListener('mouseout', () => {
  dragonBlock.style.transform = 'cale(1)';
});

merryBlock.addEventListener('mouseover', () => {
  merryBlock.style.transform = 'cale(1.1)';
});

merryBlock.addEventListener('mouseout', () => {
  merryBlock.style.transform = 'cale(1)';
});

suramaraBlock.addEventListener('mouseover', () => {
  suramaraBlock.style.transform = 'cale(1.1)';
});

suramaraBlock.addEventListener('mouseout', () => {
  suramaraBlock.style.transform = 'cale(1)';
});

// Change the text in the about us section every 10 seconds
setInterval(() => {
  aboutUsSection.textContent = `About Us ${new Date().getFullYear()}`;
}, 10000);

// Change the text in the news section every 10 seconds
setInterval(() => {
  newsSection.textContent = `News ${new Date().getFullYear()}`;
}, 10000);

// Change the text in the guides section every 10 seconds
setInterval(() => {
  guidesSection.textContent = `Guides ${new Date().getFullYear()}`;
}, 10000);
