const postsResponses = require('../../data/http/posts.json');
const codes = require('../../lib/http/codes');
const render = require('../../lib/render');

function renderHttpResponse() {
  /* Write your solution here */

  /* Modify the object passed to render */
  render({ postsResponses, codes });
}

module.exports = {
  renderHttpResponse,
}
