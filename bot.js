const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Jam-Bot Online");
});
const prefix = "!";
client.on("message", (message) => {
function react() {
  message.react("🔽")
}
if (message.attachments.size > 0) {
    setTimeout(react, 500);
    message.react("🔼")
  }else
    if (message.content.startsWith("~")) {
      setTimeout(react,500);
      message.react("🔼")
    }else
   if (message.content.startsWith("!ping")) {
     message.channel.send("Pong!");
     console.log("Pinged");
    }else
    if (message.content.startsWith("!creator")) {
      message.channel.send("This bot was created by jam#3515");
    }else
    if (message.content.startsWith("!github")) {
      message.channel.send("<https://github.com/jamxu88/>");
    }
  });
client.login(process.env.BOT_TOKEN);
