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
document.querySelector(".form").addEventListener('submit', validarFormulario);
});

function despliegaAlerta(msgError){
  document.querySelector('#btn__alerta').checked = true;
  document.querySelector('#mensaje').innerHTML = msgError;
};


function validarFormulario(evento) {
  evento.preventDefault();
  const nombre = document.querySelector('#form_nombre').value;

  if (nombre.length == 0) {
    msgError = "El Nombre no puede estar vacio.";
    despliegaAlerta(msgError);
    return;
  }

  
  const mail = document.querySelector('#form_mail').value;

  if (mail.length == 0) {
    msgError = "El Email no puede estar vacio.";
    despliegaAlerta(msgError);
    return;
  } 

  if (!((/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i).test(mail))){
    msgError = "Formato de Email incorrecto.";
    despliegaAlerta(msgError);
    return;
  } 


  const mensaje = document.querySelector('#form_mensaje').value;

  if (mensaje.length == 0) {
    msgError = "El Mensaje no puede estar vacio.";
    despliegaAlerta(msgError);
    return;
  }


  this.submit();
  
  document.querySelector(".form").reset();

}

