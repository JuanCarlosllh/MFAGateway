const axios = require('axios')

const config = require('../config')

const serviceUrl = `${config.QUERY_URL}/favorites`

const getsUserFavorites = async id => {
  const favorites = await axios.get(`${serviceUrl}/getByUser/${id}`)
  return favorites.data
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

const shareFavorites = async (fromUserId, toUserId) => {
  const favorites = await axios.post(`${serviceUrl}/share`, {
    fromUserId,
    toUserId
  })
  return favorites.data
}

module.exports = {
  addToFavorites,
  removeFromFavorites,
  getsUserFavorites,
  shareFavorites
}
