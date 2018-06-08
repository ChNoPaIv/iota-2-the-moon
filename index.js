const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('c', 'C');
bot.registry.registerGroup('top10', 'TOP10');
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login(process.env.ACCESS_TOKEN);


