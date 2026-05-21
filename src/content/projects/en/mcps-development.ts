import mcpsPlaceholder from "../../../assets/images/projects/ferreteria/ferreteria-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "MCPs Development",
  theme: "light",
  tags: ["typescript", "node", "mcp", "ai"],
  description:
    "A suite of Model Context Protocol (MCP) servers built with TypeScript, enabling secure, standardized connections between Large Language Models (LLMs) and .NET APIs.<br/><br/>Focuses on system interoperability, allowing AI assistants to interact with enterprise .NET backends through a well-defined protocol layer.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: mcpsPlaceholder,
        alt: "MCP Server Architecture",
        caption: "MCP Architecture Overview",
      },
    },
    {
      type: "text",
      props: {
        title: "Architecture & Design",
        text: "Each MCP server is implemented as a standalone TypeScript module following the Model Context Protocol specification. The architecture emphasizes clean separation between the LLM interface and the backend service layer, with standardized error handling and resource management.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Model Context Protocol (MCP) specification implementation",
          "Secure LLM to .NET API communication channel",
          "TypeScript with strict typing and comprehensive error handling",
          "Modular server architecture for extensibility",
          "Standardized resource and tool definitions",
          "System interoperability between AI and enterprise systems",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Stack",
        text: "TypeScript, Node.js, MCP SDK, .NET Integration Layer, RESTful APIs, JSON Schema validation.",
      },
    },
  ],
} as const satisfies ProjectContent;
