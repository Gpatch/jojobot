const {SlashCommandBuilder} = require("@discordjs/builders")

module.exports.data = new SlashCommandBuilder()
.setName("mick")
.setDescription("kick the user")
.addUserOption(option => option.setName("person").setDescription("person to kick"));

module.exports.run = (bot, interaction) =>{
    interaction.editReply({
        content: "Trying to kick"
    })
}