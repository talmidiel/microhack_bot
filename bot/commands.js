module.exports = class Command {
  constructor(message, client, statusChannel) {
    this.client = client;
    this.message = message;
    this.owner = '348886778406502401';
    this.prefix = '//';
    this.statusChannel = statusChannel;
  }

  splitMessage() {
    const commandBody = this.message.content.slice(this.prefix.length);
    this.args = commandBody.split(' ');
    this.command = this.args.shift().toLowerCase();
  }

  ping() {
    this.message.reply(`Pong! ce message a une latence de ${Date.now() - this.message.createdTimestamp}ms.`);
  }

  help() {
    this.message.reply('Voici la liste des commandes qui sont actuellement supportées par le bot :'
      + '\n\n\n     `//help` :   affiche ce message d\'aide'
      + '\n\n     `//ping` :   repond pong au message et indique le temp que le bot a mit a repondre'
      + '\n\n     `//github` :   affiche le lien vers notre github');
  }

  github() {
    this.message.reply('voici le lien de notre github : https://github.com/talmidiel/microhack_docs_bot, '
      + 'n\'hésite pas a venir jeter un oeuil :wink:');
  }

  wrongCommand() {
    this.message.reply('désolé mais cette commande n\'est pas prise en charge par le bot,'
      + ' utilise `//help` pour afficher une liste des commandes supportées');
  }

  logoutCommand() {
    if (this.message.author.id !== this.owner) {
      return this.statusChannel.send('désolé, seul @talmidiel est authorisé a me deconnecter');
    }
    return this.statusChannel.send('Ok, je me déconnecte').then(() => this.client.destroy());
  }

  commandInterpreter() {
    this.splitMessage();
    switch (this.command) {
      case 'ping':
        this.ping();
        break;
      case 'help':
        this.help();
        break;
      case 'github':
        this.github();
        break;
      case 'logout':
        this.logoutCommand();
        break;
      default:
        this.wrongCommand();
    }
  }
};
