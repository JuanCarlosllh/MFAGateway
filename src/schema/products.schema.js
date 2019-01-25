const { gql } = require('apollo-server')

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    prize: String!
    image: String
    type: String
    isOnFavorites: Boolean
  }
  extend type Query {
    products(
      type: String
      offset: Int
      limit: Int
      category: String
    ): [Product]!
  }
  extend type Mutation {
    addProductToFavorites(productId: ID!): Product
    removeFromFavorites(productId: ID!): Product
  }
`

module.exports = {
  productSchema
}
