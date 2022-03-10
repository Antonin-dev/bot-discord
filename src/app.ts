import { DiscordTs } from './bot';
require('dotenv').config();

/**
 * initialize the bot
 * */
const bot: DiscordTs = new DiscordTs();
bot.start();
