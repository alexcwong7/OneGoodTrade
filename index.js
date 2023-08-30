const Discord = require('discord.js');
const client = new Discord.Client();

const server = "One Good Trade";
const logo = "https://i.ibb.co/y09mfLF/one-good-trade.gif";
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OUTPUTS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
const outputWatchlist = '768932323583983617';
const outputTechnicalAnalysis = '982414224221409280';

const outputPriceSpikes = '982373953676935168';
const outputHighLows = '982373327152762881';
const outputAnalystRatings = '982373376083497110';
const outputUnusualOptions = '982373395297607680';

const outputMarketNews = '982373992432275456';
const outputAIOptions = '982744647354953798';
const outputAIStocks = '982744674135572511';
const outputAICrypto = '982744802774900786';



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SEND MESSAGE FUNCTIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Market Trades:
function watchlist(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		
		if(embed.title.includes("Weekly Watchlist")) {
			return;
		}
		
		newEmbed.setColor("#ff0000");
		newEmbed.setTitle(embed.title);
		newEmbed.setDescription(embed.description);
		
		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();
		
		const channel = client.channels.cache.find(channel => channel.id === outputWatchlist);
		let ping = "<@&982378654115987496>";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}

function technicalAnalysis(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		let title = embed.title;
		let description = embed.description; 
		let imgStr = "";
		
		if(embed.image !== null) {
			let img = embed.image.url;
			newEmbed.setImage(img);
		}
		if(title !== null) {
			newEmbed.setTitle(embed.title);
		}
		if(description !== null) {
			newEmbed.setDescription(embed.description);
		}
		
		newEmbed.setColor("#ff0000");

		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();
		
		const channel = client.channels.cache.find(channel => channel.id === outputTechnicalAnalysis);
		let ping = "<@&982378682037469185>";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}


function unusualOptions(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		
		newEmbed.setColor(embed.color);
		newEmbed.setTitle(embed.title);
		newEmbed.setDescription(embed.description);
		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();
		
		const channel = client.channels.cache.find(channel => channel.id === outputUnusualOptions);
		let ping = "";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}

// Best Stocks:
function priceSpikes(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		
		newEmbed.setColor(embed.color);
		newEmbed.setTitle(embed.title);
		newEmbed.setDescription(embed.description);
		
		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();
		
		const channel = client.channels.cache.find(channel => channel.id === outputPriceSpikes);
		let ping = "";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}

function highLows(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		
		newEmbed.setColor(embed.color);
		newEmbed.setTitle(embed.title);
		newEmbed.setDescription(embed.description);
		
		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();
		
		const channel = client.channels.cache.find(channel => channel.id === outputHighLows);
		let ping = "";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}

function analystRatings(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		
		newEmbed.setColor(embed.color);
		newEmbed.setTitle(embed.title);
		newEmbed.setDescription(embed.description);
		
		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();
		
		const channel = client.channels.cache.find(channel => channel.id === outputAnalystRatings);
		let ping = "";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}


// Market Trades Testing:
function aiOptions(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
	
		let symbol = embed.fields[0].value;
		let strike = embed.fields[1].value;
		let expiration = embed.fields[2].value;
		let type = embed.fields[3].value;
		let buysell = embed.fields[4].value;
		let confidence = embed.fields[5].value;
		let premiums = embed.fields[6].value;
		let volume = embed.fields[7].value;
		let oi = embed.fields[8].value;
		let tracking = "[Click Here](" + embed.fields[9].value + ")";

		if(parseFloat(confidence) < 70) {
			return;
		}
		
		let strikeDecimals = strike.split(".");
		if(strikeDecimals[1] === "0") {
			strike = strikeDecimals[0];
		}
		else {
			strike = parseFloat(strike).toFixed(2);
		}
		
		let description = "";
		if(type === "Put" && buysell === "Buy") {
			newEmbed.setColor("#ff0000");
			newEmbed.setTitle("BUY to OPEN");
			description = "🟢 **BTO**: " + symbol + " $" + strike + " Put " + expiration + "\n\n 🟠 **Tracking Link**: " + tracking;
		}
		else if(type === "Call" && buysell === "Sell") {
			newEmbed.setColor("#ff0000");
			newEmbed.setTitle("SELL to OPEN");
			description = "🟢 **STO**: " + symbol + " $" + strike + " Covered Call " + expiration + "\n\n 🟠 **Tracking Link**: " + tracking;
		}
		else if(type === "Call" && buysell === "Buy") {
			newEmbed.setColor("#00db2e");
			newEmbed.setTitle("BUY to OPEN");
			description = "🟢 **BTO**: " + symbol + " $" + strike + " Call " + expiration + "\n\n 🟠 **Tracking Link**: " + tracking;
		}
		else if(type === "Put" && buysell === "Sell") {
			newEmbed.setColor("#00db2e");
			newEmbed.setTitle("SELL to OPEN");
			description = "🟢 **STO**: " + symbol + " $" + strike + " Cash Secured Put " + expiration + "\n\n 🟠 **Tracking Link**: " + tracking;
		}
		else {
			return;
		}

		newEmbed.setDescription(description + "\n\n" + embed.description + "\n\nNote: This is just a suggestion. You are responsible for entry and exit!");
		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();

		const channel = client.channels.cache.find(channel => channel.id === outputAIOptions);
		let ping = "";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}

