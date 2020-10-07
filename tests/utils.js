const chalk = require('chalk');

module.exports = {
  assertResult: function(assert) {
    return assert ? chalk.green('Pass') : chalk.red('Fail');
  }
}
