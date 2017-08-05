exports.run = async (client, message, Discord, args) => {
    if(!args) {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} has paid their respects.`, message.author.displayAvatarURL)
        .setColor('#4E373B')
        .setFooter(`Press F to pay 𝐲𝐨𝐮𝐫 respects.`)
    return message.channel.send({embed}).then(m=>m.react("🇫"))
    } else {
        const respect = args.join(" ");
        const embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.username} has paid their respects to ${respect}.`, message.author.displayAvatarURL)
            .setColor('#4E373B')
            .setFooter(`Press F to pay 𝐲𝐨𝐮𝐫 respects.`)
        return message.channel.send({embed}).then(m=>m.react("🇫"))
    }
}