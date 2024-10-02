const navbar = document.querySelector('.navbar'); // o cualquier selector adecuado
let scrollListener = false;

//FUNCION PARA EL COLOR DEL MENU------------------------------------------------------------------------------------------------------------------->

function updateNavbar() {
  if (window.innerWidth > 767) {
    //navbar transparente
    navbar.classList.remove('navbar-transparent');
    navbar.classList.add('navbar-color');
  } else {
    //navbar con color
    navbar.classList.remove('navbar-color');
    navbar.classList.add('navbar-transparent');
  }
}

function handleResize() {
  if (window.innerWidth > 767) {
    if (!scrollListener) {
      window.addEventListener('scroll', updateNavbar);
      scrollListener = true;
    }
  } else {
    if (scrollListener) {
      window.removeEventListener('scroll', updateNavbar);
      scrollListener = false;
    }
  }
  updateNavbar();
}

window.addEventListener('resize', handleResize);
handleResize(); 


