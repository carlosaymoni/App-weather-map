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