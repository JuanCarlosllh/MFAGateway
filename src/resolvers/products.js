// const { combineResolvers } = require('graphql-resolvers')
const {
  getProducts,
  addToFavorites,
  removeFromFavorites
} = require('../services/products')

const { getsUserFavorites } = require('../services/users')

const productResolvers = {
  Query: {
    products: async (
      _,
      { limit, offset, category, orderBy, orderDirection },
      ctx
    ) => {
      const products = await getProducts(
        limit,
        offset,
        category,
        orderBy,
        orderDirection
      )
      const favorites = await getsUserFavorites(ctx.user.id) // This could/should be cached on Redis
      const productsWithFavorites = products.map(product => ({
        ...product,
        isOnFavorites: !!favorites.find(
          favProduct => favProduct.id === product.id
        )
      }))
      return productsWithFavorites
    }
  },
  Mutation: {
    addProductToFavorites: (_, { productId }, ctx) =>
      addToFavorites(ctx.user.id, productId),
    removeFromFavorites: (_, { productId }, ctx) =>
      removeFromFavorites(ctx.user.id, productId)
  }
}

module.exports = { productResolvers }
