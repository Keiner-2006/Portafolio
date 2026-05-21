import mcpsPlaceholder from "../../../assets/images/projects/ferreteria/ferreteria-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "MCPs Entwicklung",
  theme: "light",
  tags: ["typescript", "node", "mcp", "ai"],
  description:
    "Eine Suite von Model Context Protocol (MCP)-Servern, entwickelt mit TypeScript, die sichere, standardisierte Verbindungen zwischen Large Language Models (LLMs) und .NET-APIs ermöglicht.<br/><br/>Der Fokus liegt auf Systeminteroperabilität, sodass KI-Assistenten über eine klar definierte Protokollebene mit Unternehmens-.NET-Backends interagieren können.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: mcpsPlaceholder,
        alt: "MCP Server Architektur",
        caption: "MCP Architektur Übersicht",
      },
    },
    {
      type: "text",
      props: {
        title: "Architektur & Design",
        text: "Jeder MCP-Server ist als eigenständiges TypeScript-Modul implementiert, das der Model Context Protocol-Spezifikation folgt. Die Architektur betont die saubere Trennung zwischen der LLM-Schnittstelle und der Backend-Service-Ebene mit standardisierter Fehlerbehandlung und Ressourcenverwaltung.",
      },
    },
    {
      type: "list",
      props: {
        title: "Hauptfunktionen",
        items: [
          "Model Context Protocol (MCP)-Spezifikationsimplementierung",
          "Sicherer LLM-zu-.NET-API-Kommunikationskanal",
          "TypeScript mit strenger Typisierung und umfassender Fehlerbehandlung",
          "Modulare Serverarchitektur für Erweiterbarkeit",
          "Standardisierte Ressourcen- und Werkzeugdefinitionen",
          "Systeminteroperabilität zwischen KI und Unternehmenssystemen",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technologie-Stack",
        text: "TypeScript, Node.js, MCP SDK, .NET-Integrationsschicht, RESTful-APIs, JSON-Schema-Validierung.",
      },
    },
  ],
} as const satisfies ProjectContent;
