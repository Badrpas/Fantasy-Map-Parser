const parseParams = require('./params');

describe('Parse Params', () => {
  const VALID_ROW = '1.22|File can be loaded in azgaar.github.io/Fantasy-Map-Generator|2020-2-10|234926501|1920|937';

  it('version', () => {
    const result = parseParams(VALID_ROW);

    expect(result).toEqual(expect.objectContaining({
      version: '1.22'
    }));
  });
  
  it('width and height', () => {
    const result = parseParams(VALID_ROW);

    expect(result).toEqual(expect.objectContaining({
      "graphHeight": 937,
      "graphWidth": 1920,
    }));
  });
});
