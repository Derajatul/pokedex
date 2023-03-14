const pokeContainer = document.getElementById('poke-container');
const POKEMONS = 100;

const fetchPokemons = async () => {
  for (let i = 1; i <= POKEMONS; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

const createPokemonCard = (pokemon) => {
  const pokemonEL = document.createElement('div');
  pokemonEL.classList.add('pokemon', 'col-md-4', 'my-5');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const baseState = pokemon.stats;
  const height = pokemon.height;
  const weight = pokemon.weight;
  // const type = pokemon.types[0].type.name;
  const pokemonImage = pokemon.sprites.other.home.front_default;
  const HP = baseState[0].base_stat;
  const attack = baseState[1].base_stat;
  const defense = baseState[2].base_stat;
  const speed = baseState[5].base_stat;

  const pokemonCard = `
  <div class="card text-center">
  <img
    data-src="${pokemonImage}"
    class="card-img-top lazyload"
    id="pokemon-image"
    alt="${name}"
  />
  <div class="card-body container">
    <div class="row">
      <div class="col">
        <h2 class="card-title">${name}</h2>
      </div>
    </div>
    <div class="row my-4">
        <div class="col">
            <h5 class="card-text">Height</h5>
            <p class="card-text">${height}</p>
        </div>
        <div class="col">
            <h5 class="card-text">Weight</h5>
            <p class="card-text">${weight}</p>
        </div>
    </div>
    <div class="row my-4 mx-5">
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="${HP}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-danger" style="width: ${HP}%">HP : ${HP}</div>
        </div>
    </div>
    <div class="row my-4 mx-5">
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="${attack}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-warning" style="width: ${attack}%">Attack : ${attack}</div>
        </div>
    </div>
    <div class="row my-4 mx-5">
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="${defense}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-primary" style="width: ${defense}%">Defense : ${defense}</div>
        </div>
    </div>
    <div class="row my-4 mx-5">
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="${speed}" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar bg-info" style="width: ${speed}%">Speed : ${speed}</div>
        </div>
    </div>
  </div>
</div>
  `;

  pokemonEL.innerHTML = pokemonCard;

  pokeContainer.appendChild(pokemonEL);
};

module.exports = fetchPokemons;

