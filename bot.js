const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true}); // botnya tidak akan bisa mention @everyone
const config = require("./config.json"); // kita akan menaruh prefix dan token disini

bot.on("ready", async () => {
	console.log(`${bot.user.username} Online!`);
	bot.user.setActivity("with my Owner", {type: "PLAYING"});
});

bot.on("message", async message => {
	if (message.author.bot) return; // bot kita tidak akan menjawab jika command dikirim oleh bot lain
	if (message.channel.type === 'dm') return; // bot kita tidak akan menjawab jika kita menggunakan command di DM atau PM

	let prefix = config.prefix;
	let messageArray = message.content.split(" "); // command bisa disisipkan spasi
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	if (cmd === `${prefix}hello`) { // bukan ping tapi halo :U
		message.channel.send("Hello!");
	}

  if (cmd === `${prefix}botinfo`) {
    let bicon = bot.user.displayAvatarURL ;
    let botembed = new Discord.RichEmbed()
    .setAuthor("Bot Info")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created on", bot.user.createdAt);

    message.channel.send(botembed);
  }

  if (cmd === `${prefix}serverinfo`) {
		let sicon = message.guild.iconURL; // kalau server gunakan icon bukan displayAvatar
		let serverembed = new Discord.RichEmbed()
		.setAuthor("Server Info")
		.setColor("RANDOM")
		.setThumbnail(sicon)
		.addField("Server Name", message.guild.name) // nama dari guildnya
		.addField("Since", message.guild.createdAt) // tanggal dibuat guildnya
		.addField("You Joined", message.member.joinedAt) // tanggal kamu join guild
		.addField("Owner", message.guild.owner); // owner dari guild

		message.channel.send(serverembed);
	}

  if (cmd === `${prefix}hello`) { // bukan ping tapi halo :U
		message.channel.send("Hello!");
	}


});

bot.login(config.token);
