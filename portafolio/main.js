import { proyectos } from './proyectos.js';
import { habilidades } from './habilidades.js';

function cargarProyectos() {
  const container = document.getElementById('proyectos-container');
  if (!container) return;

  proyectos.forEach(proyecto => {
    const proyectoElement = document.createElement('div');
    proyectoElement.className = 'group bg-gray-800 rounded-2xl p-5 flex flex-col justify-between h-64 bg-cover bg-center relative overflow-hidden hover:shadow-xl transition duration-300';
    proyectoElement.style.backgroundImage = `url(${proyecto.imagen})`;
    proyectoElement.innerHTML = `
      <div class="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300"></div>
      <div class=" text-white relative z-10 flex flex-col justify-between h-full">
        <div>
          <h3 class=" text-xl font-bold">${proyecto.titulo}</h3>
          <p class="tex-white text-sm">${proyecto.descripcion}</p>
        </div>
        <a href="${proyecto.enlace}" target="_blank" class="bg-yellow-400 text-white font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300 text-center">
          Ver Proyecto
        </a>
      </div>
    `;
    container.appendChild(proyectoElement);
  });
}

document.addEventListener('DOMContentLoaded', cargarProyectos);


function cargarHabilidades() {
  const container = document.getElementById('habilidades-container');
  if (!container) return;

  habilidades.forEach((habilidad, index) => {
    const habilidadElement = document.createElement('div');
    habilidadElement.className = ` bg- p-4 rounded-full flex flex-col items-center justify-center hover:bg-gray-700 transition duration-300 animate-fade-in`;
    habilidadElement.style.animationDelay = `${index * 100}ms`; // Animación escalonada
    habilidadElement.innerHTML = `
      <img src="${habilidad.icono}" alt="Logo de ${habilidad.nombre}" class="h-8 w-8 object-contain rounded-full">
      <p class="mt-2 text-sm font-semibold">${habilidad.nombre}</p>
      <p class="text-xs text-gray-400">${habilidad.nivel}</p>
    `;
    container.appendChild(habilidadElement);
  });
}

document.addEventListener('DOMContentLoaded', cargarHabilidades);

function inicializarMenuToggle() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', inicializarMenuToggle);


function inicializarFormulario() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const formMessage = document.getElementById('form-message');
    let isValid = true;

    document.querySelectorAll('.error-message').forEach(msg => msg.classList.add('hidden'));

    if (!name.value.trim()) {
      name.nextElementSibling.classList.remove('hidden');
      isValid = false;
    }
    if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) {
      email.nextElementSibling.classList.remove('hidden');
      isValid = false;
    }
    if (!message.value.trim()) {
      message.nextElementSibling.classList.remove('hidden');
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); 
    } else {
      formMessage.classList.remove('hidden');
      setTimeout(() => formMessage.classList.add('hidden'), 5000);
    
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  inicializarFormulario();
});