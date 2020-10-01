const cases = require('../../data/covid/cases.json');

module.exports = {
  cases: cases.results[0].series[0],
};
