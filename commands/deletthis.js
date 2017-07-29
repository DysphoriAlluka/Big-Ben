exports.run = async (client, message, discord) => {
    message.channel.bulkDelete(2);
}