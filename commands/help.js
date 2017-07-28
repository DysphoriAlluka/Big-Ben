exports.run = async (client, message, Discord) => {
    const embed = new Discord.RichEmbed()
  	.setAuthor(`BigBen`, client.user.displayAvatarURL)
  	.setColor('54719E')
    .setThumbnail(client.user.displayAvatarURL)
	.setFooter(`Contact Mako#8739 if you have any feedback, issues, or are in need of support. Any message from the bot can be removed by reaction with a ⏲ emoji.`)
    .setDescription('Hi! My name is Ben and I\'m a bot created to say bong every hour in UTC!')
    .addField(`__Status:__`, `Online | Currently still in development` )
    .addField(`__Invite Link:__`, `https://goo.gl/rpihva`)
    .addField(`__Commands:__`, `My prefix is -- \n You can find a list of my commands as of now here: \n   https://hastebin.com/duxeduqiwa.md `)
    .addField(`__Support:__`, `DM <@180050347589369856> for help. \n You can join this server https://discord.gg/zE9ZSQz to be imprisoned until i get to you. \n  Or use --support [message] to send a support message.`)
    .addField(`__Additional Info:__`, `This bot is based purely on Voctor's original Big Ben bot. Seeing it offline all the time was devastating, to say the least. Hence the creation of this bootleg, deepfried, Ben. All credits go to where it's due.`, true);
 	message.channel.send({embed}).then(m=>m.react("⏲"))
}