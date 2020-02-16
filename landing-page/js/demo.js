const sections = document.querySelectorAll('[data-nav]');
const navList = document.querySelector('#navbar__list');



const handleNavClick = event => {
  event.preventDefault();
  const target = event.target;
  // target.classList.toggle('active');
  document.querySelector(`${target.getAttribute('href')}`).scrollIntoView({
            behavior: 'smooth'
        });
};


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



//Scrolling
let lastId;
let cur = [];
let navLinks = document.querySelectorAll("nav ul li a");

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
