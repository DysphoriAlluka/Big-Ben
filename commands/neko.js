const snekfetch = require('snekfetch')

exports.run = async (client, message, Discord) => {
    if(!message.channel.nsfw && message.author.id != '180050347589369856') return message.channel.send('This is not an NSFW channel!');

    const res = await snekfetch.get(`http://nekos.life/api/lewd/neko`)
    const preview = res.body.neko
        const embed = new Discord.RichEmbed()
            .setImage(preview)
            .setColor('#D0D6E5')
    return message.channel.send({embed})
}
