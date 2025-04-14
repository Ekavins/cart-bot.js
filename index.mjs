import { Client, Collection, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

// Create a new client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

// When the client is ready, run this code
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Login to Discord with the bot token
client.login(process.env.DISCORD_TOKEN);

client.on(Events.MessageCreate, (message) => {
  if (message.content.toLowerCase().includes('ping')) {
    message.reply('Pong!');
  } else if (message.content === '!help') {
    message.reply('Help!');
  }
});
