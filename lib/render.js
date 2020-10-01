const fsPromises = require('fs').promises;
const path = require('path');
const ejs = require('ejs');

function render(data = {}) {
  const templatesPath = path.join(__dirname, '..', 'src/templates');
  return ejs
    .renderFile(`${templatesPath}/index.html.ejs`, data, { async: true})
    .then((str) => fsPromises.writeFile(`output.html`, str))
    .catch(console.log);
}

module.exports = render;
