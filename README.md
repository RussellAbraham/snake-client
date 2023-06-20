# Snake Client Project

Snake is a sub-genre of action video games where the player maneuvers the end of a growing line, often themed as a snake. The player must keep the snake from colliding with both other obstacles and itself, which gets harder as the snake lengthens.

Before you can run this client, you will need to be running the server side.

## Instructions

First clone the server code and run it locally.

This should be done in a separate terminal window since it will need to stay running while you work on and run the client in the main terminal window.

```
git clone https://github.com/lighthouse-labs/snek-multiplayer.git
cd snek-multiplayer
npm install
npm run play
```

Then clone the `snake-client` and use the command `npm start`

```
git clone git@github.com:RussellAbraham/snake-client.git
cd snake-client
npm start
```

The terminal used to start the client will accept input from your keyboard and move the snake spawned on the server.