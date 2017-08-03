exports.run = (client, message) => {
    return message.channel.send(client.consts.kaomoji[Math.round(Math.random() * (client.consts.kaomoji.length - 1))])
}