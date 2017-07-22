exports.run = async (client, Discord, message) => {
    const notifyChannel = '198399488614727680'
    var channel = client.channels.get(notifyChannel)
    let supportMessage = message.content.split(/\s+/g).slice(1).join(" ");
    if (!supportMessage) return message.channel.send(`Please add an issue to your message.`);
    const embed = new Discord.RichEmbed()
        .setAuthor(`${message.member.user.tag}`, message.member.user.displayAvatarURL)
        .setTitle(`Someone has requested support.`)
    	.setColor('2C2A51')
        .setTimestamp()
        .setFooter(`Guild ID: ${guild.id}`)
 	    .addField(message.guild.name + ', ' + message.channel.name,
    	supportMessage )
 	channel.send({embed})
        return message.channel.send('Your message has been sent. You will receive a reply in no less than a day, given that it is a serious issue.')
}