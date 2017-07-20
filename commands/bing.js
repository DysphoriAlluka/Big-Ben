exports.run = async(client, message) => {
  message.channel.send('Bonging...').then(sent => {
    sent.edit(`Bong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`)
  })
};