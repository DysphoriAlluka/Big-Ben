const snekfetch = require('snekfetch')

exports.run = async (client, message, Discord) => {
    const res = await snekfetch.get('http://www.random.cat/meow')
    const image = res.body.file

    const embed = new Discord.RichEmbed()
        .setImage(image)
        .setFooter('http://www.random.cat ©', 'http://random.cat/random.cat-logo.png')
        .setColor('#71A3BE')
    message.channel.send({embed})
}