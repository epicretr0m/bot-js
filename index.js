const { Client } = require("discord.js");

const bot = new Client({ intents: ["Guilds"] });
console.log("Connexion au bot...");
bot.login("BOT_TOKEN")
    .then(() => console.log("Connected to the bot"))
    .catch((error) => console.log("Failed to connect to the bot - " + error));

bot.on("ready", async () => {

    await bot.application.commands.set([
        {
            name: "ping",
            description: "Pong!"
        }
    ]);

    console.log("The bot is ready!");
});

bot.on("interactionCreate", (interaction) => {

    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping")
        interaction.reply("Pong!");
});
