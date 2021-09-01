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
        # updateFigureValue(id: ID!, value: Int): Figure
        # updateFigureStock(id: ID!, stock: Int): Figure
        # updateFigureHeld(id: ID!, held: Int): Figure
        # updateFigureDmg(id: ID!, damaged: Int): Figure
        # updateFigureDmgHeld(id: ID!, dmgHeld: Int): Figure
        updateAccValue(id: ID!, value: Int): Accessory
        updateAccStock(id: ID!, stock: Int): Accessory
        updateAccExcellent(id: ID!, excellent: Int): Accessory
        updateAccGood(id: ID!, good: Int): Accessory
        updateAccAcceptable(id: ID!, acceptable: Int): Accessory
    }
`;

// module.exports = typeDefs;