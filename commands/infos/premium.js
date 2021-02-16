module.exports = {
    name: 'premium',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}premium',

    execute(client, message) {
        message.channel.send({
            embed: {
                color: 15844367,
                title: 'Informacje na temat bota premium',
                description: `Informacje nie zostały jeszcze wdrożone!`,
                footer: `Informacje na temat premium`,
                timestamp: new Date(),
            }
        })
    }
}