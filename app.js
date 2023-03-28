'use strict'


function startTime() {
  let today = new Date();
  let date = today.toLocaleDateString();
  let dia = today.getDay()
  let hr = today.getHours();
  let min = today.getMinutes();

  // Agregar 0 en los numeros menores a 10

  hr = checkTime(hr);
  min = checkTime(min);

  // Obtenemos el nombre del dia de la semana

  const nameDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  let day = nameDays[dia];

  // Mostramos los datos

  document.getElementById("hr").innerHTML = `${hr}:${min}`;
  document.getElementById("date").innerHTML = date;
  document.getElementById("day").innerHTML = day;

  let time = setTimeout(function () {
    startTime()
  }, 500);

}

// funcion para agregar el 0 en los numeros < 10

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}