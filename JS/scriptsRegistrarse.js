const btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click", function () {

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const gmail = document.getElementById("gmail").value;

    if (nombre === "" || telefono === "" || gmail === "") {
        alert("Por favor completa todos los campos");
        return;
    }

    alert("Registro exitoso 💪");

    // Aquí normalmente guardarías en base de datos

    window.location.href = "IniciaSesion.html";
});