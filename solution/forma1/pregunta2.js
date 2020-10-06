const nobel = require('../../lib/async/nobel');

/* These are the functions you have to use */
const { getPrizes, getLaureate } = nobel;

async function buildLaureatesInfo() {
  const { prizes } = await getPrizes();
  const prizesLaureatesArray = prizes.reduce((list, prize) => [
    ...list,
    ...prize.laureates.map((laureate) => ({
      year: prize.year,
      category: prize.category,
      ...laureate,
    })),
  ], []);

  const lauretesArrayPromises = prizesLaureatesArray.map(({ id }) => getLaureate(id).catch(() => ({})));
  const laureatesArray = await Promise.all(lauretesArrayPromises);
  const laureatesData = laureatesArray.reduce((acc, { id, born, bornCountry }) => {
    if (!id) return acc;
    return {
      ...acc,
      [id]: {
        born,
        bornCountry,
      },
    }
  }, {});

  return prizesLaureatesArray.map((laureate) => ({
    ...laureate,
    ...(laureatesData[laureate.id] || {})
  }));
}

module.exports = {
  buildLaureatesInfo,
}
