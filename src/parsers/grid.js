module.exports = function parseGrid(...lines) {

  const grid = JSON.parse(lines[0]);

  grid.cells = {};
  grid.cells.h = lines[1].split(",");
  grid.cells.prec = lines[2].split(",");
  grid.cells.f = lines[3].split(",");
  grid.cells.t = lines[4].split(",");
  grid.cells.temp = lines[5].split(",");

  return grid;
}