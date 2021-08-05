const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    loginUser(email: String!, password: String): Auth
    addUser(username: String!, email: String!, password: String): Auth
  }
`;

module.exports = typeDefs;
