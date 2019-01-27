const { productResolvers } = require('./products')
const { usersResolvers } = require('./users')
const { favoritesResolvers } = require('./favorites')

module.exports = [productResolvers, usersResolvers, favoritesResolvers]
