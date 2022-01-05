const { statusChannel } = require('../config.json');

module.exports = {
  name: 'logout',
  description: 'reservée a talmidiel, permet de deconecter le bot',
  async execute(client, message) {
    if (message.author.id !== '348886778406502401') {
      message.reply('seul talmidiel est authorisé a me déconnecter');
    } else {
      client.channels.cache.get(statusChannel).send('je passe hors ligne pour maintenance !').then(() => client.destroy());
    }
  },
};
