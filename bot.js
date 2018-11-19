const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Jam-Bot Online");
  x = 0
});
const prefix = "!";
client.on("message", (message) => {
function react() {
  message.react("🔽")
}
if (message.attachments.size > 0) {
    setTimeout(react, 500);
    message.react("🔼")
  }
  x = x + 1
  if (x % 23 == 0) {
    message.react("💎")
  }else
  if (!message.content.startsWith(prefix)) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send("Pong!");
      console.log("Pinged");
    }else
    if (message.content.startsWith(prefix + "creator")) {
      message.channel.send("This bot was created by jam#3515");
    }else
    if (message.content.startsWith(prefix + "github")) {
      message.channel.send("<https://github.com/jamxu88/>");
    }
  });
client.login(process.env.BOT_TOKEN);
