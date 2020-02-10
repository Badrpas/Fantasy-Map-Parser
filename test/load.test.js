const Parser = require('../src/index.js');
const path = require('path');
const fileName = path.join(__dirname, './data/test.map');

it('test params object', async () => {
  const result = await Parser.loadFileAndParse(fileName);

  expect(result.params).toEqual({
    version: '1.22',
    seed: "234926501",
    date: "2020-2-10",
    description: "File can be loaded in azgaar.github.io/Fantasy-Map-Generator",
    graphHeight: 937,
    graphWidth: 1920,
  });
});



