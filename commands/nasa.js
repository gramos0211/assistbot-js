const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require("node-fetch")

const nasaURL = "https://api.nasa.gov/planetary/apod?api_key=";
const NASA_KEY = process.env.NASA_KEY;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nasa-pod')
		.setDescription(`Replies with Nasa's Picture of the Day!`),
	async execute(interaction) {
        let nasaData = {};
        await fetch(nasaURL+NASA_KEY)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                nasaData=data;
            })
            .catch(error => console.log(error))
            

        const embed = new MessageEmbed()
                .setColor("#707070")
                .setTitle(nasaData['title'])
                .setAuthor({name: nasaData["copyright"]})
                .setDescription(`Date: ${nasaData["date"]}\n${nasaData["explanation"]}`)
                .setImage(nasaData["url"])
                .setThumbnail(nasaData["url"]);
        await interaction.reply({ embeds: [embed] })
        
	},
};