'use strict'


function startTime() {
    let today = new Date();
    let fecha = today.toLocaleDateString();
    let dia = today.getDay()
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // cambiamos la sombra del contenedor segun los segundos

    if (sec % 2 === 0) {
        document.getElementById('container').style.boxShadow = "0 0 10px #000";
    } else {
        document.getElementById('container').style.boxShadow = "0 0 5px #000";
    }

    // Agregar 0 en los numeros menores a 10

    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);

    // Obtenemos el nombre del dia de la semana

    const nameDays = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    let day = nameDays[dia];

    // Mostramos los datos

    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("fecha").innerHTML = fecha;
    document.getElementById("dia").innerHTML = day;

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

