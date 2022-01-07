const fs = require('fs');
const { debugMode } = require('../config.json');

module.exports = function logger(log) {
  const date = new Date();

  if (log.type === 'process') {
    if (!debugMode) return;
    fs.appendFile('./logs/process.log', `\n${date.toDateString()} ${date.toTimeString()}: ${log.content}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else if (log.type === 'error') {
    fs.appendFile('./logs/errors.log', `\n${date.toDateString()} ${date.toTimeString()}: ${log.content}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};
