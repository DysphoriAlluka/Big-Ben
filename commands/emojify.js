exports.run = (client, message) => {
    let emojified = message.content.split(/\s+/g).slice(1).join(" ");
    var emojifyTest = new Emojify.Emojify(emojified);
	if(!emojified) return message.channel.send('Please specify something for me to say.')
        	return message.channel.send(emojifyTest.emojify()).catch(console.error);
}