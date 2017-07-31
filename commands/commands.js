exports.run = (client, message, Discord) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`Commands`, client.user.displayAvatarURL)
        .setDescription(`Use --help <commandname> for more details.\n\ [Command List](${client.consts.commandlink})`)
        .setColor('B6D6E7')
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(`Any message from the bot can be removed by reacting with a ⏲ emoji.`)
        .addField(`__Info:__`, `commands, help, support`)
        .addField(`__Utility:__`, `bing, colour, img, nextbong, time, translate, weather, wiki, youtube`)
        .addField(`__Fun:__`, `8ball, cat, insult, paragraph, rightthere, sentence, smug, talk`)
    return message.channel.send({embed}).then(m=>m.react("⏲"))
}
