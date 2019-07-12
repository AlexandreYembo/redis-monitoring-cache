const base = require('./rabbitmq-base');

const send = (err, ch, obj) => {
    let q = base.BUS_CHANNEL;
    ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, new Buffer(JSON.stringify(obj.body)));
    console.log(`Object ${obj.body} sent`);
}

const sendToQueue = (obj) =>  base.connect((err, conn) => 
    base.createChannel(err, conn, _callBack, () =>  send(err, ch, obj)));

module.exports = { sendToQueue };