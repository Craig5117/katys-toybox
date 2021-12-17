import { gql } from '@apollo/client';

export const QUERY_FIGURES = gql`
  {
    figures {
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
      type
      variation
      img
      rare
      value
      stock
      damaged
      held
      dmgHeld
      updatedAt
    }
  }
`;

export const QUERY_ACCESSORIES = gql`
  {
    accessories {
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
      updatedAt
    }
  }
`;

export const QUERY_GAMES = gql`
  {
    games {
      id
      title
      sets {
        id
        setName
      }
      figures {
        id
        figName
        stock
      }
      accesories {
        id
        accName
      }
    }
  }
`;