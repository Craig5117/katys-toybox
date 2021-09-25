import { gql } from "apollo-server-micro";

export const typeDefs = gql`
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
        updatedAt: String
    }

    type Accessory {
        id: ID
        accName: String
        gameTitle: Game
        set: Set
        modelNo: String
        excellent: Int
        good: Int
        acceptable: Int
        value: Int
        stock: Int
        updatedAt: String
    }

    type User {
        id: ID
        username: String!
        email: String!
        password: String!
        admin: Boolean
    }

    type Query {
        games: [Game]
        game (title: String!): Game
        characters: [Character]
        elements: [Element]
        sets: [Set]
        figures: [Figure]
        accessories: [Accessory]
    }

    type Mutation {
        addFigure(figName: String!, characterId: Int!, elementId: Int, gameId: Int, setId: Int, type: String, variation: String, img: String, rare: Boolean, value: Int, stock: Int, damaged: Int, held: Int, dmgHeld: Int): Figure
        updateFigure(id: ID!, value: Int, stock: Int, held: Int, damaged: Int, dmgHeld: Int): Figure
        updateAcc(id: ID!, value: Int, stock: Int, acceptable: Int, good: Int, excellent: Int): Accessory
        addUser(username: String!, email: String!, password: String!): User
        # updateAccValue(id: ID!, value: Int): Accessory
        # updateAccStock(id: ID!, stock: Int): Accessory
        # updateAccExcellent(id: ID!, excellent: Int): Accessory
        # updateAccGood(id: ID!, good: Int): Accessory
        # updateAccAcceptable(id: ID!, acceptable: Int): Accessory
    }
`;

// module.exports = typeDefs;