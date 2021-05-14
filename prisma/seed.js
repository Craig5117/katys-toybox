const { PrismaClient } = require('@prisma/client');
const characters = require('./characters');
const games  = require('./games');
const elements = require('./elements');

const prisma = new PrismaClient();

async function main() {
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
}

main().catch(err => {
    console.log(err);
    process.exit(1)
}).finally(() => {
    prisma.$disconnect();
})