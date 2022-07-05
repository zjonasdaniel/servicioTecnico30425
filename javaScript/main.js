let repetir = true;
alert(
  "HOLA! Bienvenido al Bucle Numero1 a cargo de Jonas Zarate, Este mismo quiere asegurar el bienestar del usuario por lo que se le va a preguntar de manera infinita si es que esta bien, con el objetivo que afirme en esta pagina y quedando registro en nuestra base de datos que usted esta bien!"
);
const pregunta = A => {
  let respuesta = prompt(
    "¿Usted de encuentra bien? (Responda .si. para cerrar el programa)(el si va sin los puntos, solo si :D)"
  );
  while (A) {
    if (respuesta != "si") {
      respuesta = prompt(
        "¿Usted de encuentra bien? (Responda .si. para cerrar el programa)(el si va sin los puntos, solo si :D)"
      );
    } else {
      alert(
        "Nuestro intercambio social ha concluido, muchas gracias por participar! Nos alegra que este bien :)"
      );
      A = false;
    }
  }
}
pregunta(repetir);
