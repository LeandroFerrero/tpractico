
// CIERRA MENU AL DARLE CLICK A ALGUNA OPCION 

const menu = document.querySelector(".nav__menu");
const navegador = document.querySelector(".nav__input");

if (menu) {
  menu.addEventListener('click', () => {
    console.log('menu clicked');
    navegador.checked = false;
  });
}





