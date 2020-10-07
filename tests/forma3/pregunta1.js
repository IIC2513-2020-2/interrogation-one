const isEqual = require('lodash/isEqual');
const solution = require('../../src/forma3/pregunta1');
const utils = require('../utils');
const testCases = require('./pregunta1.json');

const FN_NAMES = [
  'getTotalDeaths',
  'transformDeathsByRegion',
  'getRegionWithMostDeaths',
  'getStaticticsByRegion',
];

function evaluate(onlyOutput = false) {
  console.log(`${onlyOutput ? '// ' : ''}Pregunta 1\n`);
  FN_NAMES.forEach((fnName) => {
    console.log(`${onlyOutput ? '// ' : ''}${fnName}`);
    testCases[fnName].forEach((testCase, index) => {
      const actual = solution[fnName](testCase.input);
      if (onlyOutput) {
        console.log(`// Test case ${index + 1}`);
        console.log(actual);
        return;
      }
      let assert = isEqual(actual, testCase.output);
      // The next lines are because of the alternative solution for the first function
      if (fnName === FN_NAMES[0] && !assert) {
        const [expectedFirst, expectedSecond] = testCase.output;
        assert = isEqual(actual, expectedFirst);
        if (!assert) assert = isEqual(actual, expectedSecond);
      }
      console.log(`  Test case ${index + 1}: ${utils.assertResult(assert)}`);
    });
  });
  console.log(`${onlyOutput ? '// ' : ''}--------------------------------\n`);
}

module.exports = {
  evaluate,
};
