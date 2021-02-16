module.exports = {
    name: 'info',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}info',

    execute(client, message) {
        message.channel.send({
            embed: {
            color: 15158332,
            title: "Informacje o bocie",
            description: `> **Działanie bota**

            <:bots:810575857722064918> Ping - (**${client.ws.ping}**ms🏓)
                ========================================
            <:add:810575360500432966> Debug - (**${client.voice.connections.size}** połączonych na kanałach głosowych✨)
                ========================================
            <:Servers:810580203055218698> Serwery - (**${client.guilds.cache.size}** serwerów obsługuje⚙) 

            > **Linki**

            <a:tv:810929594483605504> Serwer wsparcia: [Dołącz](https://discord.gg/A2t5Yx9R)
            <a:tv1:810930270676189225> Formularz zgłoszeń: [Klik](https://docs.google.com/forms/d/e/1FAIpQLSeOUTb8rDVLcbaiEvDHKIhXFBLV900id7ouex6FNaQNjionCQ/viewform)
            
            
            > **Autorzy Bota**
            
            <:developer_of_yuri:777481777148723250>_Rysi3K#7640 - Developer bota
            <:developer_of_yuri:777481777148723250>Asystencio#7145 -  Web Strona/Developer bota`,
        }
    })

    }
}