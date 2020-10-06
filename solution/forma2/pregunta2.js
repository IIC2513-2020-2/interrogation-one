const pokemon = require('../../lib/async/pokemon');

/* These are the functions you have to use */
const { getKantoPokedex, getPokemon } = pokemon;

async function buildPokedexInfo() {
  /* Write your solution here */
  const { name: region, pokemon_entries } = await getKantoPokedex();

  const pokedexPokemonsArray = pokemon_entries.map((entry) => ({
    region,
    name: entry.pokemon_species.name,
  }));

  const pokemonsArrayPromises = pokedexPokemonsArray.map(({ name }) => getPokemon(name).catch(() => ({})));
  const pokemonsArray = await Promise.all(pokemonsArrayPromises);

  const pokemonsData = pokemonsArray.reduce((acc, { id, name, type, spawn_time }) => {
    if (!name) return acc;
    return {
      ...acc,
      [name.toLowerCase()]: {
        id,
        type,
        spawn_time,
      },
    }
  }, {});

  return pokedexPokemonsArray.map((pokemon) => ({
    ...pokemon,
    ...(pokemonsData[pokemon.name] || {})
  }));
}

module.exports = {
  buildPokedexInfo,
};
