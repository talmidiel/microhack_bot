const fs = require('fs');
const { debugMode } = require('../config.json');

module.exports = function logger(log) {
  if (!debugMode) return;

  const date = new Date();

  fs.appendFile(`./logs/${log.type}.log`, `\n${date.toDateString()} ${date.toTimeString()}: ${log.content}`, (err) => {
    if (err) {
      console.log(err);
    }
  });
};
