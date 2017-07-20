exports.run = async(client, message, Discord, args) => {
    var cleverbot = require("cleverbot-node");
    clbot = new cleverbot;
    clbot.configure({botapi: "CC30y25bSJBl1pLmgwxRZHmMUjA"});
    cleverbot.prepare(function() {});

    clbot.write(message.content, (response) => {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(response.output).catch(console.error);
        message.channel.stopTyping();
      }, Math.random() * (1 - 3) + 1 * 1000);
    });
  }
