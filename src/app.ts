import { DiscordTs } from "./bot"
require('dotenv').config();
const bot: DiscordTs = new DiscordTs();
bot.start();

