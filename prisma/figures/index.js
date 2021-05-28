const giantsFigures = require("./giantsFigures");
const spyrosFigures = require("./spyrosFigures");
const swapFigures = require("./swapFigures");
const trapFigures = require("./trapFigures");

const figures = [
    ...spyrosFigures,
    ...giantsFigures,
    ...swapFigures,
    ...trapFigures
];

module.exports = figures;