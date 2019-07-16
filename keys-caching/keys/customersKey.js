const baseKey = require('../base-key'),
    constKeys = require('./keys-patterns-contants');

class customerKeys extends baseKey{
    constructor(){
        super(constKeys.customerPattern);
        super.sendNotification = true;
        super.topic = 'redis-renewer'
    }

    getObjectKey(){
        return this.createMessage(super.getObjectKey());
    }

    createMessage(obj){
        let body = {
            customerId: obj[1], 
            name: obj[2],
            address: {
                number: obj[3],
                street: obj[4],
                district: obj[5],
                city: obj[6]
            }};
        return {body};
    }
}

module.exports = customerKeys;