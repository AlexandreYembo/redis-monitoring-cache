const { rabbitMQClient } = require('.');
const clients = [
                    new rabbitMQClient() //, new rabbitMQSender(), new serviceBusReceiver(), new serviceBusSender() // TODO
                ];
module.exports = {
    getClient: client => clients.filter(f => f.client == client)[0]
};