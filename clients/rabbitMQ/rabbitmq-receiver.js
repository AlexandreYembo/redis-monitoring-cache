const base = require('./rabbitmq-base'),
    baseClientReceiver = require('../base-client-receiver');
var {CONST_BUS_CLIENT} = require('../../constants');

var cont = 0;

class rabbitMQReceiver extends baseClientReceiver{
    constructor(){
        super(CONST_BUS_CLIENT.RABBIT_MQ);
        super.receiveFromQueue = true;
        super.topic = 'redis-renewer';
    }

    getClient(client){
        return super.getClient(client);
    }

    async receiveQueueAsync(_callBack){
        await base.connect((err, conn) => 
            base.createChannel(err, conn, ((err, ch) =>
                receive(err, ch, _callBack))));
    }
}

const receive = async (err, ch, _callBack) => {
    let q = base.BUS_CHANNEL;
    ch.assertQueue(q, {durable:false});
    await ch.consume(q, (msg) =>{
        cont++
        console.log(new Date().getSeconds())
        console.log("cont" + cont);
        console.log(" [x] Received %s", msg.content.toString());
        _callBack(JSON.parse(msg.content));
    }, {noAck: true})
}

module.exports = rabbitMQReceiver;