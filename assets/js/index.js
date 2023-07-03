const ham = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
let menuState = false;
ham.addEventListener('click', () => {
  menuState = !menuState;
  // Hide scroll bar when menu is open.
  if (menuState) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.overflow = 'unset';
  }
  ham.classList.toggle('open');
  mobileNav.classList.toggle('hidden');
});
