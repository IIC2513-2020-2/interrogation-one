const async = require('./');
const pokedex = require('../../data/pokemon/pokedex.json')
const pokemons = require('../../data/pokemon/pokemons.json')

const { simulateAsyncPromise } = async;

function getKantoPokedex() {
  return simulateAsyncPromise(pokedex);
}

async function getPokemon(name) {
  const rawPokemons = await simulateAsyncPromise(pokemons);
  const pokemon = rawPokemons.pokemon.find(
    ({ name: pokemonName }) => name.toLowerCase() === pokemonName.toLowerCase(),
  );

  if (!pokemon) return Promise.reject(`No pokemon with name ${name}`);

  return pokemon;
}

module.exports = {
  getKantoPokedex,
  getPokemon,
};
