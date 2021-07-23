import { gql, ApolloServer  } from "apollo-server-micro";
import prisma from '../../db';

const typeDefs = gql`
    type Game {
        id: ID
        title: String
        figures: [Figure]
        accesories: [Accessory]
        sets: [Set]
    }
   
    type Character {
        id: ID
        name: String
        gender: String
        figures: [Figure] 
    }

    type Element {
        id: ID
        element: String
        figures: [Figure]
    }

    type Set {
        id: ID
        setName: String
        figures: [Figure]
        accesories: [Accessory]
        gameTitle: Game
    }

    type Figure {
        id: ID
        figName: String
        character: Character
        element: Element
        gameTitle: Game
        set: Set
        type: String
        variation: String
        img: String
        rare: Boolean
        value: Int
        stock: Int
        damaged: Int
        held: Int
        dmgHeld: Int
    }

    type Accessory {
        id: String
        accName: String
        gameTitle: Game
        set: Set
        modelNo: String
        excellent: Int
        good: Int
        acceptable: Int
        value: Int
        stock: Int
    }

    type Query {
        
    }
`;

const resolvers = {};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };

export default handler;