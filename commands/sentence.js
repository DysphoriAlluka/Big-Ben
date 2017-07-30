var txtgen = require('txtgen');

exports.run = async(client, message) => {
  let sentence = txtgen.sentence();
	   return message.channel.send(sentence);
};