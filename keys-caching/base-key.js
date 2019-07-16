class baseKey{
    constructor(pattern){
        this.pattern = pattern;
        this.key = null,
        this.sendNotification = false;
        this.topic = null;
        this.redisObject = null;
    }

    instance(key){
        this.key = key;
        return this.pattern.test(key);
    }

    getObjectKey(){
        return this.pattern.exec(this.key);
    }

    updateObject(obj){
        this.redisObject = obj;
    }
}

module.exports = baseKey
