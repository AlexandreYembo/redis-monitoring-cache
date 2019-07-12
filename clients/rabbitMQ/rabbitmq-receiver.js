const base = require('./rabbitmq-base'),
    baseClientReceiver = require('../base-client-receiver');
var {CONST_BUS_CLIENT} = require('../../constants');

class rabbitMQReceiver extends baseClientReceiver{
    constructor(){
        super(CONST_BUS_CLIENT.RABBIT_MQ);
        super.receiveFromQueue = true;
        super.topic = 'redis-renewer';
    }

    getClient(client){
        return super.getClient(client);
    }

    receiveQueue(_callBack){
        base.connect((err, conn) => 
            base.createChannel(err, conn, ((err, ch) =>
                receive(err, ch, _callBack))));
    }
}

const receive = (err, ch, _callBack) => {
    let q = base.BUS_CHANNEL;
    ch.assertQueue(q, {durable:false});
    ch.consume(q, (msg) =>{
        console.log(" [x] Received %s", msg.content.toString());
        _callBack(JSON.parse(msg.content));
    }, {noAck: true})
}

module.exports = rabbitMQReceiver;