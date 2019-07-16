class baseClient{
    constructor(client){
        this.client = client;
        this.receiveFromQueue = false;
    }

    getClient(client){
        return this.client === client;
    }

    receiveQueueAsync(callBack){
        callBack;
    }

    sendToQueue(callBack){
        callBack;
    }
}

module.exports = baseClient;