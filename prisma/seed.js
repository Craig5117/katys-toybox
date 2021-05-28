const { PrismaClient } = require('@prisma/client');
const characters = require('./characters');
const games  = require('./games');
const elements = require('./elements');
const figures = require('./figures');
const sets = require('./set');
const accessories = require('./accessories');

const prisma = new PrismaClient();

async function main() {
    console.log("Working")
    for (let i = 0; i < games.length; ++i) {
        let game = games[i];
        await prisma.game.create({
            data: game
        })
    }
    for (let i = 0; i < characters.length; ++i) {
        let character = characters[i];
        await prisma.character.create({
            data: character
        })
    }
    for (let i = 0; i < elements.length; ++i) {
        let element = elements[i];
        await prisma.element.create({
            data: element
        })
    }
    for (let i = 0; i < sets.length; ++i) {
        let set = sets[i];
        await prisma.set.create({
            data: set
        })
    }
    for (let i = 0; i < figures.length; ++i) {
        let figure = figures[i];
        await prisma.figure.create({
            data: figure
        })
    }
    for (let i = 0; i < accessories.length; ++i) {
        let accessory = accessories[i];
        await prisma.accessory.create({
            data: accessory
        })
    }
}

main().catch(err => {
    console.log(err);
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect();
})