const {SlashCommandBuilder} = require("@discordjs/builders");
const { InteractionWebhook } = require("discord.js");
const standroles = require("../storage/standroles.js");
const db = require("../database.js");

module.exports.data = new SlashCommandBuilder()
.setName("roll")
.setDescription("rolls the stand");

module.exports.run = (bot, interaction) =>{
    let member = interaction.user.id;
    
    if(interaction.member.roles.cache.find(r => r.id === standroles.stand_user_role)){
        interaction.editReply({content: `You are already a stand user!`});
    }
    else{

        let stand_info;
        //const DiscCollection = db.DiscCollection;
        let acquired;
        //console.log(interaction.member.id);
        do{
            stand_info = standroles.stand_generator();
            let stand_id = stand_info[1];
            //console.log(stand_info[0]);
            acquired = db.checkAcquired(stand_id);
        }while(acquired == true);

        db.addStand(member, stand_info[1], stand_info[2],stand_info[0]);

        interaction.member.roles.add(stand_info[1]); // Stand role
        interaction.member.roles.add(stand_info[2]); //Stand category role
        interaction.member.roles.add(standroles.stand_user_role);  // STAND USER role

        interaction.editReply({content: `Stand: ${stand_info[0]}  has been acquired!`});
    }
}