const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

const shopFields = [
    {name:'Insult Generator 🔪', value: `Ω500 - Allows you to generate and target one person to receive emotional damage.`},
    {name:'Animal Encyclopedia 🐵', value: `Ω100 - Explore the wildnerness if you dare` },
    {name:'Telescope 🌌🔭', value: ` Ω1000 - Dare to venture into the vastness of space and witness it's inmense beauty`},
    {name:'Fortune Cookie 🥠', value: `Ω500 - Receive knowledge from the great minds of the past`},
    {name:'Ban Hammer 🔨', value: ` Ω5000 - Banish someone for being problematic or just bc you're bored. idc`},
    {name:'Friend-Shaped Bud 🥰', value: `Ω50 - Everyone needs a friend every now and then`}
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shop')
        .setDescription('Use your dumb money to buy and sell stuff')
        .addSubcommand(subcommand =>
            subcommand
                .setName('inventory')
                .setDescription('Show shop inventory')
        )
        .addSubcommand(subcommand => 
            subcommand
                .setName('buy')
                .setDescription('Buy an item')
                .addStringOption(itemName =>
                    itemName
                        .setName('item')
                        .setDescription('The name of the item you wish to purchase')
                        .addChoice(shopFields[0]['name'], shopFields[0].value)
                        .addChoice(shopFields[1]['name'], shopFields[1].value)
                        .addChoice(shopFields[2]['name'], shopFields[2].value)
                        .addChoice(shopFields[3]['name'], shopFields[3].value)
                        .addChoice(shopFields[4]['name'], shopFields[4].value)
                        .addChoice(shopFields[5]['name'], shopFields[5].value)
                        .setRequired(true))
                .addIntegerOption(amount => 
                    amount
                        .setName("amount")
                        .setDescription("The amount you wish to purchase")
                        .setMinValue(1)
                        .setRequired(true))
            ),
        
        // .addSubcommand(subcommand => 
        //     subcommand
        //         .setName('sell')
        //         .setDescription('Sell an item')
        //         .addStringOption(itemName =>
        //             itemName.setName('itemName')
        //                 .setDescription('The name of the item you wish to sell')
        //                 .setRequired(true))
        //         .addIntegerOption(amount => 
        //             amount
        //                 .setName("amount")
        //                 .setDescription("The amount you wish to sell")
        //                 .setMinValue(1)
        //                 .setRequired(true))
        //     )
    async execute(interaction) {
            
        if (interaction.options.getSubcommand() === 'list') {
            const shopMessage = new MessageEmbed()
                .setTitle(`Alfred's Shop of Underwhelming Wonders`)
                .setDescription(`Spend your hard earned money to buy useless tools for your personal enjoyment`)
                .addFields(
                    shopFields
                )

            await interaction.reply({embeds: [shopMessage]});
        }

        await interaction.reply('We are working on that. Check back later!');
    }
}