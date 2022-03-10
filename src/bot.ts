import {Client, Intents, Message} from "discord.js"
import {randomSentence, config, log} from "./config/config";
import {Config} from "./type/type";
require('dotenv').config();


export class DiscordTs {
    private client: Client;
    private randomSentence: String[];
    private config: Config;

    constructor(){
        this.client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
        this.randomSentence = randomSentence;
        this.config = config;
    }

    public start(): void {
        this.client.on("ready", () => {
            console.log("I'm ready :)")
        });
        this.client.on("messageCreate", (message: Message) => {
            if (message.author.id !== this.client.user.id){
                if (message.mentions.has(this.client.user.id)) {
                    console.log(log.mentionBegin);
                    message.channel.send("Qui me parle ?!");
                }
                else if (message.content.startsWith("!salut")){
                    console.log(log.hiBegin);
                    message.channel.send(`${this.config.sentenceOfTheDay} ${this.randomSentence[Math.floor(Math.random() * (this.randomSentence.length - 0))]}`);
                }else if (message.content.startsWith("!random")){
                    console.log(log.randomBegin);
                    const [command, min, max] = message.content.split(" ");
                    message.channel.send(this.formatRandomNumber(Number(min), Number(max)));
                }
            }
        })
        this.client.login(process.env.TOKEN)
    }

    private formatRandomNumber (min: number, max: number){
        const randomNumber =  Math.floor(Math.random() * (max - min) +min);
        return `Le nombre aléatoire entre ${min} et ${max} est ${randomNumber}`
    }
}
