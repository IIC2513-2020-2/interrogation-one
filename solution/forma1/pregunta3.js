const todosResponse = require('../../data/http/todos.json');
const codes = require('../../lib/http/codes');
const render = require('../../lib/render');

function renderHttpResponse() {
  /* Write your solution here */
  const { status, headers, body } = todosResponse;

  /* Modify the object passed to render */
  render({ status, headers, body, codes });
}

module.exports = {
  renderHttpResponse,
}
