const commando = require('discord.js-commando');

module.exports = {

    getDataAltcoin: function(message, id, titleText, thumbnailURL, speechStatus) {

        let request = require('request');

        request({ url: 'https://api.coinmarketcap.com/v2/ticker/' + id + '/?convert=NOK', json: true}, function(err, res, json) {
            if(err) {
                throw err;
            }

            let data = res.body.data;
            let  num = data.quotes.USD.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

            if(data.quotes.USD.percent_change_24h >= 0 && speechStatus == true) {
                message.channel.send("IOTA 2 THE MOON!", {tts: true});
            }
   
            message.channel.send({
                "embed": {
                    title: '__**'+ titleText +'**__',
                    color: 1548984,
                    author: {
                        icon_url: "https://i.gyazo.com/e3b5e3b6d75b12a87b088a42d56f3496.png",
                        name: "iIllumination"
                    },
                    thumbnail: {
                        url: thumbnailURL
                    },
                    fields: [
                        {
                            name: "RANK:",
                            value: "_" + data.rank.toString() + "_",
                            inline: true
                        },
                        {
                            name: "Market Cap:",
                            value: "_$ " + num + " USD_",
                            inline: true
                        },
                        {
                            name: "Price USD:",
                            value: "_" + data.quotes.USD.price.toFixed(2).toString() + " $_",
                            inline: true
                        },
                        {
                            name: "Price NOK",
                            value: "_" + data.quotes.NOK.price.toFixed(2).toString() + " kr_",
                            inline: true
                        },
                        {
                            name: "Percent 1h",
                            value: "_" + data.quotes.USD.percent_change_1h.toFixed(2).toString() + "%_",
                            inline: true
                        },
                        {
                            name: "Percent 24h",
                            value: "_" + data.quotes.USD.percent_change_24h.toFixed(2).toString() + "%_",
                            inline: true
                        },
                        {
                            name: "Percent 7d",
                            value: "_" + data.quotes.USD.percent_change_7d.toFixed(2).toString() + "%_",
                            inline: true
                        }
                    ],
                    
                }
                
            });

        })

    }

};

