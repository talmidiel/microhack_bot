const cron = require('cron');
const motivations = require('../db/dailyMessage.json');
const {statusChannel} = require('../config.json');

let activated = false;

module.exports = {
  name: 'validating',
  description: 'permet de programmer le bot pour rappeler a tous le monde de mettre son github sur thp en envoyant un message a 17h et 21h',
  async execute(client, message) {
    if (activated) {
      message.reply('cette journée a déja eté declarée comme validante, veuillez attendre demain pour pouvoir en declarer une nouvelle');
      return;
    }

    const cronJobs = [];
    cronJobs.push(new cron.CronJob('00 35 01 * * *', () => {
      client.channels.cache.get(statusChannel).send('hey <@&599355469391200275> '
        + '\n N\'oubliez pas que cette journée est validante ! '
        + '\n n\'oubliez pas de mettre vos liens github sur le dashboard thp et n\'oubliez pas de push vos derniers changements reguliérement (genre maintenant :wink:)');
    }));
    cronJobs.push(new cron.CronJob('00 36 01 * * *', () => {
      client.channels.cache.get(statusChannel).send('hey <@&599355469391200275> '
        + '\n N\'oubliez pas que cette journée est validante ! '
        + '\n n\'oubliez pas de mettre vos liens github sur le dashboard thp et n\'oubliez pas de push vos derniers changements reguliérement (genre maintenant :wink:)'
        + '\n bonne soirée !');
    }));
    cronJobs.forEach((cronJob) => cronJob.start());
    activated = true;

    new cron.CronJob('30 36 01 * * *', () => {
      cronJobs.forEach((cronJob) => cronJob.stop());
      activated = false;
    }).start();

    client.channels.cache.get(statusChannel).send(`messages de rappel de jour validant activés par <@${message.author.id}> !`);
  },
};
