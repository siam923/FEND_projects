/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('[data-nav]');
const navList = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// handle event when clinked on nav link
const handleNavClick = event => {
  event.preventDefault();
  const target = event.target;
  // target.classList.toggle('active');
  document.querySelector(`${target.getAttribute('href')}`).scrollIntoView({
            behavior: 'smooth'
        });
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
sections.forEach( sec => {
  let listItem = document.createElement('li');
  let navLink = document.createElement('a');
  navLink.textContent = sec.attributes['data-nav'].textContent;
  navLink.classList.add('menu__link');
  navLink.href = `#${sec.id}`

  navLink.addEventListener('click', handleNavClick);

  listItem.appendChild(navLink);
  navList.appendChild(listItem);
});

// selecting the nav links after generating the nav
let navLinks = document.querySelectorAll("nav ul li a");

// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY + 25;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    let mainSection = document.querySelector(`#${section.id}`);

    if (section.offsetTop <= fromTop  &&
        section.offsetTop + section.offsetHeight > fromTop){
          link.classList.add("current");
          mainSection.classList.add("current-section");
        } else {
          link.classList.remove("current");
          mainSection.classList.remove("current-section");
        }
  });

});
