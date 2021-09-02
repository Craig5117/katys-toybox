import { gql } from '@apollo/client';

export const UPDATE_FIGURE = gql`
  mutation updateFigure(
    $id: ID!
    $value: Int
    $stock: Int
    $held: Int
    $damaged: Int
    $dmgHeld: Int
  ) {
    updateFigure(
      id: $id
      value: $value
      stock: $stock
      held: $held
      damaged: $damaged
      dmgHeld: $dmgHeld
    ) {
      id
      figName
      character {
        name
        gender
      }
      element {
        element
      }
      gameTitle {
        title
      }
      set {
        setName
      }
      variation
      img
      rare
      value
      stock
      damaged
      held
      dmgHeld
    }
  }
`;

export const UPDATE_ACCESSORY = gql`
  mutation updateAcc(
    $id: ID!
    $value: Int
    $stock: Int
    $acceptable: Int
    $good: Int
    $excellent: Int
  ) {
    updateAcc(
      id: $id
      value: $value
      stock: $stock
      acceptable: $acceptable
      good: $good
      excellent: $excellent
    ) {
      id
      accName
      gameTitle {
        title
      }
      set {
        setName
      }
      modelNo
      excellent
      good
      acceptable      
      value
      stock
    }
  }
`;
