exports.run = async (client, message, Discord, args) => {
    if(message.author.id !== '180050347589369856') return;
      let channelMessage = message.content.split(/\s+/g).slice(2).join(" ");
      let channelid = message.content.split(/\s+/g)[1]
        let channel = client.channels.get(`${channelid}`)
            channel.send(channelMessage);
}