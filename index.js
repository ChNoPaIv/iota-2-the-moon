
const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('iota', 'IOTA');
bot.registry.registerGroup('eos', 'EOS');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('NDQ0NTM2ODEzNzgxMjU0MTQ0.Ddh1nA.x6LDRxehMjUYI-KnR6D1LIxzEVk');

