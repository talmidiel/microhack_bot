module.exports = {
  name: 'ping',
  description: 'repond pong suivi du temp que le bot a mis a repondre',
  async execute(logger, client, message) {
    message.reply(`Pong! ce message a une latence de ${Date.now() - message.createdTimestamp}ms.`);
  },
};
