const cases = require('../../data/covid/cases.json');
const pcr = require('../../data/covid/pcr.json');
const deaths = require('../../data/covid/deaths.json');

module.exports = {
  cases: cases.results[0].series[0],
  pcr: pcr.results[0].series[0],
  deaths: deaths.results[0].series[0],
};
