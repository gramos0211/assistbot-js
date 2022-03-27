const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require("node-fetch")

const quoteURL = "http://zenquotes.io/api/random"

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Bot dispenses wisdom'),
	async execute(interaction) {
        await fetch(quoteURL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                quote_text = data[0]['q'];
                quote_author = data[0]['a'];
            })
            .catch(error => console.log(error))
		await interaction.reply(`"${quote_text}" -${quote_author}`);
	},
};