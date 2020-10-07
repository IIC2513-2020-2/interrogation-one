const [solutionForm, testType] = process.argv.slice(2);

solutionForms = [
  'forma1',
  'forma2',
  'forma3',
];

if (!solutionForms.includes(solutionForm)) {
  console.error('You need to specify an option between: forma1, forma2, forma3');
  process.exit(1);
}

const questions = require(`./${solutionForm}`);

async function runTests(questions, onlyOutput) {
  const [pregunta1, pregunta2, pregunta3] = questions;

  pregunta1.evaluate(onlyOutput);
  await pregunta2.evaluate(onlyOutput);
  pregunta3.evaluate(onlyOutput);
}

runTests(questions, testType === 'onlyOutput');
