// const { combineResolvers } = require('graphql-resolvers')
const { getUserById, getsUserFavorites } = require('../services/users')

const usersResolvers = {
  Query: {
    me: async (_, data, ctx) => {
      const user = await getUserById(ctx.user.id)
      return user.data
    }
  },
  User: {
    favorites: async (_, data, ctx) => getsUserFavorites(ctx.user.id)
  }
}

module.exports = { usersResolvers }
