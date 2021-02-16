module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');


            message.channel.send({
                embed: {
                    color: 1752220,
                    author: { name: 'Pomoc komend' },
                    footer: { text: 'Oficjalny bot! Słuchaj bez przerwy!' },
                    fields: [
                        { name: '> U bota <a:error:810866376340013106>', value: infos },
                        { name: '> Komendy muzyczne <a:wumpus:753996808073773166>', value: music },
                    ],
                    timestamp: new Date(),
                    thumbnail: 'https://cdn.discordapp.com/attachments/799336280185372713/809874876386770994/images.png',
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Nie znalazłem tego polecenia !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Help pannel' },
                    footer: { text: 'Tymczasowy bot' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Znajdź informacje o podanym poleceniu.\nObowiązkowe argumenty `[]`, opcjonalne argumenty `<>`.',
                }
            });
        };
    },
};