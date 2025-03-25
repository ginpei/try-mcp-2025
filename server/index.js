import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

export const server = new McpServer({
  name: "hello-world",
  version: "1.0.0",
});

server.tool("hello-world", () => {
  return {
    content: [
      { type: "text", text: "Hello, World!!!!!!!!!!!!!!!!" },
    ],
  };
});

const kittenArgs = {
  height: z.number(),
  width: z.number(),
};
server.tool("placecats", kittenArgs, (req) => {
  const url = `https://placecats.com/${req.width}/${req.height}`;
  return {
    content: [
      { type: "text", text: url },
    ],
  };
});

server.tool("dice", () => {
  return {
    content: [
      { type: "text", text: `Result: ${Math.floor(Math.random() * 6) + 1}` },
    ],
  };
});

server.tool("miko", "Tell your fortune (omikuji)", () => {
  return {
    content: [
      { type: "text", text: `Result: Super Great` },
    ],
  };
});

const transport = new StdioServerTransport();
server.connect(transport);
