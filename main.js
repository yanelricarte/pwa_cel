/** Validación formario con JS */

// console.log(document.getElementById('registroForm'))

document
  .getElementById("registroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //Prevenir el envio del formulario por defecto
    validarFormulario(); // llamar a la función de validación
  });

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let password = document.getElementById("password").value;
  let repetirPassword = document.getElementById("repetirPassword").value;

  let valid = true; //variable para indicar si el formulario es válido

  //Validar que el nombre no esté vacio
  if (nombre === "") {
    document.getElementById("errorNombre").innerText =
      "El nombre es obligatorio";
    valid = false;
  } else {
    document.getElementById("errorNombre").innerText = "";
  }


  //Validar que el apellido no esté vacio
  if (apellido === "") {
    document.getElementById("errorApellido").innerText =
      "El apellido es obligatorio";
    valid = false;
  } else {
    document.getElementById("errorApellido").innerText = "";
  }

    //Validar que el contraseña no esté vacio
    if (password !== repetirPassword) {
      document.getElementById("errorRepetirPassword").innerText =
        "Las contraseñas no coinciden";
      valid = false;
    } else {
      document.getElementById("errorRepetirPassword").innerText = "";
    }
  
  
  




  //Mostrar un mensaje si el formulario es válido
  if (valid) {
    alert("Formualario enviado correctamente");
  }
}
