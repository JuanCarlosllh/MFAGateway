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

module.exports = {
  getProducts
}
