const starWars = require('../../lib/async/star-wars');

/* These are the functions you have to use */
const { getCharacters, getPlanet } = starWars;

async function buildCharactersInfo() {
  /* Write your solution here */
  const { results } = await getCharacters();

  const charactersArray = results.map(({ homeworld_id, name, height, mass, birth_year, gender }) => ({
    homeworld_id,
    name,
    height,
    mass,
    birth_year,
    gender,
  }));

  const planetsArrayPromises = charactersArray.map(({ homeworld_id }) => getPlanet(homeworld_id).catch(() => ({})));
  const planetsArray = await Promise.all(planetsArrayPromises);

  const planetsData = planetsArray.reduce((acc, { id, name: planet_name, terrain: planet_terrain }) => {
    if (!id) return acc;
    return {
      ...acc,
      [id]: {
        planet_name,
        planet_terrain,
      },
    }
  }, {});

  return charactersArray.map(({ homeworld_id, name, height, mass, birth_year, gender }) => ({
    name,
    height,
    mass,
    birth_year,
    gender,
    ...(planetsData[homeworld_id] || {})
  }));
}

module.exports = {
  buildCharactersInfo,
};
