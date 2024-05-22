window.onload = function () {
    alert('Usuario: nicolas \nContraseña: 123456');
};

function ingreso() {
    var usuario = document.getElementById("Usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if (usuario === "nicolas" && contraseña === "123456") {
        window.location.href = "paginaPrincipal.html";
    } else {
        alert('Usuario y contraseña incorrectos');
    }
}


