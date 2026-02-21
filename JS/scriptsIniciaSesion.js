const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Traer usuarios guardados
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];

    
    const userEncontrado = users.find(
        user => user.correo === email && user.password === password
    );

    if (userEncontrado) {

        // Guardar sesión activa
        localStorage.setItem("usuarioActivo", JSON.stringify(userEncontrado));

        alert("Login correcto");
        window.location.href = "Servicios.html";

    } else {
        alert("Credenciales incorrectas");
    }

});