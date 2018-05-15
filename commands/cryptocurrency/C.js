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
        console.log(message.content);

        let splitt = message.content.split(' ');

        console.log(splitt[0]);
        console.log(splitt[1]);

        let getDataAltcoin = require('./Datamanager');   

        switch(splitt[1]) {
            case 'iota': { getDataAltcoin.getDataAltcoin(message, 1720, 'IOTA 2 the MOON!', "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/IOTA-icon.png", true); break; };
            case 'eos': { getDataAltcoin.getDataAltcoin(message, 1765, "EOS!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/EOS-icon.png", false); break; };
            case 'btc': { getDataAltcoin.getDataAltcoin(message, 1, "Bitcoin!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png", false); break; };
            case 'eth': { getDataAltcoin.getDataAltcoin(message, 1027, "Ethereum!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ethereum-ETH-icon.png", false); break; };
            case 'xrp': { getDataAltcoin.getDataAltcoin(message, 52, "Ripple!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ripple-XRP-icon.png", false); break; };
            case 'bch': { getDataAltcoin.getDataAltcoin(message, 1831, "Bitcoin Cash!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Bitcoin-Cash-BCH-icon.png", false); break; };
            case 'ltc': { getDataAltcoin.getDataAltcoin(message, 2, "Litecoin!!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Litecoin-LTC-icon.png", false); break; };
            case 'ada': { getDataAltcoin.getDataAltcoin(message, 2010, "Cardano!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Cardano-ADA-icon.png", false); break; };
            case 'xlm': { getDataAltcoin.getDataAltcoin(message, 512, "Stellar!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Stellar-XLM-icon.png", false); break; };
            case 'trx': { getDataAltcoin.getDataAltcoin(message, 1958, "TRON!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/TRON-TRX-icon.png", false); break; };
            case 'neo': { getDataAltcoin.getDataAltcoin(message, 1376, "NEO!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/NEO-icon.png", false); break; };
            case 'dash': { getDataAltcoin.getDataAltcoin(message, 131, "Dash!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Dash-icon.png", false); break; };
            case 'xmr': { getDataAltcoin.getDataAltcoin(message, 328, "Monero!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Monero-XMR-icon.png", false); break; };
            case 'xem': { getDataAltcoin.getDataAltcoin(message, 873, "NEM!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/NEM-XEM-icon.png", false); break; };
            case 'ven': { getDataAltcoin.getDataAltcoin(message, 1904, "VeChain!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/VeChain-VEN-icon.png", false); break; };
            case 'usdt': { getDataAltcoin.getDataAltcoin(message, 825, "Tether!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Tether-USDT-icon.png", false); break; };
            case 'bcn': { getDataAltcoin.getDataAltcoin(message, 372, "Bytecoin!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Bytecoin-BCN-icon.png", false); break; };
            case 'etc': { getDataAltcoin.getDataAltcoin(message, 1321, "Ethereum Classic!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Ethereum-Classic-ETC-icon.png", false); break; };
            case 'icx': { getDataAltcoin.getDataAltcoin(message, 2099, "ICON!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency/128/ICON-icon.png", false); break; };
            case 'qtum': { getDataAltcoin.getDataAltcoin(message, 1684, "QTUM!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Qtum-icon.png", false); break; };
            case 'bnb': { getDataAltcoin.getDataAltcoin(message, 1839, "Binance Coin!", "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Binance-Coin-BNB-icon.png", false); break; };

            default: { message.channel.send("Not supported command!"); break; };
        }

        
        //getDataAltcoin.getDataAltcoin(message, 1720, 'IOTA 2 the MOON!', "http://icons.iconarchive.com/icons/cjdowner/cryptocurrency/512/IOTA-icon.png", true);
    }
}

module.exports = CRightNow;