const btnLogin = document.getElementById("btnLogin");

const usuarios = [
    { email: "admin@gmail.com", password: "1234" },
    { email: "anthony@gmail.com", password: "1234" }
];

btnLogin.addEventListener("click", function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const usuarioEncontrado = usuarios.find(
        usuario => usuario.email === email && usuario.password === password
    );

    if (usuarioEncontrado) {
        alert("Login correcto");
        window.location.href = "Servicios.html";
    } else {
        alert("Credenciales incorrectas");
    }

});