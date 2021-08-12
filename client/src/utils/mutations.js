import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_COCKTAIL = gql`
  mutation saveCocktail($cocktail: CocktailInput!) {
    saveCocktail(cocktail: $cocktail) {
      cocktail {
        idDrink
        strDrink
        strIngredient1
        strIngredient2
        strIngredient3
        strIngredient4
        strMeasure1
        strMeasure2
        strMeasure3
        strMeasure4
        strInstructions
        strDrinkThumb
      }
    }
  }
`;
