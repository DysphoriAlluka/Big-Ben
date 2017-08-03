exports.run = (client, message, Discord) => {
    let mentionedShut = message.mentions.users.first();
        const embed = new Discord.RichEmbed()
            .setColor('#95b7cb')
            .setImage(client.consts.shut[Math.round(Math.random() * (client.consts.shut.length - 1))])
            .setFooter(`Shut™ ${mentionedShut.tag}`, 'https://a.safe.moe/WYu0x.png')
      return message.channel.send({embed});
}