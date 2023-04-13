'use strict'

const climateKey = 'c5b9f1aeb8ccf4ec04d874cc034ae5a6';

const climate = () => {
  navigator.geolocation.getCurrentPosition(dataClimate);
}

const dataClimate = position => {
  const {
    latitude,
    longitude
  } = position.coords;
  fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${climateKey}&lang=es`)
    .then(response => response.json())
    .then(function (data) {
      console.log(data);
      let country = data.sys.country;
      let city = data.name;
      let temp = Math.round(data.main.temp);
      let feel = Math.round(data.main.feels_like);
      let humidity = data.main.humidity;
      let max = Math.round(data.main.temp_max);
      let min = Math.round(data.main.temp_min);
      let wind = data.wind.speed;
      let description = data.weather[0].description;
      
      document.getElementById('description').textContent = `"${description.toUpperCase()}"`;
      document.getElementById('h1').textContent = `${country}`;
      document.getElementById('city').textContent = `${city}`;
      document.getElementById('temp').textContent = `${temp} °C`;
      document.getElementById('feels_like').textContent = `${feel} °C`;
      document.getElementById('humidity').textContent = `${humidity}%`;
      document.getElementById('temp_max').textContent = `${max} °C`;
      document.getElementById('temp_min').textContent = `${min} °C`;
      document.getElementById('wind').textContent = `${wind} km/h`;
    });
}

// Obtenemos la fecha y la hora 

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