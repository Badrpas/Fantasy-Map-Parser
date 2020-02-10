module.exports = function parseParameters(paramsRow) {
  const [
    version, description, date, 
    seed, w, h
  ] = paramsRow.split("|");

  return {
    version,
    description,
    date,
    seed,
    graphWidth: +w,
    graphHeight: +h,
  };
}