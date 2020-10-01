const async = require('./');
const people = require('../../data/star-wars/people.json')
const planets = require('../../data/star-wars/planets.json')

const { simulateAsyncPromise } = async;

function getCharacters() {
  return simulateAsyncPromise(people);
}

async function getPlanet(id) {
  const rawPlanets = await simulateAsyncPromise(planets);
  const planet = rawPlanets.results.find(
    ({ id: planetId }) => id === planetId,
  );

  if (!planet) return Promise.reject(`No planet with id ${id}`);

  return planet;
}

module.exports = {
  getCharacters,
  getPlanet,
};
