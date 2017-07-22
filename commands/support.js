exports.run = async(client, message, Discord, args) => {
    const notifyChannel = '198399488614727680'
    var channel = client.channels.get(notifyChannel)
    let supportMessage = message.content.split(/\s+/g).slice(1).join(" ");
    if (!supportMessage) return message.channel.send(`Please add an issue to your message.`);
    const embed = new Discord.RichEmbed()
        .setAuthor(`${message.member.user.tag}`, message.member.user.displayAvatarURL)
    	.setColor('48886D')
        .setTimestamp()
        .setFooter(`Guild ID: ${message.guild.id}`)
 	    .addField('Someone has requested support in ' + message.guild.name + ', ' + message.channel.name,
    	supportMessage )
 	channel.send({embed})
        return message.channel.send('Your message/request has been sent. You will receive a reply/friend request in no less than a day, given that it is a serious issue.')
}