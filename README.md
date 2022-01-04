<h1 align="center">Welcome to Microhack Docs Bot Readme</h1>
<p>
  <a href="https://github.com/talmidiel/microhack_docs_bot/blob/master/LICENSE.txt" target="_blank">
  </a>
</p>

[![Maintainability](https://api.codeclimate.com/v1/badges/761f491a8316b47be429/maintainability)](https://codeclimate.com/github/talmidiel/microhack_docs_bot/maintainability)
![GitHub](https://img.shields.io/github/license/talmidiel/microhack_docs_bot)
![Custom badge](https://img.shields.io/badge/node.js-v17.3.0-blue?style=flat&logo=node.js)
![Custom badge](https://img.shields.io/badge/discord.js-v13-blue?style=flat&logo=discord)
</br>
> This is bot is a project I made during my free time when I was following my web dev bootcamp.
> it's task is to deliver the docs need by my team directly inside the discord server to avoid having to search back the whole server to find it

## Prerequisites

- node.js (v17+)
- discord.js (v13+)

## How to install

- clone this repository
- create a new bot app on discord dev dashboard
- install the base packages using `$ npm install`
- create the config.json file and put your discord bot token here :
```json 
// config.json
{ 
  "token": "your_token_goes_here"
}
```
- create the db folder and create the base files :

```json
// db/last_motivation_date.json
{
  "lastSent": "0"
}
// db/motivation_messages.json
{
  "messages": ["some random messages"]
}
```
- now launch the bot using `$ node bot/main.js`
- if you want it to run when terminal is closed you can install forever using npm :
```shell
$ npm install forever -g
$ forever -o output.log -e error.log start bot/main.js
```

## Adding this bot to your server
 for now, the bot is only made for use by my team, but you can follow the installation instructions to install the project and launch it to your server

## Techs used

- node.js
- javascript
- discord.js
- AWS EC2 for deployment (under ubuntu 20.04 LTS)

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
