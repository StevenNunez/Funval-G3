
// Lista inicial de usuarios
let usuarios = [
    { id: 1, nombre: "Ana", rol: "admin", edad: 28 },
    { id: 2, nombre: "Luis", rol: "editor", edad: 34 },
    { id: 3, nombre: "Carla", rol: "viewer", edad: 22 },
];

// Función para mostrar usuarios en la tabla
const mostrarUsuarios = ([...lista]) => {
    const tbody = document.getElementById('tablaUsuarios');
    tbody.innerHTML = ''; // Limpiar tabla
    lista.forEach(({ id, nombre, rol, edad }) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="border border-gray-300 px-4 py-2">${id}</td>
            <td class="border border-gray-300 px-4 py-2">${nombre}</td>
            <td class="border border-gray-300 px-4 py-2">${rol}</td>
            <td class="border border-gray-300 px-4 py-2">${edad}</td>
            <td class="border border-gray-300 px-4 py-2">
                <button data-id="${id}" class="actualizarBtn bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Actualizar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Añadir eventos a botones de actualizar
    document.querySelectorAll('.actualizarBtn').forEach(btn => {
        btn.addEventListener('click', ({ target }) => {
            const id = parseInt(target.dataset.id);
            mostrarFormularioActualizar(id);
        });
    });
};

// Función para agregar un nuevo usuario
const agregarUsuario = (lista, nuevo) => {
    return [...lista, { ...nuevo, id: lista.length + 1 }];
};

// Función para actualizar un usuario por ID
const actualizarUsuario = (lista, id, nuevosDatos) => {
    return lista.map(({ ...usuario }) => 
        usuario.id === id 
            ? { ...usuario, ...nuevosDatos }
            : usuario
    );
};

// Mostrar formulario de actualización con datos del usuario
const mostrarFormularioActualizar = (id) => {
    const { nombre, rol, edad } = usuarios.find(u => u.id === id);
    document.getElementById('idActualizar').value = id;
    document.getElementById('nombreActualizar').value = nombre;
    document.getElementById('rolActualizar').value = rol;
    document.getElementById('edadActualizar').value = edad;
    document.getElementById('formActualizar').classList.remove('hidden');
};

// Inicializar tabla
mostrarUsuarios(usuarios);

// Evento para agregar usuario
document.getElementById('agregarBtn').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const rol = document.getElementById('rol').value;
    const edad = parseInt(document.getElementById('edad').value);

    if (nombre && rol && edad) {
        const nuevoUsuario = { nombre, rol, edad };
        usuarios = agregarUsuario(usuarios, nuevoUsuario);
        mostrarUsuarios(usuarios);
        // Limpiar formulario
        document.getElementById('nombre').value = '';
        document.getElementById('rol').value = 'admin';
        document.getElementById('edad').value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Evento para guardar actualización
document.getElementById('guardarActualizarBtn').addEventListener('click', () => {
    const id = parseInt(document.getElementById('idActualizar').value);
    const nombre = document.getElementById('nombreActualizar').value;
    const rol = document.getElementById('rolActualizar').value;
    const edad = parseInt(document.getElementById('edadActualizar').value);

    if (nombre && rol && edad) {
        const nuevosDatos = { nombre, rol, edad };
        usuarios = actualizarUsuario(usuarios, id, nuevosDatos);
        mostrarUsuarios(usuarios);
        document.getElementById('formActualizar').classList.add('hidden');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Evento para cancelar actualización
document.getElementById('cancelarActualizarBtn').addEventListener('click', () => {
    document.getElementById('formActualizar').classList.add('hidden');
});