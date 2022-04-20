const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js')

const fs = require('fs');
const animalPics = fs.readdirSync('./assets/animal-pics/')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('whos-that-animal')
		.setDescription('Replies with random animal picture.'),
	async execute(interaction) {
		let chosenFile = animalPics[Math.floor(Math.random() * animalPics.length)];
        const attachment = new MessageAttachment(`./assets/animal-pics/${chosenFile}`);

		console.log(`${interaction.user.tag} requested to view a random animal`);
		await interaction.reply({ files: [attachment]});
	},
};