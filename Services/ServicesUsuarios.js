var usuarios = [];



function createUser(nombre, telefono, correo, password) {
    const nuevoUsuario = {
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        password: password
    };

    usuarios.push(nuevoUsuario);
    console.log(nuevoUsuario)
    console.log(usuarios)
    return usuarios;
}

export {createUser}

