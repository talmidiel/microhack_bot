<h1 align="center">Welcome to MicroHack Bot Readme</h1>
<p>
  <a href="https://github.com/talmidiel/microhack_docs_bot/blob/master/LICENSE.txt" target="_blank">
  </a>
</p>

[![Maintainability](https://api.codeclimate.com/v1/badges/761f491a8316b47be429/maintainability)](https://codeclimate.com/github/talmidiel/microhack_docs_bot/maintainability)
![GitHub](https://img.shields.io/github/license/talmidiel/microhack_docs_bot)
![Custom badge](https://img.shields.io/badge/node.js-v16.13.1-blue?style=flat&logo=node.js)
![Custom badge](https://img.shields.io/badge/discord.js-v13.5.0-blue?style=flat&logo=discord)
</br>
> This is bot is a project I made during my free time when I was following my web dev bootcamp.
> it was originally intended to deliver docs for my coding team when we needed it, but quickly became member of the team that helped us with task that we didn't imagine we needed

## Prerequisites

- node.js (>=v16.17.0)
- discord.js (>=v13.5.0)

## How to install

- clone this repository
- create a new bot app on discord dev dashboard
- cd to the bot directory
- make the install script executable : `# chmod u+x install.sh`
- use it to install the bot, answer the questions and your all set up : `./install.sh`
- now launch the bot using `$ node main.js`
- if you want it to run when terminal is closed you can run it using nohup : `nohup node main.js`
- if you are deploying to EC2 use screen to launch it and be able to logout : 
```shell
$ node main.js
$ screen #then hit ctrl + a then d
$ logout
```


## Adding this bot to your server
 for now, the bot is only made for use by my team, but you can follow the installation instructions to install the project and launch it to your server

## Techs used

- node.js
- javascript
- discord.js
- AWS EC2 for deployment (under ubuntu 20.04 LTS)
- cron services with node-schedule-tz
- puppeteer for the DevDocs scrapper

## Author

👤 **Anthony Charpenay**

* Github: [@talmidiel](https://github.com/talmidiel)
* Linkedin: [@Anthony Charpenay](https://www.linkedin.com/in/anthony-charpenay-a6b739210/)

## 🤝 Contributing
you can feel free to fork this repo and try to tweak this project, however i wont accept direct contrtibutions to this project as i want to keep it personnal

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Anthony Charpenay](https://github.com/talmidiel).
<br />
This project is [MIT](https://github.com/talmidiel/microhack_docs_bot/blob/master/LICENSE.txt) licensed.

***
_Base template for this README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
