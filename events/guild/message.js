module.exports = (logger, client, Discord, message) => {
  const prefix = '//';
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(' ');
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd);

  if (command) {
    try {
      command.execute(logger, client, message, args, Discord).then(
        logger({
          type: 'process',
          content: `received //${cmd}, successfully executed`,
        }),
      );
    } catch (err) {
      logger({
        type: 'error',
        content: `error while interpretting //${cmd}: \n ${err}`,
      });
    }
  } else {
    message.reply('désolé mais cette commande n\'est pas prise en charge par le bot,'
      + ' utilise `//help` pour afficher une liste des commandes supportées');
    logger({
      type: 'process',
      content: `received ${command} wich is non existant`,
    });
  }
};
