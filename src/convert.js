const { SVG_LINE_INDEX } = require('./constants');

module.exports = function fixSvgMultiline (lines) {

  const svgOpenTagIdx = lines.findIndex(line => /<svg .+xmlns=/.test(line));
  const svgCloseTagIdx = lines.findIndex(line => line.includes('</svg>'));

  if (svgOpenTagIdx === svgCloseTagIdx) {
    return lines;
  }

  if (svgOpenTagIdx !== SVG_LINE_INDEX) {
    console.warn('SVG_LINE_INDEX !== actual SVG open tag!');    
  }

  const svgLines = lines.slice(SVG_LINE_INDEX, svgCloseTagIdx + 1);
  
  // Remove all the SVG lines except first one
  lines.splice(SVG_LINE_INDEX + 1, svgLines.length - 1);
  
  lines[SVG_LINE_INDEX] = svgLines.join('');

  return lines;
}