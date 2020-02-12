module.exports = function parsePack(lines) {
  const pack = {}; 

  pack.features = JSON.parse(lines[0]);
  pack.cultures = JSON.parse(lines[1]);
  pack.states = JSON.parse(lines[2]);
  pack.burgs = JSON.parse(lines[3]);
  pack.religions = lines[17] ? JSON.parse(lines[17]) : [{i: 0, name: "No religion"}];
  pack.provinces = lines[18] ? JSON.parse(lines[18]) : [0];
  pack.rivers = lines[20] ? JSON.parse(lines[20]) : [];

  pack.cells = {};
  pack.cells.biome = lines[4].split(",");
  pack.cells.burg = lines[5].split(",");
  pack.cells.conf = lines[6].split(",");
  pack.cells.culture = lines[7].split(",");
  pack.cells.fl = lines[8].split(",");
  pack.cells.pop = lines[9].split(",");
  pack.cells.r = lines[10].split(",");
  pack.cells.road = lines[11].split(",");
  pack.cells.s = lines[12].split(",");
  pack.cells.state = lines[13].split(",");
  pack.cells.religion = lines[14].split(",");
  pack.cells.province = lines[15].split(",");
  pack.cells.crossroad = lines[16].split(",");

  if (lines[19]) {
    pack.cells.namesDL = lines[19].split("/");
    const nameBases = [];
    pack.cells.namesDL.forEach((d, i) => {
      const e = d.split("|");
      if (!e.length) return;
      const b = e[5].split(",").length > 2 || !nameBases[i] ? e[5] : nameBases[i].b;
      nameBases[i] = {name:e[0], min:e[1], max:e[2], d:e[3], m:e[4], b};
    });
    pack.cells.nameBases = nameBases;
  }

  return pack;
}