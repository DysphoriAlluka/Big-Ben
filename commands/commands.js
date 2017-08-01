exports.run = (client, message, Discord) => {
    const embed = new Discord.RichEmbed()
        .setAuthor("Commands", client.user.displayAvatarURL)
        .setDescription(`Use --help <commandname> for more details.`)
        .setColor('B6D6E7')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter("Any message from the bot can be removed by reacting with a ⏲ emoji.")
        .addField("__Info:__", "`commands` `help` `support`")
        .addField("__Utility:__", "`bing` `colour` `nextbong` `time` `translate` `weather`")
        .addField("__Search:__", "`img` `wiki` `youtube`")
        .addField("__Fun:__", "`8ball` `cat` `insult` `rightthere` `sentence` `smug` `talk`")
        .addField("__NSFW:__", "**2D** `Danbooru` `Safebooru` `neko`\n\**3D** `ass` `boobs`")
    return message.channel.send({embed}).then(m=>m.react("⏲"))
}
