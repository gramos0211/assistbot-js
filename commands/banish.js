const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, MessageEmbed, MessageAttachment } = require('discord.js');

const attachment = new MessageAttachment('./assets/baka-dead.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('banish')
		.setDescription('Banish your enemies to the Shadow Realm™')
		.addUserOption(option =>
            option
                .setName('target')
                .setDescription('someone\'s bitch ass')
                .setRequired(true)
        ),
	permissions: [Permissions.FLAGS.MODERATE_MEMBERS],
	async execute(interaction) {
		const user = interaction.options.getUser(`target`);
		const member = await interaction.guild.members.fetch(user.id);
		if(!member){
			return await interaction.reply(`${user} not in server`);
		}

		const max = 20;
		const min = 1;

		let duration = Math.floor(Math.random() * (max-min) + min);

		const memberMsg = new MessageEmbed()
			.setTitle(`Take this time to reevaluate your actions.`)
			.setDescription(`You will be allowed to rejoin society in ${duration} minutes\nGet help: https://www.addictioncenter.com/community/porn-addiction-hotlines-resources/`)
			.setColor(`#7289da`)
			.setImage(`https://c.tenor.com/ZvMZoQy5hkMAAAAC/fbi-fbi-open-the-door.gif`);
			

		const serverMsg = new MessageEmbed()
			.setTitle(`Banished to horny jail!`)
			.setDescription(`${user} will return in ${duration} minutes`)
			.setImage(`https://pbs.twimg.com/media/EnhcMHsUwAw0PFy.jpg`);
		
		
		console.log(interaction.guild.me.permissions.has(Permissions.FLAGS.MODERATE_MEMBERS));

		try {
			await member.send({embeds: [memberMsg]});
			await member.send({files: [attachment]});
		} catch (error) {
			console.log(error);
		}

		try {
			await member.timeout((duration*60*1000), "Banished for transgressions of the horny nature");
			await interaction.reply({embeds: [serverMsg]});
		} catch (error) {
			console.log(error)
		}
	},
};