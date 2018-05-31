const commando = require('discord.js-commando');
let $ = require('jquery');
let getJSON = require('get-json');
let getCoinImg = require('./coin-image');

class Datamanager {

    constructor() {}

    checkImgURL(coinImg, imgURL, coinSymbol) {
        if(coinImg.hasOwnProperty(coinSymbol)) {
            imgURL = coinImg[coinSymbol];
            return true;
        } else { return false; }
    }

    httpGet(url) {
        let http = new XMLHttpRequest();
        
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
                    console.log(response.data[i].symbol);
                    console.log(response.data[i]);
                    currentData = response.data[i];
                }
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