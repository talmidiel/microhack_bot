module.exports = (client, Discord, message) => {
  const prefix = '//';
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd);

  if (command) {
    command.execute(client, message, args, Discord);
  } else {
    message.reply('désolé mais cette commande n\'est pas prise en charge par le bot,'
      + ' utilise `//help` pour afficher une liste des commandes supportées');
  }
};
