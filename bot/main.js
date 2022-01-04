const { Client, Intents } = require('discord.js');
const { token } = require('../config.json');
const Command = require('./commands');

class Bot {
  constructor() {
    this.client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    this.prefix = '//';
  }

  messageListener() {
    this.client.on('messageCreate', (message) => {
      if (message.author.bot) return;
      if (!message.content.startsWith(this.prefix)) return;
      new Command(message, this.client, this.statusChannel).commandInterpreter();
    });
  }

  baseInit() {
    this.client.on('ready', () => {
      this.statusChannel = this.client.channels.cache.get('927695794830733373');
      this.statusChannel.send('Je suis en ligne !');
    });
    this.messageListener();
  }

  start() {
    this.baseInit();
    this.client.login(token);
  }
}

const bot = new Bot(Client, Intents, token);

bot.start();
