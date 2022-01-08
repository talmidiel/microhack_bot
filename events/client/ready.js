const schedule = require('node-schedule-tz');
const { statusChannel } = require('../../config.json');
const motivations = require('../../db/dailyMessage.json');

module.exports = (logger, client, Discord) => {
  try {
    schedule.scheduleJob('0 0 9 * * *', () => {
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
