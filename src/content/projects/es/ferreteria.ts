import ferreteria1 from "../../../assets/images/projects/ferreteria/ferreteria-1.jpg";
import ferreteria2 from "../../../assets/images/projects/ferreteria/ferreteria-2.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Sistema de Ferretería E-commerce",
  theme: "light",
  tags: ["dotnet", "angular", "typescript", "ai", "security", "hexagonal", "postgresql", "aws"],
  description:
    "Plataforma e-commerce full-stack para artículos de ferretería, construida con Arquitectura Hexagonal (Puertos y Adaptadores) en ASP.NET Core 9.<br/><br/>Integra la IA Gemini de Google a través del Model Context Protocol para recomendaciones y búsqueda inteligente de productos. Implementa autenticación JWT con control de acceso granular basado en roles y estándares de seguridad OWASP. Usa AWS S3 para almacenamiento de medios.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ferreteria1,
        alt: "Dashboard del E-commerce de Ferretería",
        caption: "Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Arquitectura y Diseño",
        text: "Construida sobre los principios de la Arquitectura Hexagonal (Puertos y Adaptadores) para mantener el aislamiento del dominio y la testabilidad. El dominio central es completamente independiente de frameworks, bases de datos y preocupaciones externas. Los archivos multimedia se almacenan y sirven a través de AWS S3.",
      },
    },
    {
      type: "list",
      props: {
        title: "Características Principales",
        items: [
          "Arquitectura Hexagonal con límites de dominio claros",
          "Recomendaciones impulsadas por IA vía Gemini API (integración MCP)",
          "Autenticación JWT con autorización granular basada en roles",
          "Cumplimiento de seguridad OWASP (prevención XSS, CSRF, SQL injection)",
          "Integración con AWS S3 para almacenamiento de medios",
          "API RESTful con documentación OpenAPI/Swagger",
          "Entity Framework Core con PostgreSQL",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ferreteria2,
        alt: "Vista de Gestión de Productos",
        caption: "Gestión de Productos",
      },
    },
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "ASP.NET Core 9, C# 13, Entity Framework Core, PostgreSQL, Angular, TypeScript, Gemini AI SDK, JWT, Swagger/OpenAPI, AWS S3.",
      },
    },
  ],
} as const satisfies ProjectContent;
