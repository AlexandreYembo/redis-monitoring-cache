class baseClientReceiver{
    constructor(client){
        this.client = client
        this.receiveFromQueue = false
        this.redisObject = null
    }

    getClient(client){
        return this.client === client
    }

    receiveQueue(_callBack){
        _callBack;
    }
}

module.exports = baseClientReceiver