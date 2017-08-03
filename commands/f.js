exports.run = async (client, message, Discord) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.username} has paid their respects.`, 'https://a.safe.moe/TGUHH.png')
        .setColor('#4E373B')
        .setFooter(`Press F to pay your respects.`)
    message.channel.send({embed}).then(m=>m.react("🇫"))
}