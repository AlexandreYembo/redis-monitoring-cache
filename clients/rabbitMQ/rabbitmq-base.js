const {BUS_CONNECTION_STRING} = require('../config')
const {BUS_CHANNEL} = require('./rabbitmq-base')

const amqp = require('amqplib/callback_api')

const connect = (channel) => amqp.connect(`amqp://${BUS_CONNECTION_STRING}`, channel)

const createChannel = (err, conn, _callBack, fnSuccess) => conn.createChannel((err, ch) => fnSuccess);

module.exports = {createChannel, connect, BUS_CHANNEL}
