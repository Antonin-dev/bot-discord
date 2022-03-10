import {Client, Intents, Message} from "discord.js"
// import * as path from "path"
require('dotenv').config();

export class DiscordTs {
    private client: Client;
    // private config: any;

    constructor(){
        this.client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    }

    public start(): void {
        this.client.on("ready", () => {
            console.log("je suis pret")
        });

        this.client.on("messageCreate", (message: Message) => {
            if (message.author.id !== this.client.user.id){
                const [id, formattedMessage] = message.content.split(" ")
                const [command, min, max] = formattedMessage.split("_")
                if (command === "!random"){
                    // @ts-ignore
                    const randomNumber =  Math.floor(Math.random() * (Number(max) - Number(min)) +Number(min))
                    console.log(min, typeof max)
                    message.channel.send(`Le nombre aléatoire entre ${min} et ${max} est ${randomNumber}`);
                }
            }else{
                return null;
            }
        })

        this.client.login(process.env.TOKEN)


    }
}
