// const { combineResolvers } = require('graphql-resolvers')
const { getProducts } = require('../services/products')

const productResolvers = {
  Query: {
    products: async (_, { limit, offset, category }) => {
      return getProducts(limit, offset, category)
    }
  }
}

module.exports = { productResolvers }
