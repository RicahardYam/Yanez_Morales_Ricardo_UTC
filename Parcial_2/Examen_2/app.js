let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
const contenedor = document.getElementById('contenedor');
const vistaPrevia = document.getElementById('vista-previa');
const tituloVistaPrevia = document.getElementById('titulo-vista-previa');
const resumenVistaPrevias = document.getElementById('resumen-vista-previa');
const horariosVistaPrevia = document.getElementById('horarios-vista-previa');
const numerosPaginaContainer = document.getElementById('numeros-pagina');

btnSiguiente.addEventListener('click', () => {
    if (pagina < 6) {
        pagina += 1;
        cargarPeliculas();
    }
});

btnAnterior.addEventListener('click', () => {
    if (pagina > 1) {
        pagina -= 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async () => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=eef2d2afcd0008bea0106472afa5957f&language=es-MX&page=${pagina}`);

        if (respuesta.ok) {
            const datos = await respuesta.json();

            let peliculasHTML = '';
            datos.results.forEach(pelicula => {
                peliculasHTML += `
                    <div class="pelicula" data-titulo="${pelicula.title}" data-resumen="${pelicula.overview}" data-horarios="${generarHorarios()}">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>
                `;
            });

            contenedor.innerHTML = peliculasHTML;

            // Agregar eventos de clic para mostrar vista previa
            const peliculas = document.querySelectorAll('.pelicula');
            peliculas.forEach(pelicula => {
                pelicula.addEventListener('click', () => {
                    mostrarVistaPrevia(pelicula);
                });
            });

            // Generar números de página
            generarNumerosPagina();

        } else {
            console.log('Error al obtener datos de la API');
        }

    } catch (error) {
        console.log(error);
    }
}

const mostrarVistaPrevia = (pelicula) => {
    tituloVistaPrevia.textContent = pelicula.dataset.titulo;
    resumenVistaPrevias.textContent = pelicula.dataset.resumen;
    horariosVistaPrevia.textContent = `Horarios: ${pelicula.dataset.horarios}`;

    vistaPrevia.classList.add('activo');

    // Agregar evento de clic para cerrar la vista previa al hacer clic fuera de ella
    vistaPrevia.addEventListener('click', cerrarVistaPrevia);
}

const cerrarVistaPrevia = () => {
    vistaPrevia.classList.remove('activo');
    vistaPrevia.removeEventListener('click', cerrarVistaPrevia);
}

const generarNumerosPagina = () => {
    numerosPaginaContainer.innerHTML = '';

    const totalPaginas = 6; // Cambiar según el número total de páginas

    for (let i = 1; i <= totalPaginas; i++) {
        const numeroPagina = document.createElement('button');
        numeroPagina.textContent = i;
        numeroPagina.classList.add('numero-pagina');

        if (i === pagina) {
            numeroPagina.classList.add('pagina-actual');
        }

        numeroPagina.addEventListener('click', () => {
            pagina = i;
            cargarPeliculas();
        });

        numerosPaginaContainer.appendChild(numeroPagina);
    }
}

const generarHorarios = () => {
    const horarios = ['10:00', '11:00','12:00', '13:00', '14:00','15:00','16:00','17:00','18:00', '19:00', '22:00']; // Horarios aleatorios
    const horarioAleatorio = horarios[Math.floor(Math.random() * horarios.length)];
    return horarioAleatorio;
}

cargarPeliculas();
