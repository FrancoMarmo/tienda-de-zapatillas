const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu-visible")
});


//PRODUCTOS//

const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
    const nuevaZapatilla = document.createElement("div");
    nuevaZapatilla.classList = "tarjeta-producto";
    nuevaZapatilla.innerHTML = `
    <img src="./img/${producto.id}.jpg">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <button>Agregar al carrito</button>
    `
    contenedorTarjetas.appendChild(nuevaZapatilla);
    nuevaZapatilla.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto));
    });
}


crearTarjetasProductosInicio(zapatillas);