var {CONST_BUS_CLIENT} = require('constants')

module.exports = {
    REDIS_SERVER: process.env.REDIS_SERVER || '',
    REDIS_PASSWORD: process.env.REDIS_PASSWORD || '',
    REDIS_DATA_BASE : process.env.REDIS_DATA_BASE || 0,
    BUS_CLIENT: process.env.BUS_CLIENT || CONST_BUS_CLIENT.RABBIT_MQ,
    BUS_CONNECTION_STRING: process.env.BUS_CONNECTION_STRING || 'localhost',
    BUS_CHANNEL: process.env.BUS_CHANNEL || 'cache-renew'
  }