const commando = require('discord.js-commando');


class TopTenRightNow extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'top10',
            group: 'top10',
            memberName: 'top10',
            description: 'Get TOP 10 Cryptocurrency Right Now!'
        });
    }

    async run(message, args) {

        let Datamanager = require('./Datamanager.js');
        let datamanager = new Datamanager();

        let coinImage = require('./coin-image');  

        let splitt = message.content.split(' ');
        datamanager.top10Data(message);
    }
}

module.exports = TopTenRightNow;