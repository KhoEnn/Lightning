const Discord = require('discord.js')

exports.run = (client, message) => {

    var suggestargs = message.content.split().toString().slice(9)
    if(!message.guild.id === "374986045458087951") return;

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
        return message.channel.send("Vous ne pouvez pas utiliser cette commande.")
    }

    if(!suggestargs) {
        message.channel.send("Merci de préciser les arguments de votre suggestion.")
    }

    else {
        let suggestguild = client.guilds.get("467258216485617664")
        let suggestcha =  suggestguild.channels.get("468515448191975453")

        let guildicon = message.guild.iconURL
        let suggestdate = message.createdAt.toString().split(" ")
        let useravatar = message.author.avatarURL
    
        var suggestembed = new Discord.RichEmbed()
            .setColor("7EBCAD")
            .setAuthor(`Nouveau suivis par ${message.author.username}#${message.author.discriminator} !`, guildicon)
            .addField("Date du suivis :", suggestdate[0] + ' ' + suggestdate[2] + ' ' + suggestdate[1] + ' ' + suggestdate[3] + ", " + suggestdate[4])
            .addField('Argumentation  du suivis :', suggestargs)
            .setThumbnail(useravatar)
            .setTimestamp(new Date)
            .setFooter(client.user.username, client.user.avatarURL)
        suggestcha.send(suggestembed).then(suggestembed => {
        message.channel.send("Votre suivis a bien été envoyée !")
                console.log("ok")
            })
        }
}
exports.help = {
    name: "suivis",
    description: "Connaître le suivis d'un joueur."
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["suivis"]
}