import prisma from '../../../db';
import {Prisma} from '@prisma/client'
import { hash } from 'bcrypt';
import { UserInputError } from 'apollo-server-errors';

export const resolvers = {
  Query: {
    games: async () => {
      try {
        const games = await prisma.game.findMany({
          include: {
            figures: true,
            sets: true,
            accesories: true,
          },
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
            title: args.title,
          },
          include: {
            figures: true,
            sets: true,
            accesories: true,
          },
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
          },
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
          },
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
            dmgHeld: args.dmgHeld,
          },
          include: {
            character: true,
            element: true,
            gameTitle: true,
            set: true,
          },
        });
        return figure;
      } catch (error) {
        console.log(error);
      }
    },
    updateAcc: async (parent, args, context) => {
      try {
        const accessory = await prisma.accessory.update({
          where: {
            id: args.id,
          },
          data: {
            value: args.value,
            stock: args.stock,
            acceptable: args.acceptable,
            good: args.good,
            excellent: args.excellent,
          },
          include: {
            gameTitle: true,
            set: true,
          },
        });
        return accessory;
      } catch (error) {
        console.log(error);
      }
    },
    addUser: async (parent, args) => {
      
       const hashedPass = await hash(args.password, 10);
       try {
       const user = await prisma.user.create({
        data: {
          username: args.username,
          email: args.email,
          password: hashedPass,
        },
          
        });
        return user;
        // hash(args.password, 10, async function (err, hash) {
        //   const user = await prisma.user.create({
        //     data: {
        //       username: args.username,
        //       email: args.email,
        //       password: hash,
        //     },
        //   });
        //   return user;
        // });
      } catch (e) {
        throw new UserInputError("Prisma Error", { errors: e })
        // if (e) {
        //     console.log(e)
        // //   // The .code property can be accessed in a type-safe manner
        // //   if (e.code === 'P2002') {
        // //     console.log(
        // //       'There is a unique constraint violation, a new user cannot be created with this email'
        // //     );
        // //   }
        // }
        // ;
      }
    },
  },
};

// module.exports = resolvers;
