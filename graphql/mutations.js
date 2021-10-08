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
      updatedAt
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
      updatedAt
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
  $username: String!, 
  $email: String!, 
  $password: String!
  ) {
    addUser(
    username: $username, 
    email: $email, 
    password: $password
    ) {
      token
      user {
        username
        email
        admin
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
      }
    }
  }
`;
