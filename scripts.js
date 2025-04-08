// Datos de usuario válido
const VALID_USER = {
    username: "admin",
    password: "1234"
};

// Base de datos de contenido con imágenes locales
const CATALOGO = [
    {
        id: 1,
        titulo: "Invincible",
        tipo: "Serie",
        año: 2021,
        genero: "Animación",
        imagen: "invincible.jpg",
        favorito: false
    },
    {
        id: 2,
        titulo: "The Mandalorian",
        tipo: "Serie",
        año: 2019,
        genero: "Aventura",
        imagen: "mandalorian.jpg",
        favorito: false
    },
    {
        id: 3,
        titulo: "Dune",
        tipo: "Película",
        año: 2021,
        genero: "Ciencia ficción",
        imagen: "dune.jpg",
        favorito: false
    },
    {
        id: 4,
        titulo: "The Witcher",
        tipo: "Serie",
        año: 2019,
        genero: "Fantasía",
        imagen: "witcher.jpg",
        favorito: false
    },
    {
        id: 5,
        titulo: "Interstellar",
        tipo: "Película",
        año: 2014,
        genero: "Ciencia ficción",
        imagen: "interstellar.jpg",
        favorito: false
    },
    {
        id: 6,
        titulo: "Breaking Bad",
        tipo: "Serie",
        año: 2008,
        genero: "Drama",
        imagen: "breaking-bad.jpg",
        favorito: false
    },
    {
        id: 7,
        titulo: "Arcane",
        tipo: "Serie",
        año: 2021,
        genero: "Animación",
        imagen: "arcane.jpg",
        favorito: false
    },
    {
        id: 8,
        titulo: "The Batman",
        tipo: "Película",
        año: 2022,
        genero: "Acción",
        imagen: "batman.jpg",
        favorito: false
    },
    {
        id: 9,
        titulo: "House of the Dragon",
        tipo: "Serie",
        año: 2022,
        genero: "Fantasía",
        imagen: "house-dragon.jpg",
        favorito: false
    },
    {
        id: 10,
        titulo: "Everything Everywhere All at Once",
        tipo: "Película",
        año: 2022,
        genero: "Ciencia ficción",
        imagen: "everything-everywhere.jpg",
        favorito: false
    },
    {
        id: 11,
        titulo: "Peaky Blinders",
        tipo: "Serie",
        año: 2013,
        genero: "Drama",
        imagen: "peaky-blinders.jpg",
        favorito: false
    },
    {
        id: 12,
        titulo: "Top Gun: Maverick",
        tipo: "Película",
        año: 2022,
        genero: "Acción",
        imagen: "top-gun.jpg",
        favorito: false
    },
    {
        id: 13,
        titulo: "Stranger Things",
        tipo: "Serie",
        año: 2016,
        genero: "Ciencia ficción",
        imagen: "stranger-things.jpg",
        favorito: false
    }
];

// Extraer géneros únicos del catálogo
const GENEROS_DISPONIBLES = [...new Set(CATALOGO.map(item => item.genero))];

let favoritos = [];
let usuarioLogueado = false;

// Elementos del DOM
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close-btn");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const userInfo = document.getElementById("userInfo");
const welcomeUser = document.getElementById("welcomeUser");
const logoutBtn = document.getElementById("logoutBtn");
const contentSection = document.getElementById("content");
const btnPeliculasSeries = document.getElementById("btnPeliculasSeries");
const btnGeneros = document.getElementById("btnGeneros");
const btnFavoritos = document.getElementById("btnFavoritos");

// Event Listeners
loginBtn.addEventListener("click", mostrarModalLogin);
closeBtn.addEventListener("click", cerrarModalLogin);
window.addEventListener("click", cerrarModalClickExterno);
loginForm.addEventListener("submit", manejarLogin);
logoutBtn.addEventListener("click", cerrarSesion);
btnPeliculasSeries.addEventListener("click", mostrarPeliculasSeries);
btnGeneros.addEventListener("click", mostrarGeneros);
btnFavoritos.addEventListener("click", mostrarFavoritos);

// Funciones de login
function mostrarModalLogin() {
    loginModal.style.display = "block";
}

function cerrarModalLogin() {
    loginModal.style.display = "none";
    resetLoginForm();
}

function cerrarModalClickExterno(event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
        resetLoginForm();
    }
}

function manejarLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === VALID_USER.username && password === VALID_USER.password) {
        loginExitoso(username);
    } else {
        mostrarErrorLogin();
    }
}

function loginExitoso(username) {
    loginMessage.textContent = "¡Inicio de sesión exitoso!";
    loginMessage.classList.add("success");
    loginMessage.classList.remove("error");
    
    setTimeout(() => {
        loginModal.style.display = "none";
        resetLoginForm();
        usuarioLogueado = true;
        actualizarUIUsuario(username);
        mostrarPeliculasSeries();
    }, 1000);
}

function mostrarErrorLogin() {
    loginMessage.textContent = "Usuario o contraseña incorrectos";
    loginMessage.classList.add("error");
    loginMessage.classList.remove("success");
}

function cerrarSesion() {
    usuarioLogueado = false;
    loginBtn.style.display = "block";
    userInfo.style.display = "none";
    mostrarMensajeBienvenida();
}

function resetLoginForm() {
    loginForm.reset();
    loginMessage.textContent = "";
    loginMessage.classList.remove("error", "success");
}

