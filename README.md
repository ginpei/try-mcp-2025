# Try MCP

- [Model Context Protocol (MCP) - Anthropic](https://docs.anthropic.com/en/docs/agents-and-tools/mcp) - About MCP
- [Claude MCP - Model Context Protocol](https://www.claudemcp.com/) - market place
- [Claude Code tutorials - Anthropic](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/tutorials) > [Set up Model Context Protocol (MCP)](https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/tutorials#set-up-model-context-protocol-mcp)
- [TypeScript で MCP サーバーを実装し、Claude Desktop から利用する](https://azukiazusa.dev/blog/typescript-mcp-server/)

## Try

There is the `.mcp.json` for project MCP settings. You can just go with Claude Code:

See the list of MCPs:

```console
$ claude mcp list
mcp-example: node ./server
```

Start conversation with Claude Code:

```console
$ claude
```

### Fortune

Ask your fortune. It invokes the `mcp-example:miko`:

```
> tell my fortune

● mcp-example:miko (MCP)

╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Tool use                                                                                                        │
│                                                                                                                 │
│   mcp-example:miko() (MCP)                                                                                      │
│   Tell your fortune (omikuji)                                                                                   │
│                                                                                                                 │
│ Do you want to proceed?                                                                                         │
│ ❯ Yes                                                                                                           │
│   Yes, and don't ask again for mcp-example:miko commands in /home/ginpei/projects/try-mcp-2025                  │
│   No, and tell Claude what to do differently (esc)                                                              │
│                                                                                                                 │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```

You will receive the fortune:

```
● mcp-example:miko (MCP)
  ⎿  Result: Super Great

● Your fortune is: Super Great
```

### Place 

Ask for a cat image. It invokes the `mcp-example:placecats`:

```
> give me a cat for 800x600

● mcp-example:placecats (MCP)(width: 800, height: 600)…

╭─────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ Tool use                                                                                                        │
│                                                                                                                 │
│   mcp-example:placecats(width: 800, height: 600) (MCP)                                                          │
│                                                                                                                 │
│ Do you want to proceed?                                                                                         │
│ ❯ Yes                                                                                                           │
│   Yes, and don't ask again for mcp-example:placecats commands in /home/ginpei/projects/try-mcp-2025             │
│   No, and tell Claude what to do differently (esc)                                                              │
│                                                                                                                 │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
```

It returns the URL of the cat image:

```
● mcp-example:placecats (MCP)(width: 800, height: 600)…
  ⎿  https://placecats.com/800/600

● https://placecats.com/800/600
```