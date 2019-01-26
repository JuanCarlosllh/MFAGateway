const axios = require('axios')
const querystring = require('querystring')

const config = require('../config')

const serviceUrl = `${config.QUERY_URL}/products`

const getProducts = async (
  limit,
  offset,
  category,
  orderBy,
  orderDirection
) => {
  const query = {
    limit,
    offset,
    category,
    orderBy,
    orderDirection
  }
  const result = await axios.get(
    `${serviceUrl}?${querystring.stringify({
      limit: query.limit,
      offset: query.offset,
      ...(query.category && { category: query.category }),
      ...(query.orderBy && { orderBy: query.orderBy }),
      ...(query.orderDirection && { orderDirection: query.orderDirection })
    })}`
  )
  return result.data
}

const addToFavorites = async (userId, productId) => {
  const result = await axios.post(`${serviceUrl}/addToFavorites`, {
    userId,
    productId
  })
  return result.data
}

const removeFromFavorites = async (userId, productId) => {
  const result = await axios.post(`${serviceUrl}/removeFavorite`, {
    userId,
    productId
  })
  return result.data
}

module.exports = {
  getProducts,
  addToFavorites,
  removeFromFavorites
}
