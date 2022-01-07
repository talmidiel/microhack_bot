const cron = require('cron');
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

    const cronJobs = [];
    cronJobs.push(new cron.CronJob('00 00 17 * * *', () => {
      client.channels.cache.get(statusChannel).send('hey <@&599355469391200275> '
        + '\n N\'oubliez pas que cette journée est validante ! '
        + '\n n\'oubliez pas de mettre vos liens github sur le dashboard thp et n\'oubliez pas de push vos derniers changements reguliérement (genre maintenant :wink:)').then(
        logger({
          type: 'process',
          content: 'successfully executed first validating cron job',
        }),
      );
    }));
    cronJobs.push(new cron.CronJob('00 00 21 * * *', () => {
      client.channels.cache.get(statusChannel).send('hey <@&599355469391200275> '
        + '\n N\'oubliez pas que cette journée est validante ! '
        + '\n n\'oubliez pas de mettre vos liens github sur le dashboard thp et n\'oubliez pas de push vos derniers changements reguliérement (genre maintenant :wink:)'
        + '\n bonne soirée !').then(
        logger({
          type: 'process',
          content: 'successfully executed second validating cron job',
        }),
      );
    }));
    cronJobs.push(new cron.CronJob('00 01 09 * * *', () => {
      client.channels.cache.get(statusChannel).send('hey <@&599355469391200275> '
        + 'des corrections ont lieu ajourd\'hui, alors one se leve et on prepare ces 4 appels :wink:'
        + 'bonne chance a vous, et bonne journée');
    }));
    cronJobs.forEach((cronJob) => {
      try {
        cronJob.start();
      } catch (err) {
        logger({
          type: 'error',
          content: `error while starting validating cron jobs:\n${err}`,
        });
      }
    });
    activated = true;

    new cron.CronJob('10 01 09 * * *', () => {
      cronJobs.forEach((cronJob) => {
        try {
          cronJob.stop().then(
            logger({
              type: 'process',
              content: 'successfully executed validating cron job cleaning',
            }),
          );
        } catch (err) {
          logger({
            type: 'error',
            content: `error while stoping validating cron jobs:\n${err}`,
          });
        }
      });
      activated = false;
    }).start();

    client.channels.cache.get(statusChannel).send(`messages de rappel de jour validant activés par <@${message.author.id}> ! (envoi a 17h et 21h)`);
  },
};
