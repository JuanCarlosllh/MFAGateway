const { gql } = require('apollo-server')

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
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
      orderBy: String
      orderDirection: String
    ): [Product]!
  }
`

module.exports = {
  productSchema
}
