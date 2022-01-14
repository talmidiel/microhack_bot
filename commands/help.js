module.exports = {
  name: 'help',
  description: 'renvoie une liste de toute les commandes',
  async execute(logger, client, message) {
    let list = 'voici la liste de toute les commandes supportées par le bot :';
    client.commands.forEach((command) => {
      list += (`\n     \`//${command.name}\`: ${command.description}`);
      if (command.format) list += (`\n            format : \`${command.format}\``);
      if (command.example) list += (`\n            exemple: \`${command.example}\``);
    });
    message.reply(list);
  },
};
