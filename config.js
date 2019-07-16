var {CONST_BUS_CLIENT} = require('./constants')

module.exports = {
    REDIS_SRV: process.env.REDIS_SRV || '',
    REDIS_PWD: process.env.REDIS_PWD || '',
    REDIS_DB : process.env.REDIS_DB || 0,
    BUS_CLIENT: process.env.BUS_CLIENT || CONST_BUS_CLIENT.RABBIT_MQ,
    BUS_CONNECTION_STRING: process.env.BUS_CONNECTION_STRING || 'localhost',
    BUS_CHANNEL: process.env.BUS_CHANNEL || 'cache-renew'
  }