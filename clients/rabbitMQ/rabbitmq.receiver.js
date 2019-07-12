const base = require('./rabbitmq-base')

const receive = (err, ch, _callBack) => {
    let q = base.BUS_CHANNEL
    ch.assertQueue(q, {durable:false})
    ch.consume(q, (msg) =>{
        console.log(" [x] Received %s", msg.content.toString())
        _callBack(JSON.parse(msg.content))
    }, {noAck: true})
}

const receiveQueue = (_callBack) => base.connect((err, conn) => 
    base.createChannel(err, conn, _callBack, () =>  receive(err, ch, _callBack)))

module.exports = { receiveQueue }