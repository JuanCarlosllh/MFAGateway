const { gql } = require('apollo-server')

const userSchema = gql`
  type User {
    id: ID!
    username: String!
    favorites: [Product]
  }
  extend type Query {
    me: User!
  }
`

module.exports = {
  userSchema
}
