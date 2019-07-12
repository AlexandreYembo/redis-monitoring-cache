const bluebird = require('bluebird'),
    config = require('../config'),
    clientBase = require('./matchClient')

global.Promise = bluebird

let client = clientBase.getClient(config.BUS_CLIENT)

const receiveFromQueue = () => {
    console.log('cached expired')
    client && client.receiveFromQueue ? client.receiveQueue() :  notificationResult(false, `not recognized the redis key:  ${redisKey}`)
}

receiveFromQueue()