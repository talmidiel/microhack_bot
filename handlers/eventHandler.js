const fs = require('fs');

module.exports = (logger, client, Discord) => {
  const loadDir = (dirs) => {
    const eventFiles = fs.readdirSync(`events/${dirs}`);

    eventFiles.map((file) => {
      const event = require(`../events/${dirs}/${file}`);
      const eventName = file.split('.')[0];
      client.on(eventName, event.bind(null, logger, client, Discord));
    });
  };

  ['client', 'guild'].forEach((e) => loadDir(e));
};
