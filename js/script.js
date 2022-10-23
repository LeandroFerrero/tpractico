/*----------------   Cerrer Menu Hamburguesa ---------------*/

const links = document.querySelectorAll('.nav__item');

for (var i = 0; i < links.length; i++) {
  links[i].onclick = cerrarMenu;
}

function cerrarMenu() {
  document.querySelector('.nav__input').checked = false;
}

/*------------------------------------------------------------------------------------------------*/
/*---------------   Validacion Formulario , mensaje error ----------------------------------------*/
/*------------------  y publicacion comentarios desde api ----------------------------------------*/
/*------------------------------------------------------------------------------------------------*/





/*------------------------------------funcion para llamar a la api----------------------*/
function publicarComentariosApi() {
  
  contenido=document.querySelector('#coment');

  var comentarios =['Feliicitaciones por la pagina, esta buenisima, me gustaria que me pasen los datos de los desarrolladores para contratarlos, gracias','Que alegria saber que el 30 estaran en Cordoba. Los seguimos a todos lados asi que alli estaremos. Los queremos mucho!!!!!', 'Por favor pongan mas fechas, las entradas se agotan enseguida y nos quedamos afuera!!!! ' ];

  fetch('https://randomuser.me/api/?results=3&nat=es') 



  .then(res => res.json())
  .then(data => {
  
    let salida = "";
    for (var i = 0; i < 3; i++){
    
      salida += `<div class="tarjeta">
                  <div class="tarjeta__foto">
                    <img src="${data.results[i].picture.large}" class="circulo__comentario" alt="foto_usuario"></img> 
                  </div>
                  <div class="tarjeta__nombre">
                    <h3>${data.results[i].name.first}</h3>
                  </div>
                  <div class="tarjeta__comentario">
                    <p>${comentarios[i]}</p>
                  </div>
                </div>`;

    }
    contenido.innerHTML= salida;
  })
     
      
}


/*-----------------------funcion despliega  mensaje de error-----------------*/

function despliegaAlerta(msgError){
  document.querySelector('#btn__alerta').checked = true;
  document.querySelector('#mensaje').innerHTML = msgError;
};



/*---------------- funcion para validar mail ------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".form").addEventListener('submit', validarFormulario);
  });

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

  
  document.querySelector(".form").reset();
  publicarComentariosApi();
}














