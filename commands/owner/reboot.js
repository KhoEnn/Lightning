const config = require('../../config.json')
exports.run = (client, message, args) => {

    if (message.author.id === '487698548935360513') {
        message.channel.send("Je reviens ^^")
        client.destroy()
        console.log('Arrêté')
        client.login(config.token)
    }
    else {
        message.channel.send("MDRRRRR t'as cru t'étais mon owner ?")
    }
}
exports.help = {
    name: "reboot",
    description: "Relancer le bot"
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["rb"]
}