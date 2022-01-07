const fs = require('fs');

module.exports = (logger, client, Discord) => {
  const commandFiles = fs.readdirSync('./commands');

  commandFiles.map((file) => {
    const command = require(`../commands/${file}`);
    if (command.name) {
      try {
        client.commands.set(command.name, command);
      } catch (err) {
        logger({
          type: 'error',
          content: `error when setting up commands:\n${err}`,
        });
      }
    }
  });
};
