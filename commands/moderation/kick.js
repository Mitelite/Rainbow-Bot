module.exports = {
	name: 'kick',
	cooldown: '10',
	description: 'To kick a member.',
	execute(message) {
	        const discord = require('discord.js')

	        const prefix = '%'
	        const args = message.content.slice(prefix.length).split(' ');
	        msg = message.channel
	        channel = message.channel
	        member = message.member

            if (!member.roles.cache.has('940549637981483058')) {
                return message.reply("`You don't have permission to execute this command!`");
            }
            if (!message.mentions.users.size) {
            	return message.reply('`You forgot the user you want to kick! Arg: %kick [User] [Reason]`');
            }
            const TaggedUser = message.mentions.users.first();
            const Target = message.mentions.members.first();
            let kReason = args.join(" ").slice(27);

            if (!kReason) {
                kReason = " No Reason Has Given"
            }

            Target.kick(kReason)
            console.log(`${TaggedUser.username}#${TaggedUser.discriminator} was kicked |${kReason}`)

            //kick embed
            const kEmbed = new discord.MessageEmbed()
                .setColor('#90ee90')
                .setDescription(`**${TaggedUser.username}${TaggedUser.discriminator} was kicked** |${kReason}.`)

            //send it
            channel.send({ embeds: [kEmbed] });
	},
};