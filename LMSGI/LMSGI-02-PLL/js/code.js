var ymax = 70;
var yinit = 15;
var y = yinit;
var v = 0;
var g = 1.622;
var a = g; //a= -g es para motor encendido
var dt = 0.016683;
var timer;
var timerEnergy = null;
var initEnergy = 100;
var energy = initEnergy;
var maxIntentos = 3;
var intentos = 0;
var finIntentos = false;

window.onload = function () {

    document.getElementById('imgprop').style.display = "none"; //oculta motor.
    document.getElementById("gameover").style.display = "none";
    document.getElementById("retry").style.display = "none";
    document.getElementById("youwin").style.display = "none";
    //DEFINICION DE EVENTOS.
    //Hacer menu visible
    document.getElementById("visible").onclick = function () {
        document.getElementsByClassName("col-3")[0].style.display = "block";
        //stop();
    };
    //Ocultar Menu movil.
    document.getElementById("oculto").onclick = function () {
        document.getElementsByClassName("col-3")[0].style.display = "none";
        //start();
    };
    document.getElementById("reset").onclick = function () {
        reset();
        start();
    };

    document.getElementById("newtry").onclick = function () {
        document.getElementById("retry").style.display = "none";
        retry();
    };

    document.getElementById("newgame1").onclick = function () {
        document.getElementById("gameover").style.display = "none";
        reset();
        start();
    };

    document.getElementById("newgame2").onclick = function () {
        document.getElementById("youwin").style.display = "none";
        reset();
        start();
    };

    //Enciende el motor al apretar la tecla espacio.
    window.onkeydown = function (evt) {
        var tecla = evt.keyCode;
        if ((tecla === 32))
        {
            motorOn();
        }
    };
    //Apaga el motor al soltar la tecla.
    window.onkeyup = function (evt) {
        var tecla = evt.keyCode;
        if ((tecla === 32))
        {
            motorOff();
        }
    };

    //Empezar a mover nave
    start();
};

//Definicion de funciones
function start() {
    window.console.log(intentos);
    finIntentos = comprobarIntentos();
    window.console.log(finIntentos);
    comprobarVidas();
    if (!finIntentos) {
        intentos++;
        window.console.log("Ejecuta mover nave");
        timer = setInterval(function () {
            moverNave();
        }, dt * 1000);
    } else {
        stop();
        endGame();
    }
}

function stop() {
    clearInterval(timer);
}

function moverNave() {
    v += a * dt;
    document.getElementById("speed").innerHTML = v.toFixed(2);
    y += v * dt;
    document.getElementById("altitude").innerHTML = y.toFixed(0);

    //mover hasta que top sea un 70% de la pantalla
    if (y < 72) {
        document.getElementById("nave").style.top = y + "%";
    } else {
        stop();
        endGame();
    }
}

function comprobarIntentos() {
    if (intentos > maxIntentos - 1) {
        return true;
    } else {
        return false;
    }
}

function comprobarVidas() {
    switch (intentos) {
        case 0:
            break;
        case 1:
            document.getElementById('life3').style.display = "none";
            break;
        case 2:
            document.getElementById('life3').style.display = "none";
            document.getElementById('life2').style.display = "none";
            break;
        case 3:
            document.getElementById('life3').style.display = "none";
            document.getElementById('life2').style.display = "none";
            document.getElementById('life1').style.display = "none";
            break;
    }
    ;
}

function motorOn() {
    a = -g;
    document.getElementById("imgprop").style.display = "inline-block";
    if (timerEnergy === null) {
        timerEnergy = setInterval(function () {
            updateEnergy();
        }, 100);
    }
    if (energy <= 0) {
        motorOff();
        document.getElementById('energy').innerHTML = 0;
    }
}

function motorOff() {
    a = g;
    document.getElementById("imgprop").style.display = "none";
    clearInterval(timerEnergy);
    timerEnergy = null;
}
function updateEnergy() {
    //Aquí hay que cambiar el valor del marcador de Fuel...
    energy -= 1;
    document.getElementById("energy").innerHTML = energy.toFixed(1);
    if (energy <= 0) {
        motorOff();
        document.getElementById('energy').innerHTML = 0;
    }
}

function retry() {
    y = yinit; // altura inicial
    v = 0;
    g = 1.622;
    a = g;
    energy = initEnergy;
    dt = 0.016683;
    document.getElementById("energy").innerHTML = energy;
    clearInterval(timer);
    start();
}

function reset() {
    timerEnergy = null;
    y = yinit; // altura inicial
    v = 0;
    g = 1.622;
    a = g;
    energy = initEnergy;
    intentos = 0;
    dt = 0.016683;
    document.getElementById("energy").innerHTML = energy;
    document.getElementById("retry").style.display = "none";
    document.getElementById("youwin").style.display = "none";
    document.getElementById("gameover").style.display = "none";
    document.getElementById('life3').style.display = "inline-block";
    document.getElementById('life2').style.display = "inline-block";
    document.getElementById('life1').style.display = "inline-block";
    clearInterval(timer);
}

function endGame() {
    document.getElementById('imgprop').style.display = "none";
    comprobarVidas();
    if (finIntentos) {
        document.getElementById("gameover").style.display = "block";
    } else if ((v >= 4)) {
        document.getElementById("retry").style.display = "block";
    } else {
        document.getElementById("youwin").style.display = "block";
    }
}
