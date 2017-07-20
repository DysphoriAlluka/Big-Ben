exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
 	    message.delete().catch(O_o=>{}); 
        	return message.channel.send(sayMessage).catch(console.error);
}
