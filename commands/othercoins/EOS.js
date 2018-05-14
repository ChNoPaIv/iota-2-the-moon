const commando = require('discord.js-commando');

class EOSRightNow extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'eos',
            group: 'eos',
            memberName: 'eos',
            description: 'Get EOS Price Right Now!'
        });
    }

    async run(message, args) {
        let getDataAltcoin = require('./Datamanager');   
        getDataAltcoin.getDataAltcoin(message, 1765, "EOS!", "https://cdn.iconscout.com/public/images/icon/free/png-512/eos-cryptocurrency-crypto-currency-coin-logo-36a206d6e5c2f8b1-512x512.png", false);
    }

}

module.exports = EOSRightNow;