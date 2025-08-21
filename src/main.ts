import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"

import {z} from "zod" // zod is a library for validating data - https://zod.dev/

// 1. define mcp model
const server = new McpServer({
    name: "weather Model Context Protocol",
    version: "1.0.0",
    port: 1005, // i like this port number, it have special meaning ---> gen <3
})

// 2. define tools
server.tool(
    'get-weather',
    'Get the weather for a location',
    {
        location: z.string().describe("The location to get the weather for"),
    },
    async ({location}) => {
        
        // 2.1 get location coordinates
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`)
        const location_data = await response.json()

        // 2.2 check if location was found
        if (location_data.length === 0) {
            return {
                content: [
                    {
                        type: "text",
                        text: `No location found for ${location}`,
                    }
                ]
            }
        }

        // 2.3 get coordinates
        const coordinates = location_data.results[0]
        const {latitude, longitude} = coordinates

        // 2.4 get weather data
        const weather_response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=precipitation,rain,relative_humidity_2m,temperature_2m,is_day,cloud_cover,wind_speed_10m`)
        const weather_data = await weather_response.json()

        // 2.5 return weather data
        return {
                content: [
                    {
                        type: "text",
                        text: JSON.stringify(weather_data, null, 2), 
                        // ⬆⬆⬆ EXPLANATION: return structured JSON data for easier parsing and consistent data handling by AI models ⬆⬆⬆
                    }
                ]
            }        
    }
)

// 3. listen to requests
async function main() {
    const server_transport = new StdioServerTransport()
    await server.connect(server_transport)
}

// 3.1 catch any errors that occur
main().catch((error) => {
    console.error("Error:", error)
})