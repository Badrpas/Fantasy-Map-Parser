const fs = require('fs');
const util = require('util');

const parseParameters = require('./parsers/params');
const parseOptions = require('./parsers/options');
const parseBiomes = require('./parsers/biomes');
const extractSvg = require('./parsers/svg');

const fixSvgMultiline = require('./convert');

/**
 * Parses .map file text into an object
 * @param {String} text map file contents
 */
function parseMapFileString(text) {
  const lines = fixSvgMultiline(text.split(/\r?\n/));

  const [
    paramsRow, optionsRow, coordinatesRow, biomesRow, notesRow,
    svgRow,
  ] = lines;
  const params = parseParameters(paramsRow);
  const options = parseOptions(optionsRow);
  const coordinates =  JSON.parse(coordinatesRow);
  const biomes = parseBiomes(biomesRow);
  const notes = JSON.parse(notesRow);

  return {
    params,
    options,
    coordinates,
    biomes,
    notes,
    svgText: svgRow,
  };
}


const readFile = util.promisify(fs.readFile);
/**
 * Load file by its name and return parsed structure
 * @param {String} fileName 
 */
async function loadFileAndParse(fileName) {
  const text = await readFile(fileName, 'utf8');

  return parseMapFileString(text);
}


module.exports = {
  parseMapFileString,
  loadFileAndParse
};