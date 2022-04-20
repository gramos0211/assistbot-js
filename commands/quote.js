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
                console.log('Quote API data successfully retrieved');
                quote_text = data[0]['q'];
                quote_author = data[0]['a'];
            })
            .catch(error => console.log(error))
        
        console.log(`${interaction.user.tag} requested a quote`);
		await interaction.reply(`"${quote_text}" -${quote_author}`);
	},
};