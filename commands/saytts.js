exports.run = async (client, message, args) => {
  let sayttsMessage = message.content.split(/\s+/g).slice(1).join(" ");
 	    message.delete().catch(O_o=>{})
        	return message.channel.send(sayttsMessage, {tts: true}).catch(console.error);
}