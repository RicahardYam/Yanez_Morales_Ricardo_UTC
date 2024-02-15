// Calcular la ganancia diaria y actualizar la tabla
function calculateInvestment() {
    // Obtener los valores seleccionados de los campos de selección
    const amountInput = document.getElementById('amount').value;
    const timeInput = document.getElementById('time').value;
    const interestInput = document.getElementById('interest').value;

    // Convertir los valores a números después de la validación
    const amount = parseFloat(amountInput);
    const time = parseInt(timeInput);
    const interest = parseFloat(interestInput);

    // Calcular la ganancia diaria
    let dailyProfit;
    if (time <= 12) {
        // Si el tiempo es de 1 a 12 meses, calcular en meses
        dailyProfit = ((amount * (interest / 100)) / time).toFixed(2);
    } else {
        // Si el tiempo es de 2 a 3 años, calcular en meses
        dailyProfit = ((amount * (interest / 100)) / (time * 30)).toFixed(2);
    }

    // Mostrar la ganancia diaria en el resultado
    document.getElementById('result').innerHTML = `Ganancia diaria: $${dailyProfit}`;

    // Crear y mostrar la tabla de detalles de inversión
    const table = document.getElementById('investment-table');
    table.innerHTML = `
        <tr>
            <th>${time <= 12 ? 'Mes' : 'Día'}</th>
            <th>Ganancia ${time <= 12 ? 'Mensual' : 'Diaria'}</th>
        </tr>
    `;
    for (let i = 1; i <= time; i++) {
        const profit = (i * dailyProfit).toFixed(2);
        table.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>$${profit}</td>
            </tr>
        `;
    }
}

// Agregar el evento al botón de calcular
document.getElementById('calculate-button').addEventListener('click', calculateInvestment);

// Función para imprimir el contenido de la página
function printContent() {
    // Aquí puedes agregar la lógica para imprimir, como abrir una ventana de impresión
    window.print();
}

// Agregar el evento al botón de imprimir
document.getElementById('print-button').addEventListener('click', printContent);
