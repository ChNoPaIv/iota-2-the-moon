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
        let request = require('request');

        request({ url: 'https://api.coinmarketcap.com/v2/ticker/1765/?convert=NOK', json: true}, function(err, res, json) {
            if(err) {
                throw err;
            }

            let data = res.body.data;
            let  num = data.quotes.USD.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            message.channel.send({
                "embed": {
                    title: "EOS!",
                    color: 1548984,
                    author: {
                        icon_url: "https://i.gyazo.com/e3b5e3b6d75b12a87b088a42d56f3496.png",
                        name: "iIllumination"
                    },
                    thumbnail: {
                        url: "https://cdn.iconscout.com/public/images/icon/free/png-512/eos-cryptocurrency-crypto-currency-coin-logo-36a206d6e5c2f8b1-512x512.png"
                    },
                    fields: [
                        {
                            name: "RANK:",
                            value: data.rank.toString(),
                            inline: true
                        },
                        {
                            name: "Market Cap:",
                            value: "$ " + num + " USD",
                            inline: true
                        },
                        {
                            name: "Price USD:",
                            value: data.quotes.USD.price.toFixed(2).toString() + " $",
                            inline: true
                        },
                        {
                            name: "Price NOK",
                            value: data.quotes.NOK.price.toFixed(2).toString() + " kr",
                            inline: true
                        },
                        {
                            name: "Percent 1h",
                            value: data.quotes.USD.percent_change_1h.toFixed(2).toString() + "%",
                            inline: true
                        },
                        {
                            name: "Percent 24h",
                            value: data.quotes.USD.percent_change_24h.toFixed(2).toString() + "%",
                            inline: true
                        },
                        {
                            name: "Percent 7d",
                            value: data.quotes.USD.percent_change_7d.toFixed(2).toString() + "%",
                            inline: true
                        },
                    ]


                }
            })
        })
    }

}

module.exports = EOSRightNow;