exports.run = async(client, message, Discord) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`Commands`, client.user.displayAvatarURL)
        .setDescription(`There are unlisted, secret commands, use --help <commandname> for more details.\n\https://hastebin.com/orocoquzeb.md`)
        .setColor('B6D6E7')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Fun:__`, `insult, paragraph, sentence, talk`)
        .addField(`__Utility:__`, `bing, colour, img, nextbong, time, translate, weather, wiki`)
        .addField(`__Info:__`, `commands, help, support`)
    return message.channel.send({embed}).then(m=>m.react("⏲"))
}
