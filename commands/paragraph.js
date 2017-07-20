var txtgen = require('txtgen');

exports.run = async (client, message) => {
  let paragraph = txtgen.paragraph();
    message.delete().catch(O_o=>{}); 
     return message.channel.send(paragraph)
}
