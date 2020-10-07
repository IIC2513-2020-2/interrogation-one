const isEqual = require('lodash/isEqual');
const solution = require('../../src/forma2/pregunta1');
const utils = require('../utils');
const testCases = require('./pregunta1.json');

const FN_NAMES = [
  'getOldestPcrs',
  'transformPcrsByRegion',
  'getRegionWithLeastPcrs',
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
      const assert = isEqual(actual, testCase.output);
      console.log(`  Test case ${index + 1}: ${utils.assertResult(assert)}`);
    });
  });
  console.log(`${onlyOutput ? '// ' : ''}--------------------------------\n`);
}

module.exports = {
  evaluate,
};
