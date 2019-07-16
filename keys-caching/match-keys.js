const {customerKey} = require('./keys'),
    instances = [new customerKey()];

/*
    Description: Choose a proper instance accord a key is being expired.
*/
module.exports = {
    getInstance : key => instances.filter(f => f.instance(key))[0]
};