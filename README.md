# BOT DISCORD Antonin VAL

## Characteristics:
- This bot is deployed on Heroku so you don't have to install it locally.
- This bot works with a configuration file that you can customize.
- This bot is fully typed thanks to typescript.
- This bot is developed as a class

## Setup

### Online

- You can deploy it on Heroku by getting the project from GitHub .
- Add on Heroku the TOKEN environment variable with your discord token.
- Add your deployed bot to the server via the discord website.
- Give it the administrator rights
- https://discord.com/api/oauth2/authorize?client_id=951397098941734912&permissions=8&scope=bot

### Local
- Get the project on Github
- add ```TOKEN=zzzzzzzzzz``` to .env (zzz... is your token)
- run :</br> 
```npm install```</br>
```npm run start-dev```

### Command

```!citation```</br>
The bot will send you a quote</br>
```!random min max```</br>
The bot will send you a number between the minimum and maximum request (min and max will be filled by the user)</br>
```!note firstname```</br>
The bot will send you the grade for each student in the class (you can try with Antonin and other students)</br>
```@mention the bot```</br>
try to mention it</br>


