import { gql } from '@apollo/client';

export const QUERY_FIGURES = gql`
  {
    figures {
      id
      figName
      character {
        name
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

// export const QUERY_GAME = gql`
//     query($gameTitle: String!){
//   game(title: $gameTitle) {
//     id
//     title
//     sets {
//       id
//       setName
//     }
//     figures {
//       id
//       figName
//       stock
//     }
//     accesories {
//       id
//       accName
//     }
// 	}
// }
// `;
