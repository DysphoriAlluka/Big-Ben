exports.run = async (client, message, args) => {
  let sayMessage = message.content.split(/\s+/g).slice(1).join(" ");
 	    message.delete().catch(O_o=>{})
        	return message.channel.send(sayMessage, {tts: true}).catch(console.error);
}