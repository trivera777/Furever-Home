const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedPets: [Pet]!
  }

  type Pet {
    _id: ID
    type: String
    description: String
    petId: String
    image: String
    link: String
    name: String
  }

  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    savedPets(username: String): [User]
    getMe: User
  }

  input PetInput{
    type: String
    description: String
    petId: String
    image: String
    link: String
    name: String
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    savePet(PetInput: PetInput!): User
    deletePet(petId: String!): User
  }
`;

module.exports = typeDefs;
