exports.run = (client, message, Discord) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} has paid their respects.`, message.author.displayAvatarURL)
        .setColor('#4E373B')
        .setFooter(`Press F to pay 𝐲𝐨𝐮𝐫 respects.`)
    message.channel.send({embed}).then(m=>m.react("🇫"))
}