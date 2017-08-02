exports.run = (client, message, Discord) => {
    const embed = new Discord.RichEmbed()
        .setAuthor("Commands", client.user.displayAvatarURL)
        .setDescription(`Use --help <commandname> for more details.`)
        .setColor('B6D6E7')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter("Any message from me can be removed by reacting with a ⏲ emoji.")
        .addField("__Info:__", "`commands` `help` `nextbong` `support`")
        .addField("__Utility:__", "`bing` `colour` `time` `translate` `weather`")
        .addField("__Search:__", "`img` `wiki` `youtube`")
        .addField("__Fun:__", "`8ball` `cat` `insult` `meme` `rightthere` `smug` `talk`")
        .addField("__NSFW:__", "**2D** `Danbooru` `Safebooru` `hentai` `hentaiirl` `neko`\n\**3D** `ass` `boobs` `nsfwgif`")
    return message.channel.send({embed}).then(m=>m.react("⏲"))
}
