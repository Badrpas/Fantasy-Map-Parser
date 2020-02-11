module.exports = function parseBiomes(biomesRow) {
  const [color, habitability, name] = biomesRow.split("|");

  return {
    color: color.split(','),
    habitability: habitability.split(','),
    name: name.split(','),
  };
}