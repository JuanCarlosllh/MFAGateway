const axios = require('axios')

const config = require('../config')

const serviceUrl = `${config.QUERY_URL}/users`

const getUserById = async id => axios.get(`${serviceUrl}/${id}`)

const getUserByUserName = async username =>
  axios.get(`${serviceUrl}/username/${username}`)

module.exports = {
  getUserByUserName,
  getUserById
}
