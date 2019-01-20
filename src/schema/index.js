const { gql } = require('apollo-server')

const { productSchema } = require('./products.schema')

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

module.exports = [linkSchema, productSchema]
