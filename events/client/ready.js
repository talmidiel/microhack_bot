const cron = require('cron');
const { statusChannel } = require('../../config.json');
const motivations = require('../../db/dailyMessage.json');

module.exports = (client, Discord) => {
  client.channels.cache.get(statusChannel).send('Je suis en ligne !');

  const dailyMessage = new cron.CronJob('00 15 09 * * *', () => {
    const message = motivations.messages[Math.floor(Math.random() * motivations.messages.length)];
    client.channels.cache.get(statusChannel).send(message);
  });
  dailyMessage.start();

  client.user.setActivity('//help, en attente...', { type: 'PLAYING' });
};
