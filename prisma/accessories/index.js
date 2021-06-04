const chargersAccessories = require("./chargersAccessories");
const giantsAccessories = require("./giantsAccessories");
const spyrosAccessories = require("./spyrosAccessories");
const swapAccessories = require("./swapAccessories");
const trapAccessories = require("./trapAccessories");

const accessories = [
    ...spyrosAccessories,
    ...giantsAccessories,
    ...swapAccessories,
    ...trapAccessories,
    ...chargersAccessories,
];

module.exports = accessories;