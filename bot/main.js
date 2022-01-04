const { Client, Intents } = require('discord.js');
const fs = require('fs');
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

  dailyMotivation(statusChannel) {
    setInterval(() => {
      const lastSentDate = require('../db/last_motivation_date.json');
      const motivations = require('../db/motivation_messages.json');
      if (new Date().getDate().toString() !== lastSentDate.lastSent && new Date().getHours() > 9) {
        const message = motivations.messages[Math.floor(Math.random() * motivations.messages.length)];
        statusChannel.send(message);
        lastSentDate.lastSent = new Date().getDate().toString();
        fs.writeFile('./db/last_motivation_date.json', JSON.stringify(lastSentDate), (err) => {
          if (err) throw err;
        });
      }
    }, 60 * 60 * 1000);
  }

  baseInit() {
    this.client.on('ready', () => {
      this.statusChannel = this.client.channels.cache.get('927695794830733373');
      this.statusChannel.send('Je suis en ligne !');
      this.dailyMotivation(this.statusChannel);
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
