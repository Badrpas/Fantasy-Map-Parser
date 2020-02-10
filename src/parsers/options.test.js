const parseOptions = require('./options');

describe('Parse Options', () => {
  it('valid input', () => {
    const VALID_ROW = 'km|4|square|m|1.8|°C|2||0.2|#ffffff|99|99|1000|1|52|38|30|-24|172|[225,45,225,315,135,315]|Tazia';

    const result = parseOptions(VALID_ROW);

    expect(result).toEqual({
      "areaUnit": "square",
      "bar": {
        "backColor": "#ffffff",
        "backOpacity": "0.2",
        "label": "",
        "posX": "99",
        "posY": "99",
        "size": "2",
      },
      "distanceScale": "4",
      "distanceUnit": "km",
      "heightExponent": "1.8",
      "heightUnit": "m",
      "latitude": "38",
      "mapName": "Tazia",
      "mapSize": "52",
      "populationRate": "1000",
      "prec": "172",
      "temperatureEquator": "30",
      "temperaturePole": "-24",
      "temperatureScale": "°C",
      "urbanization": "1",
      "winds": [
        225,
        45,
        225,
        315,
        135,
        315,
      ],
    });
  });
  it('valid input 2', () => {
    const VALID_ROW = 'km|4|square|m|1.8|°C|2||0.2|#ffffff|99|99|1000|1|52|38|30|-24|172|[225,45,225,315,135,315]|Kekerdz';

    const result = parseOptions(VALID_ROW);

    expect(result).toEqual({
      "areaUnit": "square",
      "bar": {
        "backColor": "#ffffff",
        "backOpacity": "0.2",
        "label": "",
        "posX": "99",
        "posY": "99",
        "size": "2",
      },
      "distanceScale": "4",
      "distanceUnit": "km",
      "heightExponent": "1.8",
      "heightUnit": "m",
      "latitude": "38",
      "mapName": "Kekerdz",
      "mapSize": "52",
      "populationRate": "1000",
      "prec": "172",
      "temperatureEquator": "30",
      "temperaturePole": "-24",
      "temperatureScale": "°C",
      "urbanization": "1",
      "winds": [
        225,
        45,
        225,
        315,
        135,
        315,
      ],
    });
  });
});