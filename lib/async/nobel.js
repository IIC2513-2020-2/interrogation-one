const async = require('./');
const prizes = require('../../data/nobel/prizes.json')
const laureates = require('../../data/nobel/laureates.json')

const { simulateAsyncPromise } = async;

function getPrizes() {
  return simulateAsyncPromise(prizes);
}

async function getLaureate(id) {
  const rawLaureates = await simulateAsyncPromise(laureates);
  const laureate = rawLaureates.laureates.find(
    ({ id: laureateId }) => id === laureateId,
  );

  if (!laureate) return Promise.reject(`No laureate with id ${id}`);

  return laureate;
}

module.exports = {
  getPrizes,
  getLaureate,
};
