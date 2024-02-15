// Función para generar las filas de las tablas de inspección
function generarTabla() {
  // Obtener el número total de cajas
  var totalCajas = parseInt(
    document.getElementById("total-cajas-empaque").value
  );
  // Obtener las tallas seleccionadas
  var tallasSeleccionadas = document.getElementById("tallas").value.split(",");
  // Tabla de inspección de empaque
  var colorseleccionado = document.getElementById("colores").value.split(",");
  var numeroreporte = document.getElementById("numero_reporte").value;
  var tablaEmpaqueBody = document
    .getElementById("empaque-table")
    .getElementsByTagName("tbody")[0];
  tablaEmpaqueBody.innerHTML = ""; // Limpiar el cuerpo de la tabla
  var l = 1;
  for (var i = 0; i < totalCajas; i++) {
    for (var j = 0; j < tallasSeleccionadas.length; j++) {
      for (var k = 0; k < colorseleccionado.length; k++) {
        var row = tablaEmpaqueBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var select_cajas =
          '<select name="defecto1">' +
          '<option value="Caja dañada">Caja dañada</option>' +
          '<option value="Etiqueta de envío incorrecta">Etiqueta de envío incorrecta</option>' +
          '<option value="Falta de embalaje protector">Falta de embalaje protector</option>' +
          '<option value="Embalaje insuficiente">Embalaje insuficiente</option>' +
          '<option value="Caja mal sellada">Caja mal sellada</option>' +
          '<option value="Falta de relleno">Falta de relleno</option>' +
          '<option value="Dimensiones incorrectas de la caja">Dimensiones incorrectas de la caja</option>' +
          '<option value="Productos sueltos dentro de la caja">Productos sueltos dentro de la caja</option>' +
          '<option value="Inconsistencia en el empaquetado">Inconsistencia en el empaquetado</option>' +
          '<option value="Etiqueta de manejo ausente">Etiqueta de manejo ausente</option>' +
          "</select>";
        cell1.innerHTML = numeroreporte.trim() + " - EMP -" + l++;
        cell2.innerHTML = select_cajas;
        cell3.innerHTML =
          i +
          1 +
          " (" +
          tallasSeleccionadas[j].trim() +
          " - " +
          colorseleccionado[k].trim() +
          ")";
        cell4.innerHTML = '<input type="text">';
      }
    }
  }
}

function generarTabla2() {
  // Obtener el número total de prendas
  var totalPrendas = parseInt(
    document.getElementById("total-prendas-etiquetado").value
  );
  // Obtener las tallas seleccionadas
  var tallasSeleccionadas = document.getElementById("tallas").value.split(",");
  // Tabla de inspección de etiquetado
  var colorseleccionado = document.getElementById("colores").value.split(",");
  var numeroreporte = document.getElementById("numero_reporte").value;
  console.log(numeroreporte)
  var tablaEtiquetadoBody = document
    .getElementById("etiquetado-table")
    .getElementsByTagName("tbody")[0];
  tablaEtiquetadoBody.innerHTML = ""; // Limpiar el cuerpo de la tabla
  var l = 1;
  for (var i = 0; i < totalPrendas; i++) {
    for (var j = 0; j < tallasSeleccionadas.length; j++) {
      for (var k = 0; k < colorseleccionado.length; k++) {
        var row = tablaEtiquetadoBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var select_etiqueta =
          '<select name="defecto1">' +
          '<option value="Etiqueta_incorrecta">Etiqueta incorrecta</option>' +
          '<option value="Información_incompleta">Información incompleta en la etiqueta</option>' +
          '<option value="Etiqueta_mal_posicionada">Etiqueta mal posicionada</option>' +
          '<option value="Letras_ilegibles">Letras ilegibles en la etiqueta</option>' +
          '<option value="Tamaño_de_fuente_incorrecto">Tamaño de fuente incorrecto en la etiqueta</option>' +
          '<option value="Inconsistencia_de_información">Inconsistencia de información en la etiqueta</option>' +
          '<option value="Etiqueta_desprendida">Etiqueta desprendida</option>' +
          '<option value="Etiqueta_mal_fijada">Etiqueta mal fijada</option>' +
          '<option value="Etiqueta_no_cumple_normativas">Etiqueta que no cumple con las normativas de etiquetado</option>' +
          '<option value="Error_en_la_composición_del_texto">Error en la composición del texto en la etiqueta</option>' +
          "</select>";
        cell1.innerHTML = numeroreporte.trim() + " - PRE -" + l++;
        cell2.innerHTML = select_etiqueta;
        cell3.innerHTML =
          i +
          1 +
          " (" +
          tallasSeleccionadas[j].trim() +
          " - " +
          colorseleccionado[k].trim() +
          ")";
        cell4.innerHTML = '<input type="text">';
      }
    }
  }
}

