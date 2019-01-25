const axios = require('axios')
const querystring = require('querystring')

const config = require('../config')

const serviceUrl = `${config.QUERY_URL}/products`

const getProducts = async (limit, offset, category) => {
  const result = await axios.get(
    `${serviceUrl}?${querystring.stringify({
      limit,
      offset,
      category
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
