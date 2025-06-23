
async function obtenerUsuarios() {
    const contenedorUsuarios = document.getElementById('contenedor-usuarios');
    const mensajeError = document.getElementById('mensaje-error');

    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!respuesta.ok) {
            throw new Error('Error al cargar los usuarios. Intentemos más tarde :).');
        }

        const usuarios = await respuesta.json();

        contenedorUsuarios.innerHTML = '';

        usuarios.forEach(usuario => {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta bg-white shadow-lg rounded-lg p-6';
            tarjeta.innerHTML = `
                <h3 class="text-xl font-semibold text-gray-900">${usuario.name}</h3>
                <p class="text-gray-600"><strong>Usuario:</strong> ${usuario.username}</p>
                <p class="text-gray-600"><strong>Correo:</strong> ${usuario.email}</p>
                <p class="text-gray-600"><strong>Empresa:</strong> ${usuario.company.name}</p>
            `;
            contenedorUsuarios.appendChild(tarjeta);
        });
    } catch (error) {
   
        mensajeError.textContent = error.message;
        mensajeError.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', obtenerUsuarios);