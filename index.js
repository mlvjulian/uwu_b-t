const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 
 });
 
 client.login("OTAwMjA1MDc1MzQ2MTAwMzA4.YW97Tg.5sQHSBXuBj9u1sD2mKTRRR9RXmQ");