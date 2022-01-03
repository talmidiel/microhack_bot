const {Client, Intents} = require("discord.js");
const {token} = require("../config.json");

class Bot {
    constructor(Client, Intents) {
        this.client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
        this.prefix = '//'
    }

    splitMessage() {
        const commandBody = this.message.content.slice(this.prefix.length)
        this.args = commandBody.split(' ')
        this.command = this.args.shift().toLowerCase()
    }

    ping() {
        this.message.reply(`Pong! ce message a une latence de ${ Date.now() - this.message.createdTimestamp}ms.`)
    }

    help() {
        this.message.reply("Voici la liste des commandes qui sont actuellement supportées par le bot :" +
            "\n\n\n     `//help` :   affiche ce message d'aide" +
            "\n\n     `//ping` :   repond pong au message et indique le temp que le bot a mit a repondre")
    }

    wrongCommand() {
        this.message.reply('désolé mais cette commande n\'est pas prise en charge par le bot,' +
            ' utilise `//help` pour afficher une liste des commandes supportées')
    }

    commandInterpreter() {
        switch (this.command) {
            case 'ping': this.ping(); break
            case 'help': this.help(); break
            default: this.wrongCommand()
        }
    }

    messageListener() {
        this.client.on("messageCreate", (message) => {
            if (message.author.bot) return
            if (!message.content.startsWith(this.prefix)) return
            this.message = message
            this.splitMessage()
            this.commandInterpreter()
        })
    }

    start(token) {
        this.messageListener()
        this.client.login(token)
    }
}

const bot = new Bot(Client, Intents, token);

bot.start(token)
