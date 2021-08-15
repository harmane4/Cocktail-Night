const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    cocktail: Cocktail
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Cocktail {
    _id: ID!
    idDrink: String
    strDrink: String
    strIngredient1: String
    strIngredient2: String
    strIngredient3: String
    strIngredient4: String
    strMeasure1: String
    strMeasure2: String
    strMeasure3: String
    strMeasure4: String
    strInstructions: String
    strDrinkThumb: String
  }

  input CocktailInput {
    idDrink: String
    strDrink: String
    strIngredient1: String
    strIngredient2: String
    strIngredient3: String
    strIngredient4: String
    strMeasure1: String
    strMeasure2: String
    strMeasure3: String
    strMeasure4: String
    strInstructions: String
    strDrinkThumb: String
  }

  type Mutation {
    loginUser(email: String!, password: String): Auth
    addUser(username: String!, email: String!, password: String): Auth
    saveCocktail(cocktail: CocktailInput!): User
    removeCocktail(idDrink: String): User
  }
`;

module.exports = typeDefs;
