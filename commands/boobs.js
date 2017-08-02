const snekfetch = require('snekfetch')

exports.run = async (client, message, Discord) => {
    if(!message.channel.nsfw) return message.channel.send('This is not an NSFW channel!').then(m => m.delete(5000));

    const id = [Math.floor(Math.random() * 10930)]
    const res = await snekfetch.get(`http://api.oboobs.ru/boobs/${id}`)
    const preview = res.body[0]["PREVIEW".toLowerCase()]
    const image = `http://media.oboobs.ru/${preview}`
        const embed = new Discord.RichEmbed()
            .setImage(image)
            .setColor('#CEA0A6')
    return message.channel.send({embed})
}