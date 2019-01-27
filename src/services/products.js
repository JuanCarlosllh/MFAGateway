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

module.exports = {
  getProducts
}
