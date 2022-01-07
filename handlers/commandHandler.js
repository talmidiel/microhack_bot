const fs = require('fs');

module.exports = (client, Discord) => {
  const commandFiles = fs.readdirSync('./commands');

  commandFiles.map((file) => {
    const command = require(`../commands/${file}`);
    if (command.name) client.commands.set(command.name, command);
  });
};
