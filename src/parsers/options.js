module.exports = function parseOptions(optionsRow) {
  const options = optionsRow.split("|");

  return {
    distanceUnit: options[0],
    distanceScale: options[1], // ) distanceScaleInput.value = distanceScaleOutput.value = options[1];
    areaUnit: options[2], // ) areaUnit.value = options[2];
    heightUnit: options[3], // ) applyOption(heightUnit, options[3]);
    heightExponent: options[4], // ) heightExponentInput.value = heightExponentOutput.value = options[4];
    temperatureScale: options[5], // ) temperatureScale.value = options[5];
    bar: {
      size: options[6], // ) barSize.value = barSizeOutput.value = options[6];
      label: options[7], //  !== undefined) barLabel.value = options[7];
      backOpacity: options[8], //  !== undefined) barBackOpacity.value = options[8];
      backColor: options[9], // ) barBackColor.value = options[9];
      posX: options[10], // ) barPosX.value = options[10];
      posY: options[11], // ) barPosY.value = options[11];
    },
    populationRate: options[12], // ) populationRate.value = populationRateOutput.value = options[12];
    urbanization: options[13], // ) urbanization.value = urbanizationOutput.value = options[13];
    mapSize: options[14], // ) mapSizeInput.value = mapSizeOutput.value = Math.max(Math.min(options[14], 100), 1);
    latitude: options[15], // ) latitudeInput.value = latitudeOutput.value = Math.max(Math.min(options[15], 100), 0);
    temperatureEquator: options[16], // ) temperatureEquatorInput.value = temperatureEquatorOutput.value = options[16];
    temperaturePole: options[17], // ) temperaturePoleInput.value = temperaturePoleOutput.value = options[17];
    prec: options[18], // ) precInput.value = precOutput.value = options[18];
    winds: JSON.parse(options[19]), // ) winds = JSON.parse(options[19]);
    mapName: options[20], // ) mapName.value = options[20];
  };
}