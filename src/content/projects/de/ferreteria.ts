import ferreteria1 from "../../../assets/images/projects/ferreteria/ferreteria-1.jpg";
import ferreteria2 from "../../../assets/images/projects/ferreteria/ferreteria-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Baumarkt E-Commerce",
  theme: "light",
  tags: ["dotnet", "angular", "typescript", "ai", "security", "hexagonal", "postgresql", "aws"],
  description:
    "Eine Full-Stack-E-Commerce-Plattform für Baumarktartikel, entwickelt mit hexagonaler Architektur (Ports & Adapters) auf ASP.NET Core 9.<br/><br/>Integriert Googles Gemini KI über das Model Context Protocol für intelligente Produktempfehlungen und -suche. Implementiert JWT-Authentifizierung mit granularer rollenbasierter Zugriffskontrolle und OWASP-Sicherheitsstandards. Nutzt AWS S3 für Medienspeicher.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ferreteria1,
        alt: "Baumarkt E-Commerce Dashboard",
        caption: "E-Commerce Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Architektur & Design",
        text: "Basierend auf hexagonaler Architektur (Ports & Adapters) zur Wahrung der Domänenisolation und Testbarkeit. Die Kerndomäne ist vollständig unabhängig von Frameworks, Datenbanken und externen Belangen. Medien werden über AWS S3 bereitgestellt.",
      },
    },
    {
      type: "list",
      props: {
        title: "Hauptfunktionen",
        items: [
          "Hexagonale Architektur mit sauberen Domänengrenzen",
          "KI-gestützte Empfehlungen via Gemini API (MCP-Integration)",
          "JWT-Authentifizierung mit granularer rollenbasierter Autorisierung",
          "OWASP-Sicherheitskonformität (XSS, CSRF, SQL-Injection-Prävention)",
          "AWS S3 Integration für Medien- und Asset-Speicher",
          "RESTful-API mit OpenAPI/Swagger-Dokumentation",
          "Entity Framework Core mit PostgreSQL",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ferreteria2,
        alt: "Produktverwaltungsansicht",
        caption: "Produktverwaltung",
      },
    },
    {
      type: "text",
      props: {
        title: "Technologie-Stack",
        text: "ASP.NET Core 9, C# 13, Entity Framework Core, PostgreSQL, Angular, TypeScript, Gemini AI SDK, JWT, Swagger/OpenAPI, AWS S3.",
      },
    },
  ],
} as const satisfies ProjectContent;
