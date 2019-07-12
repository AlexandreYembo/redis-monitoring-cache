const {BUS_CONNECTION_STRING} = require('../../config'),
    {BUS_CHANNEL} = require('../../config');

const amqp = require('amqplib/callback_api');

const connect = (channel) => amqp.connect(`amqp://${BUS_CONNECTION_STRING}`, channel);

const createChannel = (err, conn, _callBack) => conn.createChannel((err, ch) => _callBack(err, ch));

module.exports = {createChannel, connect, BUS_CHANNEL};
