exports.run = async (client, message, Discord) => {
    var randomNumber = Math.floor(Math.random() * 58) + 1  
    const embed = new Discord.RichEmbed()
        .setImage(`http://smug.moe/smg/${randomNumber}.png`)
        .setColour('#9D9DBD')
    message.channel.send({embed})
}