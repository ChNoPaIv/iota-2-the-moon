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
        
        let request = require('request');

        request({ url: 'https://api.coinmarketcap.com/v2/ticker/1720/?convert=NOK', json: true}, function(err, res, json) {
            if(err) {
                throw err;
            }

            let data = res.body.data;
<<<<<<< HEAD
            let  num = data.quotes.USD.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
=======
>>>>>>> afd06c8917fe44a25ee46cfca967d9632ec31da3
   
            message.channel.send({
                "embed": {
                    title: "IOTA 2 the MOON!",
                    color: 1548984,
                    author: {
                        icon_url: "https://i.gyazo.com/e3b5e3b6d75b12a87b088a42d56f3496.png",
                        name: "iIllumination"
                    },
                    thumbnail: {
                        url: "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/IOTA-icon.png"
                    },
                    fields: [
                        {
                            name: "RANK:",
                            value: data.rank.toString(),
                            inline: true
                        },
                        {
                            name: "Market Cap:",
<<<<<<< HEAD
                            value: "$ " + num + " USD",
=======
                            value: "$ " + data.quotes.USD.market_cap.toFixed(2).toString() + " USD",
>>>>>>> afd06c8917fe44a25ee46cfca967d9632ec31da3
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
<<<<<<< HEAD
=======

>>>>>>> afd06c8917fe44a25ee46cfca967d9632ec31da3
                    ]


                }
                
            });

        })
        
    };

}



module.exports = IOTARightNow;