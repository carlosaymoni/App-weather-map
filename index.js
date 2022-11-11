'use strict'

const climaKey = 'c5b9f1aeb8ccf4ec04d874cc034ae5a6';

const clima = () => {
    navigator.geolocation.getCurrentPosition(dataClima);
}

const dataClima = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${climaKey}`)
        .then(response => response.json())
        .then(function(data){
            console.log(data);
            let pais =data.sys.country;
            let temp = data.main.temp;
            let humedad = data.main.humidity;
            document.getElementById('h1').textContent = `"${pais}"`;
            document.getElementById('humedad').textContent = `Humedad ${humedad}%`;
            document.getElementById('temperatura').textContent = `Temperatura ${temp} °C`;
        });
}
    