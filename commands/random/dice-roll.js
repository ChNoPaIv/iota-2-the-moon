const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    async run(message, args) {
        let roll = Math.floor(Math.random() * 6) + 1;

        let rollImage = this.getRollImage(roll);

        message.channel.send({
            "embed": {
                color: 1548984,
                fields: [
                    {
                        name: "__**Roller!**__: ",
                        value: "***You rolled: ***",
                        inline: false
                    }
                ],
                image: {
                    url: rollImage
                }
            }
        })

    }

    getRollImage(nr) {
        switch(nr) {
            case 1: return "https://i.gyazo.com/1b031ee5c2962d8501213223cdc2f125.png";
            case 2: return "https://i.gyazo.com/4f6977028dc398a70a6abac812b36397.png";
            case 3: return "https://i.gyazo.com/8020023567e511367f6cb47c69402ce9.png";
            case 4: return "https://i.gyazo.com/33f807b7af16ae33a93c7b265cfef33e.png";
            case 5: return "https://i.gyazo.com/2068b012b24744e90add4204d64233c2.png";
            case 6: return "https://i.gyazo.com/552abca1277290bca61581caa2f94713.png";
            default: return "Something went wrong";
        }
    }
}

module.exports = DiceRollCommand;