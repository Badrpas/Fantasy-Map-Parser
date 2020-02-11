const parseBiomes = require('./biomes');

describe('Parse Biomes', () => {
  it('valid input', () => {
    const VALID_ROW = '#53679f,#fbe79f,#b5b887,#d2d082,#c8d68f,#b6d95d,#29bc56,#7dcb35,#409c43,#4b6b32,#96784b,#d5e7eb,#0b9131|0,4,10,22,30,50,100,80,90,12,4,0,12|Marine,Hot desert,Cold desert,Savanna,Grassland,Tropical seasonal forest,Temperate deciduous forest,Tropical rainforest,Temperate rainforest,Taiga,Tundra,Glacier,Wetland';

    const result = parseBiomes(VALID_ROW);

    expect(result).toEqual({
     "color": [
       "#53679f",
       "#fbe79f",
       "#b5b887",
       "#d2d082",
       "#c8d68f",
       "#b6d95d",
       "#29bc56",
       "#7dcb35",
       "#409c43",
       "#4b6b32",
       "#96784b",
       "#d5e7eb",
       "#0b9131",
     ],
     "habitability": [
       "0",
       "4",
       "10",
       "22",
       "30",
       "50",
       "100",
       "80",
       "90",
       "12",
       "4",
       "0",
       "12",
     ],
     "name": [
       "Marine",
       "Hot desert",
       "Cold desert",
       "Savanna",
       "Grassland",
       "Tropical seasonal forest",
       "Temperate deciduous forest",
       "Tropical rainforest",
       "Temperate rainforest",
       "Taiga",
       "Tundra",
       "Glacier",
       "Wetland",
     ],
    });
  });
});