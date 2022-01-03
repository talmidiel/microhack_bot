// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('../config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
});

// preparing all the functions for the bot to execute
const ping = (message) => message.reply(`Pong! ce message a une latence de ${ Date.now() - message.createdTimestamp}ms.`)
const wrongCommand = (message) => message.reply('désolé mais cette commande n\'est pas prise en charge par le bot')

// Read from new messages add some actions depending on what they contains
const prefix = "//"
client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return

    // do some work on the message to interpret the command later
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'ping': ping(message); break
        default: wrongCommand(message)
    }
});

// Login to Discord with the client's token
client.login(token);
