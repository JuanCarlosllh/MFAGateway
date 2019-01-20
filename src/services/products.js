const axios = require('axios')
const config = require('../config')

const serviceUrl = config.QUERY_URL

const getAmallAppliances = () => axios.get(`${serviceUrl}/small-appliances`)
