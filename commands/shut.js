exports.run = (client, message, Discord) => {
    if(message.author.id === '180050347589369856') {
      message.delete().catch(O_o=>{}); 
        const embed = new Discord.RichEmbed()
            .setColor('#95b7cb')
            .setImage(client.consts.shut[Math.round(Math.random() * (client.consts.shut.length - 1))])
            .setFooter('Shut™', 'https://a.safe.moe/WYu0x.png')
      return message.channel.send({embed});
    } else {
        const embed = new Discord.RichEmbed()
            .setColor('#95b7cb')
            .setImage(client.consts.shut[Math.round(Math.random() * (client.consts.shut.length - 1))])
            .setFooter('Shut™', 'https://a.safe.moe/WYu0x.png')
        return message.channel.send({embed});
    }
}