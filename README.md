# MCP Weather Server 🌤️

A Model Context Protocol (MCP) server that provides real-time weather information using the [Open-Meteo API](https://open-meteo.com/).

## 📋 Description

This project implements an MCP server that allows AI models to obtain current weather information for any location worldwide. The server uses [Open-Meteo's](https://open-meteo.com/) free APIs for geocoding and weather data.

## ✨ Features

- 🌍 **Global coverage**: Get weather information from any location worldwide
- 🔄 **Real-time data**: Up-to-date weather information
- 📊 **Complete data**: Temperature, humidity, precipitation, wind, cloud cover
- 🚀 **Fast and efficient**: Quick responses with structured JSON data
- 🔧 **Easy integration**: Compatible with any MCP client

## 🛠️ Installation

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 20+

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/zkjon/mcp-weather.git
   cd mcp-weather
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the server**
   ```bash
   bunx -y tsx src/main.ts
   # or
   npx -y tsx src/main.ts
   ```

## 🚀 Usage

### MCP Configuration

To use this server with an MCP client, add the following configuration to your `mcp.json` file:

```json
{
    "mcpServers": {
        "Weather": {
            "command": "bunx",
            "args": [
                "-y",
                "tsx",
                "C:\\full\\path\\to\\project\\src\\main.ts"
            ]
        }
    }
}
```

### Available Tools

#### `get-weather`

Gets weather information for a specific location.

**Parameters:**
- `location` (string): Location name (city, country, etc.)

**Usage Example:**
```javascript
// Request
{
    "tool": "get-weather",
    "arguments": {
        "location": "Madrid"
    }
}

// Response
{
    "content": [
        {
            "type": "text",
            "text": "{
                \"latitude\": 40.4375,
                \"longitude\": -3.6875,
                \"current\": {
                    \"temperature_2m\": 18.7,
                    \"relative_humidity_2m\": 54,
                    \"precipitation\": 0,
                    \"rain\": 0,
                    \"cloud_cover\": 4,
                    \"wind_speed_10m\": 6.1
                }
            }"
        }
    ]
}
```

### Workflow

1. **Request reception**: Server receives a request with a location
2. **Geocoding**: Location coordinates are obtained using Open-Meteo API
3. **Weather query**: Weather data is queried using the coordinates
4. **Structured response**: Data is returned in structured JSON format

### Code Structure

- **Imports**: MCP SDK and necessary libraries
- **Server configuration**: MCP server definition with name and version
- **Tool definition**: Implementation of the `get-weather` tool
- **Connection**: Transport configuration and server connection

## 🌐 APIs Used

- **[Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)**: To convert location names to coordinates
- **[Open-Meteo Weather API](https://open-meteo.com/en/docs)**: To get current weather data

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🤝 Contributing

Contributions are welcome! Please read our [contribution guide](CONTRIBUTING.md) for more information.

## 🔒 Security

If you find any security vulnerability, please check our [security file](SECURITY.md) to know how to report it.

## 📞 Support

If you have questions or need help:

- 🐛 **Report bugs**: [Issues](https://github.com/zkjon/mcp-weather/issues)
- 💡 **Request features**: [Issues](https://github.com/zkjon/mcp-weather/issues)
- 📧 **Contact**: [zkjon](https://github.com/zkjon)

## 🙏 Acknowledgments

- [Open-Meteo](https://open-meteo.com/) for providing free weather APIs
- [Model Context Protocol](https://modelcontextprotocol.io/) for the MCP framework
- [Bun](https://bun.sh/) for the fast JavaScript runtime

---

**Made with ❤️ by [zkjon](https://github.com/zkjon)**