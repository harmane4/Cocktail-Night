import { gql } from "@apollo/client";

export const GET_ME = gql`
  query getMe {
    me {
      _id
      username
      email
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
