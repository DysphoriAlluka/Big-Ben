exports.run = (client, message, Discord, args) => {
    if(message.author.id !== '180050347589369856') return message.channel.send(`Only the bot owner can use this command.`);
    if(message.guild.id !== '198399488614727680') return message.channel.send(`This command can only be used in Big Ben's server.`)
    try {
      let channelMessage = message.content.split(/\s+/g).slice(2).join(" ");
      if(!channelMessage) return message.channel.send('There isn\'t anything for me to send.')
      let channelid = message.content.split(/\s+/g)[1]
        let channel = client.channels.get(`${channelid}`)
            channel.send(channelMessage);
            message.channel.send('Message sent successfully.')
    } catch(err) {
      message.channel.send(`There was an error sending your message. Invalid parameters.`)
    }
}