const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Meme-Rate Online");
  x = 182
});
const prefix = "!";
client.on("message", (message) => {
function react() {
  message.react("🔽")
  x = x + 1
}
if (message.attachments.size > 0) {
    setTimeout(react, 500);
    message.react("🔼")
  }else
    if(message.content.includes("xd")) {
      message.channel.send("no");
    if (message.content.startsWith("'")) {
      setTimeout(react,500);
      message.react("🔼")
    }else
   if (message.content.startsWith(prefix + "ping")) {
     responsetime = new Date().getTime() - message.createdTimestamp
     message.channel.send("Pong! There have been "+ x +" reacts made to date. Response Time: " + responsetime + " ms");
     console.log("Pinged");
    }
  });
client.login(process.env.BOT_TOKEN);
