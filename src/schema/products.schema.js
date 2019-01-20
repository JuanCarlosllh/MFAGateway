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
    products(cursor: String, limit: Int): Product!
  }
`

module.exports = {
  productSchema
}
