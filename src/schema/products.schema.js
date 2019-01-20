const { gql } = require('apollo-server')

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    prize: String!
    image: String
    type: String
  }
  extend type Query {
    products(
      type: String
      offset: Int
      limit: Int
      category: String
    ): [Product]!
  }
`

module.exports = {
  productSchema
}
