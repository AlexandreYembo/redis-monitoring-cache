const bluebird = require('bluebird');
const config = require('../config');
const clientBase = require('./matchClient');

global.Promise = bluebird;

let client = clientBase.getClient(config.BUS_CLIENT);

const testFun = () => {
    
}

const receiveFromQueueAsync = async () => {
    console.log(new Date().getSeconds())
    console.log('cached expired');
    client && client.receiveFromQueue && await client.receiveQueueAsync(testFun);
}

receiveFromQueueAsync();