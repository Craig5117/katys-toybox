import prisma from '../../../db';

export const resolvers = {
    Query: {
        games: async () => {
            try {
                const games = await prisma.game.findMany({
                    include: {
                        figures: true,
                        sets: true,
                        accesories: true,
                    }
                });
                return games;
            } catch (error) {
                console.log(error);
            }            
        },
        game: async (parent, args) => {
            try {
                const game = await prisma.game.findUnique({
                    where: {
                        title: args.title
                    },
                    include: {
                        figures: true,
                        sets: true,
                        accesories: true,
                    }
                });
                return game;
            } catch (error) {
                console.log(error);
            }            
        },
        figures: async () => {
            try {
                const figures = await prisma.figure.findMany({
                    include: {
                        character: true,
                        element: true,
                        gameTitle: true,
                        set: true,
                    }
                });
                return figures;
            } catch (error) {
                console.log(error);
            }            
        },
    }
};

// module.exports = resolvers;