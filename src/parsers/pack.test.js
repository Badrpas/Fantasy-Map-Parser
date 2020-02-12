const parsePack = require('./pack');

const TEXT =
`{"line": 0}
{"line": 1}
{"line": 2}
{"line": 3}
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
1,2,3,4,5
{"line": 17}
{"line": 18}
a|b|c|d|e|f/h|k|l|m|n|o
{"line": 20}
`;

const lines = TEXT.split('\n');

describe('Parse Pack', () => {
  it('features', () => {
    const result = parsePack(lines);

    expect(result.features).toEqual({
      line: 0
    });
  });

  it('cultures', () => {
    const result = parsePack(lines);

    expect(result.cultures).toEqual({
      line: 1
    });
  });

  it('states', () => {
    const result = parsePack(lines);

    expect(result.states).toEqual({
      line: 2
    });
  });

  it('burgs', () => {
    const result = parsePack(lines);

    expect(result.burgs).toEqual({
      line: 3
    });
  });

  describe('Cells', () => {
    it('biome', () => {
      const result = parsePack(lines);

      expect(result.cells.biome).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('burg', () => {
      const result = parsePack(lines);

      expect(result.cells.burg).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('conf', () => {
      const result = parsePack(lines);

      expect(result.cells.conf).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('culture', () => {
      const result = parsePack(lines);

      expect(result.cells.culture).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('fl', () => {
      const result = parsePack(lines);

      expect(result.cells.fl).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('pop', () => {
      const result = parsePack(lines);

      expect(result.cells.pop).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('r', () => {
      const result = parsePack(lines);

      expect(result.cells.r).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('road', () => {
      const result = parsePack(lines);

      expect(result.cells.road).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('s', () => {
      const result = parsePack(lines);

      expect(result.cells.s).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('state', () => {
      const result = parsePack(lines);

      expect(result.cells.state).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('religion', () => {
      const result = parsePack(lines);

      expect(result.cells.religion).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('province', () => {
      const result = parsePack(lines);

      expect(result.cells.province).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });

    it('crossroad', () => {
      const result = parsePack(lines);

      expect(result.cells.crossroad).toEqual(
        ["1", "2", "3", "4", "5"]
      );
    });
  });

  it('religions', () => {
    const result = parsePack(lines);

    expect(result.religions).toEqual({
      line: 17
    });
  });

  it('provinces', () => {
    const result = parsePack(lines);

    expect(result.provinces).toEqual({
      line: 18
    });
  });

  it('namesDL and nameBases', () => {
    const result = parsePack(lines);

    expect(result.cells.namesDL).toEqual(
      ["a|b|c|d|e|f", "h|k|l|m|n|o"]
    );

    expect(result.cells.nameBases).toEqual(
      [{
        "b": "f",
        "d": "d",
        "m": "e",
        "max": "c",
        "min": "b",
        "name": "a",
       },
       {
        "b": "o",
        "d": "m",
        "m": "n",
        "max": "l",
        "min": "k",
        "name": "h",
       }]
    );
  });

  it('rivers', () => {
    const result = parsePack(lines);

    expect(result.rivers).toEqual({
      line: 20
    });
  });

});