const base = require('./rabbitmq-base'),
    baseClient = require('../base-client');
var {CONST_BUS_CLIENT} = require('../../constants');

class rabbitMQClient extends baseClient{
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

    async sendToQueue(obj){
        await base.connect((err, conn) => 
                base.createChannel(err, conn, 
                    (err, ch) => send(err, ch, obj)));
    }
    
}

const receive = async (err, ch, _callBack) => {
    let q = base.BUS_CHANNEL;
    ch.assertQueue(q, {durable:false});
    await ch.consume(q, (msg) =>{
        _callBack(JSON.parse(msg.content));
    }, {noAck: true})
}

const send = (err, ch, obj) => {
    let q = base.BUS_CHANNEL;
    ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, new Buffer(JSON.stringify(obj.body)));
    console.log(`Object ${obj.body} sent`);
}

module.exports = rabbitMQClient;