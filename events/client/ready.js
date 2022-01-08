const schedule = require('node-schedule-tz');
const { statusChannel } = require('../../config.json');
const motivations = require('../../db/dailyMessage.json');

module.exports = (logger, client, Discord) => {
  try {
    schedule.scheduleJob('45 52 18 * * *', () => {
      const day = new Date().toLocaleDateString('en-us', { weekday: 'long' })
      if (day === 'Saturday' || day === 'Sunday') return;

      const message = motivations.messages[Math.floor(Math.random() * motivations.messages.length)];
      client.channels.cache.get(statusChannel).send(message);
    });
    client.user.setActivity('//help, en attente...', { type: 'PLAYING' });
  } catch (err) {
    logger({
      type: 'error',
      content: `error while setting on ready workload:\n${err}`,
    });
  }

  logger({
    type: 'process',
    content: 'bot is online, configuration successfull',
  });
};
