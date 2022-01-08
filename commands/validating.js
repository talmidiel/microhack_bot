const schedule = require('node-schedule-tz');
const { statusChannel } = require('../config.json');

let activated = false;

module.exports = {
  name: 'validating',
  description: 'permet de programmer le bot pour rappeler a tous le monde de mettre son github sur thp en envoyant un message a 17h et 21h',
  async execute(logger, client, message) {
    if (activated) {
      message.reply('cette journée a déja eté declarée comme validante, veuillez attendre demain pour pouvoir en declarer une nouvelle');
      return;
    }

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    let executionDate = new Date(year, month, day, 17, 0, 0);

    schedule.scheduleJob('first reminder', executionDate, 'Europe/Paris', () => {
      client.channels.cache.get(statusChannel).send('hey <@&599355469391200275> '
        + '\n N\'oubliez pas que cette journée est validante ! '
        + '\n n\'oubliez pas de mettre vos liens github sur le dashboard thp et n\'oubliez pas de push vos derniers changements reguliérement (genre maintenant :wink:)');
      logger({
        type: 'process',
        content: 'successfully executed first validating cron job',
      });
    });

    executionDate = new Date(year, month, day, 21, 0, 30);
    schedule.scheduleJob('first reminder', executionDate, 'Europe/Paris', () => {
      client.channels.cache.get(statusChannel).send('hey <@&599355469391200275> '
        + '\n N\'oubliez pas que cette journée est validante ! '
        + '\n n\'oubliez pas de mettre vos liens github sur le dashboard thp et n\'oubliez pas de push vos derniers changements reguliérement (genre maintenant :wink:)'
        + '\n bonne soirée !');
      logger({
        type: 'process',
        content: 'successfully executed second validating cron job',
      });
    });

    executionDate = new Date(year, month, (day + 1), 9, 1, 0);
    schedule.scheduleJob('first reminder', executionDate, 'Europe/Paris', () => {
      client.channels.cache.get(statusChannel).send('hey <@&599355469391200275> '
        + 'des corrections ont lieu ajourd\'hui, alors one se leve et on prepare ces 4 appels :wink:'
        + '\nbonne chance a vous, et bonne journée');
      logger({
        type: 'process',
        content: 'successfully executed second validating cron job',
      });
      activated = false;
    });

    activated = true;
    client.channels.cache.get(statusChannel).send(`messages de rappel de jour validant activés par <@${message.author.id}> ! (envoi a 17h et 21h)`);
  },
};
