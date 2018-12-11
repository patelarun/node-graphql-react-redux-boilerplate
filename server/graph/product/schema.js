const { gql } = require('apollo-server');

module.exports = gql` extend
  type Mutation {
    addProduct(input: ProductAdd): Product
  }

  input ProductAdd {
    name: String
    description: String
  }

  extend type Query {
    fetchProductsQuery: [Product]
  }

  type Product {
    id: String
    name: String
    description: String
  }
`;
