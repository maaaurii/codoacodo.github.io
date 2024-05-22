document.addEventListener('DOMContentLoaded', function () {
    // Obtener parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const producto = urlParams.get('producto');
    const precio = urlParams.get('precio');
    const imagen = urlParams.get('imagen');

    // Mostrar la información del producto en el formulario
    const infoProducto = document.getElementById('info-producto');
    infoProducto.innerHTML = `<p class="letras" id="producto">Producto: ${producto}</p><p class="letras" id="precio">Precio: ${precio} soles</p>`;
    // Mostrar la imagen del producto
    const imagenProducto = document.getElementById('imagen-producto');
    imagenProducto.src = imagen;
});

/*function mostraralerta() {
    
    var productoTexto = document.getElementById('producto').textContent;
    var precioTexto = document.getElementById('precio').textContent;

    var producto = productoTexto.split(': ')[1];
    var precio = parseInt(precioTexto.split(': ')[1]);
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var nombre = document.getElementById("nombre").value;
    var calle = document.getElementById("calle").value;
    var numero = document.getElementById("numero").value;
    var localidad = document.getElementById("localidad").value;
    var cp = document.getElementById("cp").value;



    alert("Producto: "+ producto + "\nCantidad: "+ cantidad + "\nPrecio: "+ (precio*cantidad) + "\nDatos del Cliente \nApellido y Nombre: "+ nombre +"\nDireccion: \nCalle:"+ calle + "\nNumero: "+ numero + "\nLocalidad:" + localidad + "\nCP: " + cp);

}*/

function mostraralerta(event) {
    // Evita que el formulario se envíe
    event.preventDefault();

    var productoTexto = document.getElementById('producto').textContent;
    var precioTexto = document.getElementById('precio').textContent;

    var producto = productoTexto.split(': ')[1];
    var precio = parseInt(precioTexto.split(': ')[1]);
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var nombre = document.getElementById("nombre").value.trim();
    var calle = document.getElementById("calle").value.trim();
    var numero = document.getElementById("numero").value.trim();
    var localidad = document.getElementById("localidad").value.trim();
    var cp = document.getElementById("cp").value.trim();

    // Verifica que todos los campos estén completos
    if (!producto || !precio || !cantidad || !nombre || !calle || !numero || !localidad || !cp) {
        alert("Falta completar campos");
        return;
    }

    alert("Producto: " + producto + "\nCantidad: " + cantidad + "\nPrecio: " + (precio * cantidad) + 
          "\nDatos del Cliente\nApellido y Nombre: " + nombre + "\nDireccion:\nCalle: " + calle + 
          "\nNumero: " + numero + "\nLocalidad: " + localidad + "\nCP: " + cp);
}

// Añade un evento al formulario para evitar el envío por defecto
document.querySelector('form').addEventListener('submit', mostraralerta);
