const commando = require('discord.js-commando');

class BTCRightNow extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'btc',
            group: 'btc',
            memberName: 'btc',
            description: 'Get Bitcoin Price Right Now!'
        });
    }

    async run(message, args) {

        let getDataAltcoin = require('./Datamanager');       
        getDataAltcoin.getDataAltcoin(message, 1, "Bitcoin!", "http://icons.iconarchive.com/icons/froyoshark/enkel/256/Bitcoin-icon.png", false);
    }
}

module.exports = BTCRightNow;