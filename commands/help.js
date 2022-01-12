module.exports = {
  name: 'help',
  description: 'renvoie une liste de toute les commandes',
  async execute(logger, client, message) {
    let list = 'voici la liste de toute les commandes supportées par le bot :'
    client.commands.forEach(command => {
      if (command.format) {
        list += (`\n     \`//${command.name}\`: ${command.description}
               format : \`${command.format}\`
               exemple: \`${command.example}\``);
      } else {
        list += (`\n     \`//${command.name}\`: ${command.description}`);
      }
    });

    message.reply(list);
  },
};
