const { statusChannel } = require('../../config.json');

module.exports = (client, Discord) => {
  client.channels.cache.get(statusChannel).send('Je suis en ligne !');
};
