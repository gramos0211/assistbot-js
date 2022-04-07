const { MessageAttachment } = require('discord.js')

module.exports = {
	name: 'messageCreate',
	execute(message) {
        msgChannel = message.channel;
        cleanMsg = message.content.toLowerCase().split(" ");

        if (cleanMsg.includes("king")){
            msgChannel.send("you dropped this 👑");
        }

        if (cleanMsg.includes("republican")){
            msgChannel.send("ewwww 🤢🤮🤧😷");
        }

        if(cleanMsg.includes("huh")){
            const huhImg = new MessageAttachment(`./assets/animal-pics/huh_wuh.png`);
            msgChannel.send({files: [huhImg] })
        }
    
        if (cleanMsg.includes("sus") || cleanMsg.includes("sussy")){
            msgChannel.send("ඞ")
        }

        if (cleanMsg.includes("luz") || cleanMsg.includes("power") || cleanMsg.includes("luma")){
            const noLuzImg = new MessageAttachment(`./assets/no-luz.png`);
            msgChannel.send({files: [noLuzImg] })
        }
	},
};