const { productResolvers } = require('./products')
const { usersResolvers } = require('./users')

module.exports = [productResolvers, usersResolvers]
