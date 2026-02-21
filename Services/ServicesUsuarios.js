const usuarios = [];



function createUser(nombre, telefono, correo, password) {
    const nuevoUsuario = {
        nombre,
        telefono,
        correo,
        password
    };

    usuarios.push(nuevoUsuario);
    saveUsuarios(usuarios)
    return usuarios;
}

export {createUser}

// ==========================
// usuarios.js
// ==========================

// Obtener usuarios guardados o crear arreglo vacío
function getUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios")) || [];
}

// Guardar usuarios en localStorage
function saveUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

/*
// ==========================
// CREATE USER
// ==========================
export function createUser(nombre, telefono, correo, password) {

    let usuarios = getUsuarios();

    // Verificar si el correo ya existe
    const existe = usuarios.find(user => user.correo === correo);

    if (existe) {
        return { success: false, message: "El correo ya está registrado" };
    }

    const nuevoUsuario = {
        id: Date.now(),
        nombre,
        telefono,
        correo,
        password
    };

    usuarios.push(nuevoUsuario);
    saveUsuarios(usuarios);

    return { success: true, message: "Usuario creado correctamente", user: nuevoUsuario };
    console.log(nuevoUsuario)
}
*/
// ==========================
// LOGIN
// ==========================
export function loginUser(correo, password) {

    const usuarios = getUsuarios();

    const usuario = usuarios.find(user =>
        user.correo === correo && user.password === password
    );

    if (!usuario) {
        return { success: false, message: "Credenciales incorrectas" };
    }

    localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

    return { success: true, message: "Login correcto", user: usuario };
}

// ==========================
// LOGOUT
// ==========================
export function logoutUser() {
    localStorage.removeItem("usuarioActivo");
}