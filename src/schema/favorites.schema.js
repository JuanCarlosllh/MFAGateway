const { gql } = require('apollo-server')

const favoritesSchema = gql`
  extend type Query {
    favorites: [Product]
  }
  extend type Mutation {
    addProductToFavorites(productId: ID!): Product
    removeFromFavorites(productId: ID!): Product
    shareFavorites(toUserId: ID!): Boolean
  }
`

module.exports = {
  favoritesSchema
}
