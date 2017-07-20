var txtgen = require('txtgen');

exports.run = async(client, message) => {
  let sentence = txtgen.sentence();
    message.delete().catch(O_o=>{}); 
	   return message.channel.send(sentence);
};