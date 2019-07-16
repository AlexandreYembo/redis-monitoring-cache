const bluebird = require('bluebird'),
    config = require('../config'),
    redisClient = require('../clients/redis-client'),
    baseKey = require('../keys-caching/match-keys'),
    baseClient = require('../clients/matchClient');

global.Promise = bluebird;

const {REDIS_SRV, REDIS_PWD, REDIS_DB} = config;

const notificationResult = (valid, error) => 
    valid && console.log('send') || console.log(`error ${error}`);

const sendNotificationOnExpireKey = async (redisKey) => {
    console.log(`key expired: ${redisKey}!`);
    let key = baseKey.getInstance(redisKey);
    let client = baseClient.getClient(config.BUS_CLIENT);
    key && key.sendNotification 
        ? client.sendToQueue(key.getObjectKey()) 
        : notificationResult(false, `Not recoginized redis key: ${redisKey}`);
}

//Link references to configure key event on Redis: https://redis.io/topics/notifications

redisClient.subscribe(redisClient.createClient(REDIS_SRV, REDIS_PWD), `__keyevent@${REDIS_DB}__:expired`, sendNotificationOnExpireKey);
