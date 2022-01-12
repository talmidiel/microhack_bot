const puppeteer = require('puppeteer');
const fs = require('fs');

let url = 'https://devdocs.io/';

module.exports = {
  name: 'docs',
  description: 'permet de recuperer une documentation sur le site devdocs et de la renvoyer en pdf',
  format: '//docs language.objet.fonction',
  example: '//docs javascript.array.map',
  async execute(logger, client, message, args, Discord) {
    if (!args[0]) return message.reply('merci de saisir au moin un argument pour utiliser cette commande');

    await args[0].split('.').forEach((arg) => {
      if (arg === 'javascript') {
        url += `${arg}/global_objects/`;
      } else {
        url += `${arg}/`;
      }
    });

    const date = new Date().getTime();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });
    console.log(url)
    await page.pdf({path: `db/${date}.pdf`, format: 'a4'});

    await browser.close();

    await message.channel.send({
      files: [{
        attachment: `./db/${date}.pdf`,
        name: `${date}.pdf`,
      }],
    });

    fs.unlink(`db/${date}.pdf`, (err) => {
      logger({
        type: 'error',
        content: `error while executing //docs: ${err}`,
      });
    });
  },
};
