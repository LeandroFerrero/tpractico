
// CIERRA MENU AL DARLE CLICK A ALGUNA OPCION 

// const menu = document.querySelector(".nav__menu");
// const navegador = document.querySelector(".nav__input");

// if (menu) {
//   menu.addEventListener('click', () => {
//     navegador.checked = false;
//   });
// }

const links = document.querySelectorAll('.nav__item');

for (var i = 0; i < links.length; i++) {
  links[i].onclick = cerrarMenu;
}

function cerrarMenu(){
  document.querySelector('.nav__input').checked = false;
}



