const isEqual = require('lodash/isEqual');
const pickBy = require('lodash/pickBy');
const identity = require('lodash/identity');
const solution = require('../../solution/forma2/pregunta2');
const utils = require('../utils');
const testCases = require('./pregunta2.json');

const FN_NAME = 'buildPokedexInfo';

async function evaluate(onlyOutput = false) {
  console.log(`${onlyOutput ? '// ' : ''}Pregunta 2\n`);  
  console.log(`${onlyOutput ? '// ' : ''}${FN_NAME}`);
  const index = 0;
  const [testCase] = testCases[FN_NAME];
  const actual = await solution[FN_NAME](testCase.input);
  if (onlyOutput) {
    console.log(`// Test case ${index + 1}`);
    console.log(actual);
    return;
  }
  const assert = isEqual((actual || []).map((item) => pickBy(item, identity)), testCase.output);
  console.log(`  Test case ${index + 1}: ${utils.assertResult(assert)}`);
  console.log(`${onlyOutput ? '// ' : ''}--------------------------------\n`);
}

module.exports = {
  evaluate,
};
