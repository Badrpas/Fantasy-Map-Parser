const Parser = require('.');
const path = require('path');
const fileName = path.join(__dirname, './test/data/test-converted.map');

Parser.loadFileAndParse(fileName).then(result => {
  require('fs').writeFileSync(path.join(__dirname, './temp-map.json'), JSON.stringify(result, 2, 2));
});
