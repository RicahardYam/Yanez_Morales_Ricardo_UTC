// Arreglo para contener las instrucciones
var instrucciones = ["1.- Selecciona el botón 'Mezclar Rompecabezas' para iniciar con la mezcla de las piezas.", "2.- Utiliza las flechas para mover las piezas.", "3.- Ordena las piezas para armar la imagen principal."];

// Variable para guardar los movimientos
var movimientos = [];

// Matriz que representa las posiciones del rompecabezas 4x4
var rompe = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

// Configuración de la disposición correcta del rompecabezas
var rompeCorrecta = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

// Variables para guardar la posición de la pieza vacía
var filaVacia = 3;
var columnaVacia = 3;

// Función para mostrar las instrucciones en una lista
function mostrarInstrucciones(instrucciones) {
    for (var i = 0; i < instrucciones.length; i++) {
        mostrarInstruccionesEnLista(instrucciones[i], "lista-instrucciones");
    }
}

function mostrarInstruccionesEnLista(instruccion, idLista) {
    var ul = document.getElementById(idLista);
    var li = document.createElement('li');
    li.textContent = instruccion;
    ul.appendChild(li);
}

// Función para agregar el último movimiento realizado
function agregarUltimoMovimiento(direccion) {
    movimientos.push(direccion);
}

// Función para verificar si se ha ganado el juego
function checarSiGano() {
    for (var i = 0; i < rompe.length; i++) {
        for (var j = 0; j < rompe[i].length; j++) {
            var rompeActual = rompe[i][j];
            if (rompeActual !== rompeCorrecta[i][j]) {
                return false;
            }
        }
    }
    return true;
}

// Función para mostrar un mensaje de victoria
function mostrarCartelGanador() {
    if (checarSiGano()) {
        alert("¡Felicidades! Has completado el rompecabezas.");
    }
}

// Función para intercambiar las posiciones en la matriz del rompecabezas
function intercambiarPosicionesRompe(filaPos1, columnaPos1, filaPos2, columnaPos2, filaPos3, columnaPos3) {
    var temp = rompe[filaPos1][columnaPos1];
    rompe[filaPos1][columnaPos1] = rompe[filaPos2][columnaPos2];
    rompe[filaPos2][columnaPos2] = rompe[filaPos3][columnaPos3];
    rompe[filaPos3][columnaPos3] = temp;
}


// Función para actualizar la posición de la pieza vacía
function actualizarPosicionVacia(nuevaFila, nuevaColumna) {
    filaVacia = nuevaFila;
    columnaVacia = nuevaColumna;
}

// Función para verificar si la posición es válida
function posicionValida(fila, columna) {
    return (fila >= 0 && fila <= 3 && columna >= 0 && columna <= 3);
}

// Configuración de los códigos de dirección para las flechas del teclado
var codigosDireccion = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
};

// Función para mover las piezas en la dirección especificada
function moverEnDireccion(direccion) {
    var nuevaFilaPiezaVacia;
    var nuevaColumnaPiezaVacia;

    // Determinar la nueva posición de la pieza vacía según la dirección
    switch (direccion) {
        case codigosDireccion.ABAJO:
            nuevaFilaPiezaVacia = filaVacia - 1;
            nuevaColumnaPiezaVacia = columnaVacia;
            break;
        case codigosDireccion.ARRIBA:
            nuevaFilaPiezaVacia = filaVacia + 1;
            nuevaColumnaPiezaVacia = columnaVacia;
            break;
        case codigosDireccion.IZQUIERDA:
            nuevaFilaPiezaVacia = filaVacia;
            nuevaColumnaPiezaVacia = columnaVacia + 1;
            break;
        case codigosDireccion.DERECHA:
            nuevaFilaPiezaVacia = filaVacia;
            nuevaColumnaPiezaVacia = columnaVacia - 1;
            break;
    }

    // Verificar si la nueva posición es válida y realizar el intercambio
    if (posicionValida(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia)) {
        intercambiarPosiciones(filaVacia, columnaVacia, nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        actualizarPosicionVacia(nuevaFilaPiezaVacia, nuevaColumnaPiezaVacia);
        agregarUltimoMovimiento(direccion);
    }
}

// Función para intercambiar las posiciones de dos piezas en el DOM
function intercambiarPosiciones(fila1, columna1, fila2, columna2) {
    var pieza1 = rompe[fila1][columna1];
    var pieza2 = rompe[fila2][columna2];

    intercambiarPosicionesRompe(fila1, columna1, fila2, columna2, filaVacia, columnaVacia);
    intercambiarPosicionesDOM('pieza' + pieza1, 'pieza' + pieza2);
}

// Función para intercambiar las posiciones de dos piezas en el DOM
function intercambiarPosicionesDOM(idPieza1, idPieza2) {
    var elementoPieza1 = document.getElementById(idPieza1);
    var elementoPieza2 = document.getElementById(idPieza2);

    var padre = elementoPieza1.parentNode;

    var cloneElemento1 = elementoPieza1.cloneNode(true);
    var cloneElemento2 = elementoPieza2.cloneNode(true);

    padre.replaceChild(cloneElemento1, elementoPieza2);
    padre.replaceChild(cloneElemento2, elementoPieza1);
}

// Función para actualizar el último movimiento realizado en la interfaz
function actualizarUltimoMovimiento(direccion) {
    var ultimoMov = document.getElementById('flecha');
    ultimoMov.textContent = ''; // Limpiar el contenido del elemento (se asume que mostrará la última dirección de movimiento)
}

// Función para mezclar las piezas al inicio del juego
function mezclarPiezas(veces) {
    if (veces <= 0) {
        return;
    }

    var direcciones = [codigosDireccion.ABAJO, codigosDireccion.ARRIBA, codigosDireccion.DERECHA, codigosDireccion.IZQUIERDA];

    var direccion = direcciones[Math.floor(Math.random() * direcciones.length)];

    moverEnDireccion(direccion);

    setTimeout(function() {
        mezclarPiezas(veces - 1);
    }, 100);
}

// Función para capturar las teclas presionadas por el jugador
function capturarTeclas() {
    document.body.onkeydown = (function(evento) {
        if (evento.which === codigosDireccion.ABAJO || evento.which === codigosDireccion.ARRIBA || evento.which === codigosDireccion.IZQUIERDA || evento.which === codigosDireccion.DERECHA) {
            moverEnDireccion(evento.which);
            actualizarUltimoMovimiento(event.which);

            var gano = checarSiGano();
            if (gano) {
                setTimeout(function() {
                    mostrarCartelGanador();
                }, 500);
            }
            evento.preventDefault();
        }
    });
}

// Función para iniciar el juego
function iniciar() {
    mezclarPiezas(30); // Mezclar las piezas al inicio
    capturarTeclas(); // Capturar las teclas presionadas por el jugador
}

// Función para mostrar las instrucciones del juego
function verInstrucciones() {
    mostrarInstrucciones(instrucciones);
}

// Función para regresar al menú principal
function menuPrincipal() {
    window.location.href = "../../index.html";
}

// Iniciar el juego al cargar la página
iniciar();
