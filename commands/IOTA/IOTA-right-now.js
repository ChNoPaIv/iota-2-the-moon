const commando = require('discord.js-commando');

class IOTARightNow extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'iota',
            group: 'iota',
            memberName: 'iota',
            description: 'Get IOTA Price Right Now!'
        });
    }

    async run(message, args) {
        let getDataAltcoin = require('../othercoins/Datamanager');   
        getDataAltcoin.getDataAltcoin(message, 1720, 'IOTA 2 the MOON!', "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/IOTA-icon.png", true);
    }
}

module.exports = IOTARightNow;