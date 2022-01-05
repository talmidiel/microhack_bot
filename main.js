const Discord = require('discord.js');
const { Intents } = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['commandHandler', 'eventHandler'].forEach(handler => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(token);
