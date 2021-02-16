module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale głosowym !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Obecnie brak muzyki !`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`${client.emotes.success} - Tryb powtarzania **wyłączony** !`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`${client.emotes.success} - Tryb powtarzania **włączone** cała kolejka będzie się powtarzać bez końca !`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`${client.emotes.success} - Tryb powtarzania **wyłączone** !`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`${client.emotes.success} - Tryb powtarzania **włączone** aktualna muzyka będzie powtarzana w nieskończoność !`);
            };
        };
    },
};