const snekfetch = require('snekfetch')

exports.run = async (client, message, Discord) => {
    if(!message.channel.nsfw && message.author.id != '180050347589369856') return message.channel.send('This is not an NSFW channel!').then(m => m.delete(5000));

    const res = await snekfetch.get(`http://nekos.life/api/lewd/neko`)
    const preview = res.body.neko
        const embed = new Discord.RichEmbed()
            .setImage(preview)
            .setColor('#A187E0')
            .setFooter('http://nekos.life', 'https://a.safe.moe/3XYZ6.gif')
    return message.channel.send({embed})
}