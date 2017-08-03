exports.run = (client, message, Discord) => {
    let mentionedShut = message.mentions.users.first();
    if(!mentionedShut) {
        const embed = new Discord.RichEmbed()
            .setColor('#95b7cb')
            .setImage(client.consts.shut[Math.round(Math.random() * (client.consts.shut.length - 1))])
            .setFooter(`Shut™`, 'https://a.safe.moe/WYu0x.png')
        return message.channel.send({embed});
    } else {
        const embed = new Discord.RichEmbed()
            .setColor('#95b7cb')
            .setImage(client.consts.shut[Math.round(Math.random() * (client.consts.shut.length - 1))])
            .setFooter(`@${mentionedShut.username}, shut™`, 'https://a.safe.moe/WYu0x.png');
        return message.channel.send({embed});
    }
}