const Parser = require('../src/index.js');
const path = require('path');
const fileName = path.join(__dirname, './data/test.map');

it('test params object', async () => {
  const result = await Parser.loadFileAndParse(fileName);

  expect(result).toEqual({
    params: {
      version: '1.22',
      description: 'File can be loaded in azgaar.github.io/Fantasy-Map-Generator',
      date: '2020-2-10',
      seed: '234926501',
      graphWidth: 1920,
      graphHeight: 937
    },
    options: {
      distanceUnit: 'km',
      distanceScale: '4',
      areaUnit: 'square',
      heightUnit: 'm',
      heightExponent: '1.8',
      temperatureScale: '°C',
      bar: {
        size: '2',
        label: '',
        backOpacity: '0.2',
        backColor: '#ffffff',
        posX: '99',
        posY: '99'
      },
      populationRate: '1000',
      urbanization: '1',
      mapSize: '52',
      latitude: '38',
      temperatureEquator: '30',
      temperaturePole: '-24',
      prec: '172',
      winds: [ 225, 45, 225, 315, 135, 315 ],
      mapName: 'Tazia'
    },
    coordinates: {
      latT: 93.60000000000001,
      latN: 57.168,
      latS: -36.43200000000001,
      lonT: 191.79509071504805,
      lonW: -95.89754535752402,
      lonE: 95.89754535752402
    },
    biomes: {
      color: [
        '#53679f', '#fbe79f',
        '#b5b887', '#d2d082',
        '#c8d68f', '#b6d95d',
        '#29bc56', '#7dcb35',
        '#409c43', '#4b6b32',
        '#96784b', '#d5e7eb',
        '#0b9131'
      ],
      habitability: [
        '0',   '4',  '10',
        '22',  '30', '50',
        '100', '80', '90',
        '12',  '4',  '0',
        '12'
      ],
      name: [
        'Marine',
        'Hot desert',
        'Cold desert',
        'Savanna',
        'Grassland',
        'Tropical seasonal forest',
        'Temperate deciduous forest',
        'Tropical rainforest',
        'Temperate rainforest',
        'Taiga',
        'Tundra',
        'Glacier',
        'Wetland'
      ]
    },
    notes: [
      {
        id: 'markerElement1',
        name: 'Pensey Volcano',
        legend: 'Erupting volcano. Height: 2487 m'
      },
      {
        id: 'markerElement2',
        name: 'Sorough Hot Springs',
        legend: 'A hot springs area. Temperature: 43°C'
      },
      {
        id: 'markerElement3',
        name: 'Schinewelot - silver mining town',
        legend: 'Schinewelot is a mining town of 4112 people just nearby the silver mine'
      },
      {
        id: 'markerElement4',
        name: 'Naloshelona - tin mining town',
        legend: 'Naloshelona is a mining town of 1671 people just nearby the tin mine'
      },
      {
        id: 'markerElement5',
        name: 'Udrauth - salt mining town',
        legend: 'Udrauth is a mining town of 15757 people just nearby the salt mine'
      },
      {
        id: 'markerElement6',
        name: 'Thelt - salt mining town',
        legend: 'Thelt is a mining town of 11006 people just nearby the salt mine'
      },
      {
        id: 'markerElement7',
        name: 'Rochil - salt mining town',
        legend: 'Rochil is a mining town of 44334 people just nearby the salt mine'
      },
      {
        id: 'markerElement8',
        name: 'Ghadez - silver mining town',
        legend: 'Ghadez is a mining town of 3933 people just nearby the silver mine'
      },
      {
        id: 'markerElement9',
        name: 'Chardorlor - iron mining town',
        legend: 'Chardorlor is a mining town of 1717 people just nearby the iron mine'
      },
      {
        id: 'markerElement10',
        name: "Y'athil - copper mining town",
        legend: "Y'athil is a mining town of 6713 people just nearby the copper mine"
      },
      {
        id: 'markerElement11',
        name: 'Wethambe Bridge',
        legend: 'A stone bridge over the Wethambe River near Ymdora'
      },
      {
        id: 'markerElement12',
        name: 'Retheas Bridge',
        legend: 'A stone bridge over the Wethambe River near Retheas'
      },
      {
        id: 'markerElement13',
        name: 'Dishear Bridge',
        legend: 'A stone bridge over the Altondover River near Dishear'
      },
      {
        id: 'markerElement14',
        name: 'The Main Tavern',
        legend: 'A big and famous roadside tavern'
      },
      {
        id: 'markerElement15',
        name: 'Rhairrovarian Lighthouse',
        legend: 'A lighthouse to keep the navigation safe'
      },
      {
        id: 'markerElement16',
        name: 'Cloucrestian Lighthouse',
        legend: 'A lighthouse to keep the navigation safe'
      },
      {
        id: 'markerElement17',
        name: 'Senoranlonese Lighthouse',
        legend: 'A lighthouse to keep the navigation safe'
      },
      {
        id: 'markerElement18',
        name: 'Aloberrian Lighthouse',
        legend: 'A lighthouse to keep the navigation safe'
      },
      {
        id: 'markerElement19',
        name: 'Gualmethyrian Waterfall',
        legend: 'An extremely beautiful waterfall'
      },
      {
        id: 'markerElement20',
        name: "Y'athakanilian Waterfall",
        legend: 'An extremely beautiful waterfall'
      },
      {
        id: 'markerElement21',
        name: 'Be-Ni Waterfall',
        legend: 'An extremely beautiful waterfall'
      },
      {
        id: 'markerElement22',
        name: 'Alalumyerin Battlefield',
        legend: 'A historical battlefield spot. \r\nDate: September 20, 207 Thatc Era'
      },
      {
        id: 'markerElement23',
        name: 'Nythan Battlefield',
        legend: 'A historical battlefield spot. \r\nDate: May 10, 749 Thatc Era'
      },
      {
        id: 'markerElement24',
        name: 'Yagiad Battlefield',
        legend: 'A historical battlefield spot. \r\nDate: April 26, 249 Thatc Era'
      },
      {
        id: 'markerElement25',
        name: "O'tarwin Battlefield",
        legend: 'A historical battlefield spot. \r\nDate: September 24, 792 Thatc Era'
      }
    ]
  });
});



