# Discord Bot

A Discord bot built with Discord.js v14, featuring slash commands and message handling capabilities.

## Prerequisites

- Node.js v16.9.0 or higher
- pnpm package manager
- A Discord bot token (from [Discord Developer Portal](https://discord.com/developers/applications))

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd cart-bot.js
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
DISCORD_TOKEN=your_bot_token_here
DISCORD_CLIENT_ID=your_client_id_here
DISCORD_GUILD_ID=your_guild_id_here
```

## Features

- Slash commands support
- Message content handling
- Guild-specific commands
- Error handling and logging

## Available Commands

- `ping` - Bot responds with "Pong!" when message contains "ping"
- `!help` - Bot responds with help information

## Running the Bot

1. Start the bot:

```bash
pnpm start
```

2. Deploy slash commands (one-time setup):

```bash
pnpm run deploy
```

## Development

- The bot uses ES modules (`.mjs` extension)
- Commands are located in the `commands/utility` directory
- Environment variables are managed through `.env` file

## Project Structure

```
cart-bot.js/
├── commands/
│   └── utility/      # Command files
├── .env              # Environment variables
├── index.mjs         # Main bot file
├── deploy-commands.mjs # Command deployment
└── package.json      # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
