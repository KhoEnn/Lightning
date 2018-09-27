const config = require('../../config.json')
const Discord = require("discord.js")
exports.run = (client, message, args) =>{
    
    client.user.setActivity(` &h |&help | ${client.users.size} utilisateurs | ${client.guilds.size} serveur `, {type: "LISTENING"});
    client.user.setStatus("dnd");
var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("UpdateGame", client.user.avatarURL)
    .setDescription(":video_game: Vous avez rechargé le jeu du bot.")
    .setFooter(client.user.username+" - by KhoEn (Administrateur LBG)")
message.channel.sendEmbed(embed);
}
exports.help = {
    name: "updategame",
    description: "Raffraîchir le message de statut du bot."
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ug"]
}