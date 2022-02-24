const {SlashCommandBuilder} = require("@discordjs/builders");
const { InteractionWebhook } = require("discord.js");
const standroles = require("../storage/standroles.js");
const db = require("../database.js");

const index = require("../index.js")

module.exports.data = new SlashCommandBuilder()
.setName("standremove")
.setDescription("removes the stand from the user");

module.exports.run = (bot, interaction) =>{
    let member = interaction.user.id;
    
    if(!(interaction.member.roles.cache.find(r => r.id === standroles.stand_user_role))){
        interaction.editReply({content: `You are not a stand user!`});
    }
    else{
        console.log(`Inside of remove ${member}`);



//            console.log(`HERE${st}`);
            //interaction.member.roles.remove(index.stand_id); // Stand role
            //interaction.member.roles.remove(db.getCategory(member)); //Stand category role
            //interaction.member.roles.remove(standroles.stand_user_role);  // STAND USER role
            //db.removeStand(member);

  //          interaction.editReply({content: `Stand has been removed!`});
            console.log('after reply');


            
    }
}