function generarTabla3() {
  // Obtener el número total de prendas
  var totalPrendas = parseInt(
    document.getElementById("muestreo_prendasM").value
  );

  document.getElementById("modeloM").value = document.getElementById("modelo").value;
  document.getElementById("numero_reporteM").value = document.getElementById("numero_reporte").value;
  // Obtener las tallas seleccionadas
  //var tallasSeleccionadas = document.getElementById("tallas").value.split(",");
  // Tabla de inspección de etiquetado
  var colorseleccionado = document.getElementById("colores").value.split(",");
  var numeroreporte = document.getElementById("numero_reporteM").value;
  console.log(numeroreporte)
  var tablaEtiquetadoBody = document
    .getElementById("etiquetado-tableM")
    .getElementsByTagName("tbody")[0];
  tablaEtiquetadoBody.innerHTML = ""; // Limpiar el cuerpo de la tabla
  var l = 1;
  for (var i = 0; i < totalPrendas; i++) {
    // for (var j = 0; j < tallasSeleccionadas.length; j++) {
      for (var k = 0; k < colorseleccionado.length; k++) {
        var row = tablaEtiquetadoBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12 = row.insertCell(11);
        var cell13 = row.insertCell(12);
        var cell14 = row.insertCell(13);
        
        cell1.innerHTML = '<input type="text">';
        cell2.innerHTML = '<input type="text">';
        cell3.innerHTML = '<input type="text">';
        cell4.innerHTML = '<input type="number">';
        cell5.innerHTML = '<input type="number">';
        cell6.innerHTML = '<input type="number">';
        cell7.innerHTML = '<input type="number">';
        cell8.innerHTML = '<input type="number">';
        cell9.innerHTML = '<input type="number">';
        cell10.innerHTML = '<input type="number">';
        cell11.innerHTML = '<input type="number">';
        cell12.innerHTML = '<input type="number">';
        cell13.innerHTML = '<input type="number">';
        cell14.innerHTML = '<input type="number">';
      }
    //}
  }
}

