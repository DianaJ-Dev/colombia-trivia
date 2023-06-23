
function saludar() {
  console.log("Hello hh🌎");
      var nombre = document.getElementById("nombre").value;
      var saludo = "¡Hola, " + nombre + "! ¿Preparada para Jugar?";
      document.getElementById("resultado").innerHTML = saludo;
    }
   

  
function verificarRespuesta(opciones) {
      // Obtener el valor de la respuesta seleccionada
      console.log("hola")
      var respuestaSeleccionada = document.querySelector('input[name="'+opciones+'"]:checked');
    
      if (respuestaSeleccionada) {
        // Comparar la respuesta seleccionada con la respuesta correcta
        if (respuestaSeleccionada.value === 'opcion_correcta') {
          // La respuesta es correcta
          alert("Correcto")
        } else {
          // La respuesta es incorrecta
          alert("Incorrecto")
        }
      } else {
        // No se ha seleccionado ninguna respuesta
        alert("Por favor, selecciona una respuesta.")
      }
    }

function irPregunta1() {
  document.getElementById('principal').style.display = "none";
  document.getElementById('pantalla-pregunta1').style.display = "block";
  document.getElementById('pantalla-pregunta2').style.display = "none";
  document.getElementById('pantalla-pregunta3').style.display = "none";
}

function irPregunta2() {
  document.getElementById('principal').style.display = "none";
  document.getElementById('pantalla-pregunta1').style.display = "none";
  document.getElementById('pantalla-pregunta2').style.display = "block";
  document.getElementById('pantalla-pregunta3').style.display = "none";
}  

function irPregunta3() {
  document.getElementById('principal').style.display = "none";
  document.getElementById('pantalla-pregunta1').style.display = "none";
  document.getElementById('pantalla-pregunta2').style.display = "none";
  document.getElementById('pantalla-pregunta3').style.display = "block";
}  

function verResultados() {
  let correctas=0;
  var respuesta1=document.querySelector('input[name="opciones1"]:checked');
  var respuesta2=document.querySelector('input[name="opciones2"]:checked');
  var respuesta3=document.querySelector('input[name="opciones3"]:checked');
  if(respuesta1 && respuesta1.value === "opcion_correcta"){
    correctas=correctas+1;
  }
  if(respuesta2 && respuesta2.value === "opcion_correcta"){
    correctas=correctas+1;
  }
  if(respuesta3 && respuesta3.value === "opcion_correcta"){
    correctas=correctas+1;
  }
  document.getElementById("resultados").innerHTML="Respuestas correctas: "+ correctas + "/3";
  document.getElementById("result").style.display="block";
  document.getElementById('pantalla-pregunta3').style.display = "none";
  document.getElementById('pantalla-resultados').style.display = "block";

}

function jugarDeNuevo(){
  document.getElementById('principal').style.display = "block";
  document.getElementById('pantalla-resultados').style.display = "none"; 
}

