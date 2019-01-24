const { gql } = require('apollo-server')

const { productSchema } = require('./products.schema')
const { userSchema } = require('./user.schema')

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`
module.exports = [linkSchema, productSchema, userSchema]
