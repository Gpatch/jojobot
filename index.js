const Discord = require("discord.js");
const { data } = require("./commands/roll.js");
const database_file = require("./database.js");
const { token } = require('./config.js');
const bot = new Discord.Client({
    intents:
     [
         Discord.Intents.FLAGS.GUILD_MEMBERS,
         Discord.Intents.FLAGS.GUILDS
     ]
});
require("./slash-register")(true)
let commands = require("./slash-register").commands;


bot.on('ready', async () => {
    console.log("The bot is online");
});


bot.on('interactionCreate', async interaction => {
    if(!interaction.isCommand) return;
    let name = interaction.commandName;
    let options = interaction.options;

    let commandMethod = commands.get(name);
    if (!commandMethod) return;
    await interaction.deferReply();

    commandMethod(bot, interaction)
});

bot.login(token)
