const commando = require('discord.js-commando');
let $ = require('jquery');
let getJSON = require('get-json');
let getCoinImg = require('./coin-image');

class Datamanager {

    constructor() {}

    top10Data(message) {
        getJSON('https://api.coinmarketcap.com/v2/ticker/?convert=NOK&limit=10&sort=rank', function(error, response) {
            let t = 0;

            let sortable = [];

            for(let coin in response.data) {
                sortable.push([coin, response.data[coin]]);
            }

            sortable.sort(function(a, b) {
                return a[1].rank - b[1].rank;
            })

            let imgSymbolURL = getCoinImg[sortable[0][1].symbol.toLowerCase()];

            console.log(sortable[0][1]);

            message.channel.send({
                "embed": {
                    title: '__**Top 10**__',
                    color: 1548984,
                    thumbnail: {
                        url: imgSymbolURL
                    },
                    author: {
                        icon_url: "https://i.gyazo.com/e3b5e3b6d75b12a87b088a42d56f3496.png",
                        name: "iIllumination"
                    },
                    fields: [
                        {
                            name: "Rank 1 - " + sortable[0][1].name,
                            value: "_Price - " + sortable[0][1].quotes.USD.price.toFixed(2).toString() + " $_",
                            inline: true
                        },
                        {
                            name: "Rank 2 - " + sortable[1][1].name,
                            value: "_Price - " + sortable[1][1].quotes.USD.price.toFixed(2).toString()  + " $_",
                            inline: true
                        },
                        {
                            name: "Rank 3 - " + sortable[2][1].name,
                            value: "_Price - " + sortable[2][1].quotes.USD.price.toFixed(2).toString()  + " $_",
                            inline: true
                        },
                        {
                            name: "Rank 4 - " + sortable[3][1].name,
                            value: "_Price - " + sortable[3][1].quotes.USD.price.toFixed(2).toString()  + " $_",
                            inline: true
                        },
                        {
                            name: "Rank 5 - " + sortable[4][1].name,
                            value: "_Price - " + sortable[4][1].quotes.USD.price.toFixed(2).toString()  + " $_",
                            inline: true
                        },
                        {
                            name: "Rank 6 - " + sortable[5][1].name,
                            value: "_Price - " + sortable[5][1].quotes.USD.price.toFixed(2).toString()  + " $_",
                            inline: true
                        },
                        {
                            name: "Rank 7 - " + sortable[6][1].name,
                            value: "_Price - " + sortable[6][1].quotes.USD.price.toFixed(2).toString()  + " $_",
                            inline: true
                        },
                        {
                            name: "Rank 8 - " + sortable[7][1].name,
                            value: "_Price - " + sortable[7][1].quotes.USD.price.toFixed(2).toString()  + " $_",
                            inline: true
                        },
                        {
                            name: "Rank 9 - " + sortable[8][1].name,
                            value: "_Price- " + sortable[8][1].quotes.USD.price.toFixed(2).toString()  + " $_",
                            inline: true
                        },
                        {
                            name: "Rank 10 - " + sortable[9][1].name, 
                            value: "_Price - " + sortable[9][1].quotes.USD.price.toFixed(2).toString()  + " $_",
                            inline: true
                        }
                    ]
                }
            })


        })
    }

    getData(message, coinSymbol) {
        let request = require('request');
        let coinImg = require('./coin-image');

        coinSymbol = coinSymbol.toUpperCase();

        let foundSymbol = false;
        let currentData = "";
        let imgSymbolURL = "";

        

        getJSON('https://api.coinmarketcap.com/v2/ticker/?convert=NOK', function(error, response) {
            for(let i in response.data) {
                if(response.data[i].symbol == coinSymbol) {
                    foundSymbol = response.data[i].symbol;
                    currentData = response.data[i];
                }
            }

            if(foundSymbol == false) { 
                message.channel.send("This cryptocurrency does not exist in our data base!");
                return;
            }

            imgSymbolURL = getCoinImg[foundSymbol.toLowerCase()];

            let  num = currentData.quotes.USD.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");


            if(currentData != "" && foundSymbol != false && imgSymbolURL != "") {
                message.channel.send({
                    "embed": {
                        title: '__**'+ currentData.name.toUpperCase() +'!**__',
                        color: 1548984,
                        author: {
                            icon_url: "https://i.gyazo.com/e3b5e3b6d75b12a87b088a42d56f3496.png",
                            name: "iIllumination"
                        },
                        thumbnail: {
                            url: imgSymbolURL
                        },
                        fields: [
                            {
                                name: "RANK:",
                                value: "_" + currentData.rank + "_",
                                inline: true
                            },
                            {
                                name: "Market Cap:",
                                value: "_$ " + num + " USD_",
                                inline: true
                            },
                            {
                                name: "Price USD:",
                                value: "_" + currentData.quotes.USD.price.toFixed(2).toString() + " $_",
                                inline: true
                            },
                            {
                                name: "Price NOK",
                                value: "_" + currentData.quotes.NOK.price.toFixed(2).toString() + " kr_",
                                inline: true
                            },
                            {
                                name: "Percent 1h",
                                value: "_" + currentData.quotes.USD.percent_change_1h + "%_",
                                inline: true
                            },
                            {
                                name: "Percent 24h",
                                value: "_" + currentData.quotes.USD.percent_change_24h + "%_",
                                inline: true
                            },
                            {
                                name: "Percent 7d",
                                value: "_" + currentData.quotes.USD.percent_change_7d + "%_",
                                inline: true
                            }
                        ],
                    }                    
                });
            } else { 
                message.channel.send("Not supported command!"); 
            }
            
        });
    };
};

module.exports = Datamanager;