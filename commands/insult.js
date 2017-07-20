exports.run = async (client, message) => {
    message.delete().catch(O_o=>{}); 
      message.channel.send(`${client.consts.insults[Math.round(Math.random() * (client.consts.insults.length - 1))]}`
  )
}
