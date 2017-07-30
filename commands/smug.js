exports.run = async (client, message, Discord) => {
    var randomNumber = Math.floor(Math.random() * 58) + 1  
    const embed = new Discord.RichEmbed()
        .setImage(`http://smug.moe/smg/${randomNumber}.png`)
    message.channel.send({embed})
}