module.exports = {
  name: 'github',
  description: 'renvoie le lien vers mon repo github',
  async execute(client, message) {
    message.reply('voici le lien de notre github : https://github.com/talmidiel/microhack_docs_bot, '
      + 'n\'hésite pas a venir jeter un oeuil :wink:');
  },
};
