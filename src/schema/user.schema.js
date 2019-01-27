const { gql } = require('apollo-server')

const userSchema = gql`
  type User {
    id: ID!
    username: String!
  }
  extend type Query {
    me: User!
  }
`

module.exports = {
  userSchema
}