function generarTabla4() {
  // Obtener el número total de prendas
  var totalPrendas = parseInt(
    document.getElementById("muestreo_prendasV").value
  );

  document.getElementById("modeloV").value = document.getElementById("modelo").value;
  document.getElementById("numero_reporteV").value = document.getElementById("numero_reporte").value;
  // Obtener las tallas seleccionadas
  //var tallasSeleccionadas = document.getElementById("tallas").value.split(",");
  // Tabla de inspección de etiquetado
  var colorseleccionado = document.getElementById("colores").value.split(",");
  var numeroreporte = document.getElementById("numero_reporteV").value;
  console.log(numeroreporte)
  var tablaEtiquetadoBody = document
    .getElementById("etiquetado-tableV")
    .getElementsByTagName("tbody")[0];
  tablaEtiquetadoBody.innerHTML = ""; // Limpiar el cuerpo de la tabla
  var l = 1;
  for (var i = 0; i < totalPrendas; i++) {
    // for (var j = 0; j < tallasSeleccionadas.length; j++) {
      for (var k = 0; k < colorseleccionado.length; k++) {
        var row = tablaEtiquetadoBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12 = row.insertCell(11);
        var cell13 = row.insertCell(12);
        var cell14 = row.insertCell(13);
        
        cell1.innerHTML = '<input type="text">';
        cell2.innerHTML = '<input type="text">';
        cell3.innerHTML = '<input type="text">';
        cell4.innerHTML = '<input type="number">';
        cell5.innerHTML = '<input type="number">';
        cell6.innerHTML = '<input type="number">';
        cell7.innerHTML = '<input type="number">';
        cell8.innerHTML = '<input type="number">';
        cell9.innerHTML = '<input type="number">';
        cell10.innerHTML = '<input type="number">';
        cell11.innerHTML = '<input type="number">';
        cell12.innerHTML = '<input type="number">';
        cell13.innerHTML = '<input type="number">';
        cell14.innerHTML = '<input type="number">';
      }
    //}
  }
}


// funciones para habilitar/deshabilitar divs con un checkbox
document.addEventListener("DOMContentLoaded", function() {
  var checkboxempaque = document.getElementById('empaque');
  var checkboxmedidas = document.getElementById('medidas');
  var checkboxvisual = document.getElementById('visual');
  var checkboxetiquetado = document.getElementById('etiquetado');
  
  var divempaque = document.getElementById('empaque-d');
  var divmedidas = document.getElementById('medidas-d');
  var divvisual = document.getElementById('visual-d');
  var divetiquetado = document.getElementById('etiquetado-d');


  // Añadimos un listener al checkboxempaque para detectar cambios
  checkboxempaque.addEventListener('change', function() {
    // Si el checkbox está marcado, habilitamos el div
    if (checkboxempaque.checked) {
      divempaque.style.display = 'block';
    } else {
      // Si no está marcado, deshabilitamos el div
      divempaque.style.display = 'none';
    }
  });

  // Inicialmente ocultamos el div si el checkboxempaque no está marcado
  if (!checkboxempaque.checked) {
    divempaque.style.display = 'none';
  }

  // Añadimos un listener al checkboxmedidas para detectar cambios
  checkboxmedidas.addEventListener('change', function() {
    // Si el checkboxmedidas está marcado, habilitamos el div
    if (checkboxmedidas.checked) {
      divmedidas.style.display = 'block';
    } else {
      // Si no está marcado, deshabilitamos el div
      divmedidas.style.display = 'none';
    }
  });

  // Inicialmente ocultamos el div si el checkboxmedidas no está marcado
  if (!checkboxmedidas.checked) {
    divmedidas.style.display = 'none';
  }

  // Añadimos un listener al checkboxvisual para detectar cambios
  checkboxvisual.addEventListener('change', function() {
    // Si el checkboxvisual está marcado, habilitamos el div
    if (checkboxvisual.checked) {
      divvisual.style.display = 'block';
    } else {
      // Si no está marcado, deshabilitamos el div
      divvisual.style.display = 'none';
    }
  });

  // Inicialmente ocultamos el div si el checkboxvisual no está marcado
  if (!checkboxvisual.checked) {
    divvisual.style.display = 'none';
  }

  // Añadimos un listener al checkboxetiquetado para detectar cambios
  checkboxetiquetado.addEventListener('change', function() {
    // Si el checkboxetiquetado está marcado, habilitamos el div
    if (checkboxetiquetado.checked) {
      divetiquetado.style.display = 'block';
    } else {
      // Si no está marcado, deshabilitamos el div
      divetiquetado.style.display = 'none';
    }
  });

  // Inicialmente ocultamos el div si el checkboxetiquetado no está marcado
  if (!checkboxetiquetado.checked) {
    divetiquetado.style.display = 'none';
  }

  
});

