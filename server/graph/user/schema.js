const { gql } = require('apollo-server');

module.exports = gql`
  type Mutation {
    getToken(input: UserLogin): Token
    registerUser(input: UserObject): Token
  }

  input UserLogin {
    email: String
    password: String
  }

  input UserObject {
    email: String
    password: String
    role: String
  }

  type Query {
    getUser: User
  }

  type User {
    id: ID!
    email: String
    password: String
    role: String
  }

  type Token {
    value: String
  }
`;
