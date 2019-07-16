const redis = require('redis'),
    bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const createClient = () => redis.createClient();//'7002', '10.211.55.8');

const subscribe = (client, channel, callback) => {
    client.on('pmessage', (pattern, ch, expiredKey) => {
        console.log(`key ${expiredKey} has expired: ${pattern}`);
        callback(expiredKey);
    });

    console.log(`subscribing ${channel}`);
    client.psubscribe(channel);
    console.log('subscribed');
};

module.exports = {createClient, subscribe};