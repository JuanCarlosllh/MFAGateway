const { ApolloError } = require('apollo-server')

const UserNotExistsError = () =>
  new ApolloError('provided user does not exists', 404)

module.exports = {
  UserNotExistsError
}
