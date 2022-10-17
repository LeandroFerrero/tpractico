/*----------------   Cerrer Menu Hamburguesa ---------------*/

const links = document.querySelectorAll('.nav__item');

for (var i = 0; i < links.length; i++) {
  links[i].onclick = cerrarMenu;
}

function cerrarMenu() {
  document.querySelector('.nav__input').checked = false;
}


/*---------------   Validacion Formulario --------------------*/

document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.querySelector(".form").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  const nombre = document.querySelector('#form_nombre').value;

  if (nombre.length == 0) {

    alert("El nombre esta vacio. debes ingresar un nombre")

    return;
  }

  const mail = document.querySelector('#form_mail').value;

  if (mail.length == 0) {

    alert("El mail esta vacio. Debes ingresar un mail")

    return;
  }

  const mensaje = document.querySelector('#form_mensaje').value;

  if (mensaje.length == 0) {

    alert("El mensaje esta vacio, debes ingresar un mensaje.")

    return;
  }
  this.submit();
}

