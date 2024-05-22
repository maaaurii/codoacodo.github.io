function agregarComentario() {
    // Obtener el contenido del comentario del textarea
    var comentario = document.getElementById('comentarioTextarea').value;

    // Verificar si el comentario no está vacío
    if (comentario.trim() !== "") {
        // Crear un nuevo elemento de lista (li)
        var nuevoComentario = document.createElement('li');

        // Agregar el comentario al nuevo elemento de lista
        nuevoComentario.textContent = comentario;

        nuevoComentario.classList.add('comentario');

        // Obtener la lista de comentarios y agregar el nuevo comentario
        var listaComentarios = document.getElementById('comentariosLista');
        listaComentarios.appendChild(nuevoComentario);

        // Limpiar el contenido del textarea después de agregar el comentario
        document.getElementById('comentarioTextarea').value = "";
    }
}

function redirigir(producto, precio, imagen) {
    window.location.href = `formularioCompra.html?producto=${encodeURIComponent(producto)}&precio=${encodeURIComponent(precio)}&imagen=${encodeURIComponent(imagen)}`;
}
