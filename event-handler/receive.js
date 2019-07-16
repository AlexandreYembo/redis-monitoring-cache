const bluebird = require('bluebird');
const config = require('../config');
const baseClient = require('../clients/matchClient');

global.Promise = bluebird;

let client = baseClient.getClient(config.BUS_CLIENT);

const queueMessage = (msg) => {
    console.log(msg);
}

const receiveFromQueueAsync = async () => {
    console.log('cached expired');
    client && client.receiveFromQueue && await client.receiveQueueAsync(queueMessage);
}

receiveFromQueueAsync();