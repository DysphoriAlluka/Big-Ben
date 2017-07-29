exports.run = async (client, message) => {
    message.channel.bulkDelete(2);
}