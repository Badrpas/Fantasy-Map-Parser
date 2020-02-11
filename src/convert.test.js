const fixSvgMultiline = require('./convert');

const TEXT = 
`0
1
2
3
4
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="map" width="1920" height="937" background-color="#000000" filter="url(#filter-sepia)" data-filter="sepia">
other 
svg
lines
kek</svg>
6
7
8
9
`;

describe('Fix SVG multiline', () => {

  it('multiline', () => {
    const lines = TEXT.split('\n');
    
    const newLines = fixSvgMultiline(lines);

    expect(newLines).toEqual(expect.arrayContaining([
      '0', '1', '2', '3', '4',
      expect.stringContaining('</svg>'),
      '6', '7', '8', '9',
    ]));
  });

  it('single line', () => {
    const lines = `a
b
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="map" width="1920" height="937" background-color="#000000" filter="url(#filter-sepia)" data-filter="sepia">qwe</svg>
c
d`.split('\n');
    
    const newLines = fixSvgMultiline(lines);

    expect(newLines).toBe(lines);
    expect(lines).toEqual(expect.arrayContaining([
      'a', 'b', expect.stringContaining('</svg>'),
      'c', 'd'
    ]));
  });

});