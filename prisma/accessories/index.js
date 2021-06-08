const chargersAccessories = require("./chargersAccessories");
const giantsAccessories = require("./giantsAccessories");
const imaginatorsAccessories = require("./imaginatorsAccessories");
const spyrosAccessories = require("./spyrosAccessories");
const swapAccessories = require("./swapAccessories");
const trapAccessories = require("./trapAccessories");

const accessories = [
    ...spyrosAccessories,
    ...giantsAccessories,
    ...swapAccessories,
    ...trapAccessories,
    ...chargersAccessories,
    ...imaginatorsAccessories
];

module.exports = accessories;