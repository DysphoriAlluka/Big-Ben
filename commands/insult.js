exports.run = (client, message) => {
    if(message.author.id === '180050347589369856') {
      message.delete().catch(O_o=>{}); 
      return message.channel.send(`${client.consts.insults[Math.round(Math.random() * (client.consts.insults.length - 1))]}`)
    }
    if(message.author.id !== '180050347589369856') {
      return message.channel.send(`${client.consts.insults[Math.round(Math.random() * (client.consts.insults.length - 1))]}`)
    }
}