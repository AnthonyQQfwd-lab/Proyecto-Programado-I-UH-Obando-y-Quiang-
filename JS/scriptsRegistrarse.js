import { createUser } from "../Services/ServicesUsuarios.js";

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const password = document.getElementById("password").value;

    const usuarioNuevo = createUser(nombre, telefono, correo, password);
    console.log(usuarioNuevo)
    alert("es aqui ")
    alert(usuarioNuevo.nombre);
    console.log(JSON.parse(localStorage.getItem("usuarios")));

    if (usuarioNuevo.success) {
        window.location.href = "login.html";
    }
});

/*
document.getElementById("registerForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!nombre || !telefono || !correo || !password || !confirmPassword) {
        alert("Completa todos los campos");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
    }

    // Obtener usuarios existentes
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si el correo ya existe
    const existe = usuarios.find(u => u.correo === correo);

    if (existe) {
        alert("Este correo ya está registrado");
        return;
    }

    // Crear nuevo usuario
    const nuevoUsuario = {
        nombre,
        telefono,
        correo,
        password
    };

    
            const nuevoUsuario = {
            nombre,
            telefono,
            correo,
            password
        };
     

    usuarios.push(nuevoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Registro exitoso 💪");

    window.location.href = "IniciaSesion.html";

});

*/