function actualizarUIUsuario(username) {
    loginBtn.style.display = "none";
    welcomeUser.textContent = `Bienvenido, ${username}`;
    userInfo.style.display = "flex";
}

function mostrarMensajeBienvenida() {
    contentSection.innerHTML = `
        <div class="welcome-message">
            <h2>Bienvenido a Cuevanetfliz</h2>
            <p>Inicia sesión para acceder a todo el contenido</p>
        </div>
    `;
}

// Funciones de contenido
function generarTarjetaContenido(item) {
    const esFavorito = favoritos.includes(item.id);
    return `
    <div class="content-card" data-id="${item.id}">
        <img src="${item.imagen}" alt="${item.titulo}" class="card-image">
        <div class="card-info">
            <h3 class="card-title">${item.titulo}</h3>
            <div class="card-meta">
                <span>${item.tipo}</span>
                <span>${item.año}</span>
            </div>
            <span class="card-genero">${item.genero}</span>
            <div class="card-actions">
                <button class="action-btn watch-btn" onclick="verContenido(${item.id})">
                    <i class="fas fa-play"></i> Ver
                </button>
                <button class="action-btn fav-btn ${esFavorito ? 'favorited' : ''}" 
                        onclick="toggleFavorito(${item.id}, this)">
                    <i class="fas fa-heart"></i> ${esFavorito ? 'Quitar' : 'Favorito'}
                </button>
            </div>
        </div>
    </div>`;
}

function mostrarPeliculasSeries() {
    if (!usuarioLogueado) {
        mostrarMensajeNoLogueado();
        return;
    }

    actualizarBotonActivo(btnPeliculasSeries);
    
    let html = `<h2 class="section-title">Series y Películas</h2>
    <div class="content-container">`;
    
    CATALOGO.forEach(item => {
        html += generarTarjetaContenido(item);
    });
    
    html += `</div>`;
    contentSection.innerHTML = html;
}

function mostrarGeneros() {
    if (!usuarioLogueado) {
        mostrarMensajeNoLogueado();
        return;
    }

    actualizarBotonActivo(btnGeneros);
    
    let html = `<h2 class="section-title">Géneros</h2>
    <div class="generos-container">
    <button class="genero-btn active" onclick="filtrarPorGenero('todos')">
    <i class="fas fa-list"></i> Todos
    </button>`;
    
    GENEROS_DISPONIBLES.forEach(genero => {
        html += `<button class="genero-btn" onclick="filtrarPorGenero('${genero}')">
                    ${genero}
                </button>`;
    });
    
    html += `</div>
    <div id="contenido-generos" class="content-container" style="margin-top: 1rem;"></div>`;
    
    contentSection.innerHTML = html;
    filtrarPorGenero('todos');
}

function filtrarPorGenero(genero) {
    // Actualizar botones activos
    document.querySelectorAll('.genero-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const contenedor = document.getElementById('contenido-generos') || contentSection;
    let contenidoFiltrado = CATALOGO;
    
    if (genero !== 'todos') {
        contenidoFiltrado = CATALOGO.filter(item => item.genero === genero);
    }
    
    if (contenidoFiltrado.length === 0) {
        contenedor.innerHTML = `<p class="empty-message">No hay contenido disponible para este género</p>`;
        return;
    }
    
    let html = '';
    contenidoFiltrado.forEach(item => {
        html += generarTarjetaContenido(item);
    });
    
    contenedor.innerHTML = html;
}

function mostrarFavoritos() {
    if (!usuarioLogueado) {
        mostrarMensajeNoLogueado();
        return;
    }

    actualizarBotonActivo(btnFavoritos);
    
    if (favoritos.length === 0) {
        contentSection.innerHTML = `
            <h2 class="section-title">Tus Favoritos</h2>
            <div class="empty-message">
                <p>Aún no tienes contenido en favoritos</p>
            </div>
        `;
        return;
    }
    
    let html = `<h2 class="section-title">Tus Favoritos</h2>
    <div class="content-container">`;
    
    CATALOGO.filter(item => favoritos.includes(item.id)).forEach(item => {
        html += generarTarjetaContenido(item);
    });
    
    html += `</div>`;
    contentSection.innerHTML = html;
}

function verContenido(id) {
    const contenido = CATALOGO.find(item => item.id === id);
    alert(`Reproduciendo: ${contenido.titulo}\n\nPróximamente: Integración con reproductor real`);
}

function toggleFavorito(id, boton) {
    const index = favoritos.indexOf(id);
    
    if (index === -1) {
        favoritos.push(id);
        boton.classList.add('favorited');
        boton.innerHTML = '<i class="fas fa-heart"></i> Quitar';
    } else {
        favoritos.splice(index, 1);
        boton.classList.remove('favorited');
        boton.innerHTML = '<i class="fas fa-heart"></i> Favorito';
    }
    
    if (btnFavoritos.classList.contains('active')) {
        mostrarFavoritos();
    }
}

// Funciones auxiliares
function actualizarBotonActivo(boton) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    boton.classList.add('active');
}

function mostrarMensajeNoLogueado() {
    contentSection.innerHTML = `
        <div class="welcome-message">
            <h2>Contenido exclusivo</h2>
            <p>Debes iniciar sesión para acceder a nuestro catálogo</p>
        </div>
    `;
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    btnPeliculasSeries.click();
});