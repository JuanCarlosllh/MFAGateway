const {
  addToFavorites,
  removeFromFavorites,
  getsUserFavorites,
  shareFavorites
} = require('../services/favorites')

const { getUserByUserName } = require('../services/users')

const favoritesResolvers = {
  Query: {
    favorites: async (_, data, ctx) => getsUserFavorites(ctx.user.id)
  },
  Mutation: {
    addProductToFavorites: (_, { productId }, ctx) => {
      addToFavorites(ctx.user.id, productId)
    },
    removeFromFavorites: (_, { productId }, ctx) =>
      removeFromFavorites(ctx.user.id, productId),
    shareFavorites: async (_, { toUserName }, ctx) => {
      try {
        const toUser = await getUserByUserName(toUserName)
        await shareFavorites(ctx.user.id, toUser.data.id)
        return true
      } catch (e) {
        throw new Error(e.response)
      }
    }
  }
}

module.exports = { favoritesResolvers }
