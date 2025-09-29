let lastScrollY = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) {
    
    navbar.classList.add('hidden');
  } else if (e.deltaY < 0) {
    
    navbar.classList.remove('hidden');
  }
});
