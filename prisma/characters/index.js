const chargersCharacters = require('./chargersCharacters');
const giantsCharacters = require('./giantsCharacters');
const imaginatorsCharacters = require('./imaginatorsCharacters');
const spyrosCharacters = require('./spyrosCharacters');
const swapCharacters = require('./swapCharacters');
const trapCharacters = require('./trapCharacters');

const characters = [
    ...spyrosCharacters,
    ...giantsCharacters,
    ...swapCharacters,
    ...trapCharacters,
    ...chargersCharacters,
    ...imaginatorsCharacters
];

module.exports = characters;