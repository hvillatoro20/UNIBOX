// JavaScript for UNIBOX Marketplace

// Función para buscar productos
def buscarProductos() {
    const searchQuery = document.getElementById("search").value;
    if (searchQuery.trim() !== "") {
        alert(`Buscando productos relacionados con: ${searchQuery}`);
        // Aquí puedes implementar la lógica para filtrar y mostrar productos
    } else {
        alert("Por favor, ingresa un término de búsqueda.");
    }
}

// Función para explorar ofertas
function explorarOfertas() {
    alert("Mostrando ofertas del día.");
    // Aquí puedes redirigir a la sección de ofertas o cargar ofertas dinámicamente
}

// Función para manejar el carrito de compras
function agregarAlCarrito(producto) {
    alert(`${producto} ha sido agregado al carrito.`);
    // Aquí puedes implementar la lógica para añadir el producto al carrito
}

function mostrarCarrito() {
    alert("Mostrando el contenido del carrito.");
    // Aquí puedes redirigir a la sección de carrito o mostrarlo dinámicamente
}

// Función para manejar el inicio de sesión
function iniciarSesion(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert(`Iniciando sesión con el correo: ${email}`);
        // Aquí puedes implementar la lógica de autenticación
    } else {
        alert("Por favor, ingresa tus credenciales completas.");
    }
}

// Vincular el formulario de inicio de sesión
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", iniciarSesion);
}
