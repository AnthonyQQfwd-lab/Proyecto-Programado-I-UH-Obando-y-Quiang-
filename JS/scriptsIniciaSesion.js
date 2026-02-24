const btnLogin = document.getElementById("btnLogin");
const correo = document.getElementById("email");
const password = document.getElementById("password");
btnLogin.addEventListener("click", function () {


    const correoValue = correo.value.toLowerCase().trim(); 
    const passwordValue = password.value.trim();
    
    console.log(correoValue)
    console.log(passwordValue)
    // Traer usuarios guardados
    const users = JSON.parse(localStorage.getItem("usuariosDB")) || [];

 
    const usuarioEncontrado = users.find(
        user => user.correo === correoValue  && user.password === passwordValue
    );
    console.log(usuarioEncontrado)
    if (usuarioEncontrado) {

        // Guardar sesión activa
        localStorage.setItem("usuarioActivo", JSON.stringify(usuarioEncontrado));

        alert("Login correcto");
        window.location.href = "Servicios.html";

    } else {
        alert("Credenciales incorrectas");
    }

});