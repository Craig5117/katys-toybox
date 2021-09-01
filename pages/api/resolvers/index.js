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
        accessories: async () => {
            try {
                const accessories = await prisma.accessory.findMany({
                    include: {
                        gameTitle: true,
                        set: true,
                    }
                });
                return accessories;
            } catch (error) {
                console.log(error);
            }            
        },
    },
    Mutation: {
        updateFigure: async (parent, args, context) => {
            try {
                const figure = await prisma.figure.update({
                    where: {
                      id: args.id,
                    },
                    data: {
                      value: args.value,
                      stock: args.stock,
                      held: args.held,
                      damaged: args.damaged,
                      dmgHeld: args.dmgHeld
                    },
                    include: {
                        character: true,
                        element: true,
                        gameTitle: true,
                        set: true,
                    }
                  });
                  return figure;
            } catch (error) {
                console.log(error)
            }
        }
    }
};

// module.exports = resolvers;