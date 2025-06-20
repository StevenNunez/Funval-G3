
const contenedorCards = document.getElementById('contenedor-cards');
const btnAnterior = document.getElementById('ant');
const btnSiguiente = document.getElementById('sig');
const botonDrop = document.getElementById('boton-drop');
const dropdown = document.getElementById('dropdown');


let currentPage = 1;
const charactersPerPage = 6;
const baseUrl = 'https://rickandmortyapi.com/api/character';


async function fetchCharacters(page) {
  try {
    const response = await axios.get(`${baseUrl}?page=${page}`);
    const { results, info } = response.data;

   
    const limitedResults = results.slice(0, charactersPerPage);

  
    renderCards(limitedResults);


    updatePagination(info);
  } catch (error) {
    console.error('Error fetching characters:', error);
    contenedorCards.innerHTML = '<p class="text-center text-red-500">Error al cargar los personajes.</p>';
  }
}


function renderCards(characters) {
  contenedorCards.innerHTML = ''; 
  characters.forEach(character => {
    const card = document.createElement('div');
    card.classList.add('card', 'flex', 'flex-col', 'items-center', 'justify-center');

    card.innerHTML = `
      <div id="cont-img" class="bg-gray-100 rounded-xl">
        <img src="${character.image}" alt="${character.name}" class="w-32 h-32 object-cover rounded-xl" />
      </div>
      <div id="cont-pkm" class="flex flex-col justify-start w-full p-2 gap-1">
        <h3 class="text-gray-500 font-semibold">#${character.id}</h3>
        <h2 class="text-2xl">${character.name}</h2>
        <div id="tipos" class="flex gap-2">
          <p class="bg-blue-600 text-white px-4 rounded-xs text-center">${character.species}</p>
          <p class="bg-green-600 text-white px-4 rounded-xs text-center">${character.status}</p>
        </div>
      </div>
    `;

    contenedorCards.appendChild(card);
  });
}


function updatePagination(info) {
  btnAnterior.disabled = !info.prev;
  btnSiguiente.disabled = !info.next;
}


btnAnterior.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage);
  }
});

btnSiguiente.addEventListener('click', () => {
  currentPage++;
  fetchCharacters(currentPage);
});


botonDrop.addEventListener('click', () => {
  dropdown.classList.toggle('hidden');
});


fetchCharacters(currentPage);