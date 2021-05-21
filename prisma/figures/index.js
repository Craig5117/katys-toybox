const giantsFigures = require("./giantsFigures");
const spyrosFigures = require("./spyrosFigures");
const swapFigures = require("./swapFigures");

const figures = [
    ...spyrosFigures,
    ...giantsFigures,
    ...swapFigures
];

module.exports = figures;