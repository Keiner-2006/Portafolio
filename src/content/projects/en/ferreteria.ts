import ferreteria1 from "../../../assets/images/projects/ferreteria/ferreteria-1.jpg";
import ferreteria2 from "../../../assets/images/projects/ferreteria/ferreteria-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Hardware Store E-commerce",
  theme: "light",
  tags: ["dotnet", "angular", "typescript", "ai", "security", "hexagonal", "postgresql", "aws"],
  description:
    "A full-stack e-commerce platform for hardware supplies, built with Hexagonal Architecture (Ports & Adapters) on ASP.NET Core 9.<br/><br/>Integrates Google's Gemini AI via the Model Context Protocol for intelligent product recommendations and search. Implements JWT authentication with granular role-based access control and OWASP security standards. Uses AWS S3 for media storage.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ferreteria1,
        alt: "Hardware Store E-commerce Dashboard",
        caption: "E-commerce Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Architecture & Design",
        text: "Built on Hexagonal Architecture (Ports & Adapters) principles to maintain domain isolation and testability. The core domain is completely independent of frameworks, databases, and external concerns. Media assets are stored and served via AWS S3.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Hexagonal Architecture with clean domain boundaries",
          "AI-powered recommendations via Gemini API (MCP integration)",
          "JWT authentication with granular role-based authorization",
          "OWASP security compliance (XSS, CSRF, SQL injection prevention)",
          "AWS S3 integration for media and asset storage",
          "RESTful API with OpenAPI/Swagger documentation",
          "Entity Framework Core with PostgreSQL",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ferreteria2,
        alt: "Product Management View",
        caption: "Product Management",
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Stack",
        text: "ASP.NET Core 9, C# 13, Entity Framework Core, PostgreSQL, Angular, TypeScript, Gemini AI SDK, JWT, Swagger/OpenAPI, AWS S3.",
      },
    },
  ],
} as const satisfies ProjectContent;
