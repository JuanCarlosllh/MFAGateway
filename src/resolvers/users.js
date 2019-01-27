// const { combineResolvers } = require('graphql-resolvers')
const { getUserById } = require('../services/users')

const usersResolvers = {
  Query: {
    me: async (_, data, ctx) => {
      const user = await getUserById(ctx.user.id)
      return user.data
    }
  }
}

module.exports = { usersResolvers }
