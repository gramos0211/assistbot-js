const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js')

const fs = require('fs');
const animalPics = fs.readdirSync('./assets/Snom')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('snom')
		.setDescription('A friend-shaped command!'),
	async execute(interaction) {
		let chosenFile = animalPics[Math.floor(Math.random() * animalPics.length)];
        const attachment = new MessageAttachment(`./assets/Snom/${chosenFile}`);

		console.log(`${interaction.user.tag} requested to witness the friend-shaped pokemon`);
		await interaction.reply({ files: [attachment]});
	},
};