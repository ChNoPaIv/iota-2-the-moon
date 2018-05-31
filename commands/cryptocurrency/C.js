const commando = require('discord.js-commando');


class CRightNow extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'c',
            group: 'c',
            memberName: 'c',
            description: 'Get Any Cryptocurrency Coin Price Right Now!'
        });
    }

    async run(message, args) {

        let Datamanager = require('./Datamanager.js');
        let datamanager = new Datamanager();

        let coinImage = require('./coin-image');  

        let splitt = message.content.split(' ');
        datamanager.getData(message, splitt[1]);
    }
}

module.exports = CRightNow;