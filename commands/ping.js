module.exports = {
  name: 'ping',
  description: 'repong pong suivi du temp que le bit a mis a repondre',
  async execute(client, message) {
    message.reply(`Pong! ce message a une latence de ${Date.now() - message.createdTimestamp}ms.`);
  },
};
