const {
  addToFavorites,
  removeFromFavorites,
  getsUserFavorites,
  shareFavorites
} = require('../services/favorites')

const favoritesResolvers = {
  Query: {
    favorites: async (_, data, ctx) => getsUserFavorites(ctx.user.id)
  },
  Mutation: {
    addProductToFavorites: (_, { productId }, ctx) =>
      addToFavorites(ctx.user.id, productId),
    removeFromFavorites: (_, { productId }, ctx) =>
      removeFromFavorites(ctx.user.id, productId),
    shareFavorites: (_, { toUserId }, ctx) =>
      shareFavorites(ctx.user.id, toUserId)
  }
}

module.exports = { favoritesResolvers }