function aiStocks(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		
		let notes = embed.description;
		let symbol = embed.fields[0].value;
		let entry = parseFloat(embed.fields[1].value).toFixed(2);
		let position = embed.fields[2].value;
		let target = parseFloat(embed.fields[3].value).toFixed(2);
		let stoploss = parseFloat(embed.fields[4].value).toFixed(2);

		if(position === "Short") {
			return;
		}
		else if(position === "Long") {
			newEmbed.setColor("#00db2e");
			contract = "__call__ options";
		}
		else {
			return;
		}
		
		newEmbed.setTitle("$" + symbol + ": " + notes + " (" + position + ")");
		newEmbed.setDescription("⚪ **Ticker**: " + symbol + "\n🟡 **Entry**: $" + entry + "\n🟢 **Target**: $" + target + "\n🔴 **Stoploss**: $" + stoploss + "\n\n*Can buy __shares__ or " + contract + "*\n\nNote: This is just a suggestion. You are responsible for entry and exit!");

		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();

		const channel = client.channels.cache.find(channel => channel.id === outputAIStocks);
		let ping = "";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}

function aiCrypto(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		let symbol = embed.fields[0].value;
		let entry = embed.fields[1].value;
		let position = embed.fields[2].value;
		let target = embed.fields[3].value;
		let stoploss = embed.fields[4].value;

		if(position === "Short") {
			newEmbed.setColor("#ff0000");
		}
		else {
			newEmbed.setColor("#00db2e");
		}
		
		let entryDecimals = entry.split(".");
		if(entryDecimals[1] === "0") {
			entry = entryDecimals[0];
		}
		else {
			entry = parseFloat(entry).toFixed(2);
		}
		
		let targetDecimals = target.split(".");
		if(targetDecimals[1] === "0") {
			target = targetDecimals[0];
		}
		else {
			target = parseFloat(target).toFixed(2);
		}
		
		let stopDecimals = stoploss.split(".");
		if(stopDecimals[1] === "0") {
			stoploss = stopDecimals[0];
		}
		else {
			stoploss = parseFloat(stoploss).toFixed(2);
		}
		
		newEmbed.setTitle(symbol + ": " + embed.description);
		newEmbed.setDescription("**🔵 Coin**: " + symbol + "\n**🟡 Entry**: $" + entry + "\n**🟢 Target**: $" + target + "\n**🔴 Stoploss**: $" + stoploss);
		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();

		const channel = client.channels.cache.find(channel => channel.id === outputAICrypto);
		let ping = "";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}

function marketNews(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();

		let symbol = embed.fields[0].value;
		let source = embed.fields[1].value;
		let headline = embed.fields[2].value;
		let url = embed.fields[3].value;
		
		let msg = headline.toUpperCase();
		if(msg.includes("RATING")) {
			return;
		}
		
		newEmbed.setTitle(symbol + " News");
		newEmbed.setDescription(headline + "\n" + url);

		newEmbed.setFooter(server, logo);
		newEmbed.setTimestamp();
		newEmbed.setColor("#fffffd");
		
		const channel = client.channels.cache.find(channel => channel.id === outputMarketNews);
		let ping = "";
		channel.send({"content": ping, "embed": newEmbed.toJSON()});
	});
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INPUTS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let inputs = new Map([
	// Market Trades:
	['816165815069573120', watchlist],
	['880870915594932334', technicalAnalysis],
	['847248503133962240', unusualOptions],
	
	// Best Stocks:
	['948439071401844797', priceSpikes],
	['880733041209769994', highLows],
	['948508647942656031', analystRatings],
	
	// Market Trades Testing:
	['847735808181665822', aiOptions],
	['847735822596702238', aiStocks],
	['847735939203858432', aiCrypto],
	['847735912086503454', marketNews]
]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CHECK CHANNELS
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('message', async message => {

	// CHECK CHANNEL TYPE
	if(message.author.id === client.user.id) return;
	if(message.channel.type === "dm") {
		let newEmbed = new Discord.MessageEmbed();
		newEmbed.setTimestamp();
		newEmbed.setFooter(server, logo);
		newEmbed.setTitle("Thank you for your message");
		newEmbed.setDescription("Please do not reply to this bot.\n\n If you have a question or comment open a support ticket here: <#902639395042103337>");
		newEmbed.setColor('#00db2e');
		message.channel.send(newEmbed);
		
		try {
			const channel02 = client.channels.cache.find(channel => channel.id === '982782067161071716');
			channel02.send("<@" + message.author + ">: " + message.content);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in onegoodtrade dms");
		}
		return;
	}

	if(inputs.has(message.channel.id)) {
		let sendMessage = inputs.get(message.channel.id);
		
		try {
			sendMessage(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in " + sendMessage.name);
		}
	}
	
});
 
client.login('TOKEN');