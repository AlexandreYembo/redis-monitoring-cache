const { rabbitMQReceiver } = require('../clients')
const clients = [
                    new rabbitMQReceiver() //, new rabbitMQSender(), new serviceBusReceiver(), new serviceBusSender() // TODO
                ]
module.exports = {
    getClient: client => clients.filter(f => f == client)[0]
}