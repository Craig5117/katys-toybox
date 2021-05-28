const giantsAccessories = require("./giantsAccessories");
const spyrosAccessories = require("./spyrosAccessories");
const swapAccessories = require("./swapAccessories");

const accessories = [
    ...spyrosAccessories,
    ...giantsAccessories,
    ...swapAccessories
];

module.exports = accessories;