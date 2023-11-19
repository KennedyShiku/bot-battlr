# Bot Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army! This web app allows a galactic overlord to browse through a list of robots, view a robot's details, enlist a bot into their army, and manage their bot collection.

## Project Setup

1. Create a new project folder.
2. Create a new GitHub repository (Ensure it is private).
3. Add your TM (Teaching Mentor) as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code).
4. Regularly commit to the repository.
5. In your project directory, create a `db.json` file and use [this data](#) for your server DB.
6. Run this command to get the backend started:
    ```bash
    json-server --watch db.json
    ```
7. Test your server by visiting this route in the browser: [http://localhost:8001/bots](http://localhost:8001/bots)

## Project Guidelines

Your project should conform to the following set of guidelines:

### Core Deliverables

As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.
  
- Add an individual bot to my army by clicking on it. The selected bot should render in the `YourBotArmy` component. The bot can be enlisted only **once**. The bot **does not** disappear from the `BotCollection`.
  
- Release a bot from my army by clicking on it. The bot disappears from the `YourBotArmy` component.
  
- Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the `YourBotArmy` on the frontend.
