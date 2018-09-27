exports.run = (client, message) =>{
        if(message.author.id == '487698548935360513') {
            message.channel.send(':gear: **Arrêt en cours...**').then(() => {
                console.log("Je me suis endormis ! Bonne nuit bastien !")
                client.destroy();
                process.exit()   
            })
        }
}
exports.help = {
    name: "logout",
    description: "Eteindre le bot"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["lg"]
}