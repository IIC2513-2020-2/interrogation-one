const fs = require('fs');
const path = require('path');
const solution = require('../../src/forma1/pregunta3');
const utils = require('../utils');

const FN_NAME = 'renderHttpResponse';
const HTML_FILENAME = 'output.html';

function evaluate(onlyOutput = false) {
  console.log(`${onlyOutput ? '// ' : ''}Pregunta 3\n`);
  const htmlPath = path.join(__dirname, '../..', HTML_FILENAME);
  if (fs.existsSync(htmlPath)) fs.unlinkSync(htmlPath);
  console.log(`${onlyOutput ? '// ' : ''}${FN_NAME}`);
  const index = 0;
  solution[FN_NAME]();
  setTimeout(() => {
    const actual = fs.existsSync(htmlPath);
    if (onlyOutput) {
      console.log(`// Test case ${index + 1}`);
      if (actual) console.log(`// HTML file generated at ${htmlPath}`);
      return;
    }
    console.log(`  Test case ${index + 1}: ${utils.assertResult(actual)}`);
    console.log(`${onlyOutput ? '// ' : ''}--------------------------------\n`);
  }, 1000);
}

module.exports = {
  evaluate,
};
