var txtgen = require('txtgen');

exports.run = async (client, message) => {
  let article = txtgen.article();
    message.delete().catch(O_o=>{}); 
    	message.channel.send(article);
}
