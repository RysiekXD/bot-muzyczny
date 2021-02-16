module.exports = {
    name: 'update',
    aliases: ['u'],
    category: 'Infos',
    utilisation: '{prefix}update',

    execute(client, message, args) {
        message.channel.send({
            embed:{
                color: 10181046,
                title: "Lista Aktualizacji Bota",
                description: `
                Brak daty - Dodano komende "update"<a:tak:810846416171040778>
                15.02.2021 - Dodano komende "loop", od teraz możesz słuchać muzyki w nieskończoność!<a:tak:810846416171040778>`,
            }
        })

    }
}