const bluebird = require('bluebird');
const config = require('../config');
const clientBase = require('./matchClient');

global.Promise = bluebird;

let client = clientBase.getClient(config.BUS_CLIENT);

const testFun = () => {
    
}

const receiveFromQueueAsync = () => {
    console.log('cached expired');
    client && client.receiveFromQueue && client.receiveQueue(testFun);
}

receiveFromQueueAsync();