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

        for (const file of commandFiles) {
            let command = require(`../commands/${file}`);

            embeddedHelpMsg.addField(
                `${command.data.name}`,
                `${command.data.description}`
            )
        }

        await interaction.reply({ embeds: [embeddedHelpMsg] })
	},
};

