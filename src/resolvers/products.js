// const { combineResolvers } = require('graphql-resolvers')

const productResolvers = {
  Query: {
    products: async () => {
      return {}
    }
  }
}

module.exports = { productResolvers }
