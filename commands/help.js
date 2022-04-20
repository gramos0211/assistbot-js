const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fs = require('node:fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get available commands and descriptions'),
	async execute(interaction) {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        let embeddedHelpMsg = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Help Menu")
            .setThumbnail("https://media2.giphy.com/media/l0Ex3lGUCkofpN5UQ/giphy.gif?cid=790b7611cffbbe0a7ce0534ba94deff2aaea442d28f3ad0e&rid=giphy.gif&ct=g")

        for (const file of commandFiles) {
            let command = require(`../commands/${file}`);

            embeddedHelpMsg.addField(
                `${command.data.name}`,
                `${command.data.description}`
            )
        }

        console.log(`${interaction.user.tag} asked for help`);
        await interaction.reply({ embeds: [embeddedHelpMsg] })
	},
};

