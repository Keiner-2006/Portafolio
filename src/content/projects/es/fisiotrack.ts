import fisiotrack1 from "../../../assets/images/projects/fisiotrack/fisiotrack-1.png";
import fisiotrack2 from "../../../assets/images/projects/fisiotrack/fisiotrack-2.png";

import type { ProjectContent } from "../../types";

export default {
  title: "FisioTrack – Gestión Clínica",
  theme: "dark",
  tags: ["dotnet", "react", "oracle", "saas", "restapi", "security"],
  description:
    "Plataforma SaaS multi-tenant para la gestión de clínicas de fisioterapia, diseñada para optimizar el registro de pacientes, citas, facturación y reportes clínicos.<br/><br/>Incluye optimización de rendimiento en base de datos Oracle, una API RESTful con documentación completa en Swagger y un frontend React para una experiencia de usuario intuitiva.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: fisiotrack1,
        alt: "Dashboard de FisioTrack",
        caption: "Dashboard Clínico",
      },
    },
    {
      type: "text",
      props: {
        title: "Arquitectura y Diseño",
        text: "Arquitectura multi-tenant con estrategia de aislamiento por base de datos por inquilino. La capa API sigue convenciones RESTful con versionado, enlaces HATEOAS y documentación completa en Swagger/OpenAPI para una integración fluida con el cliente.",
      },
    },
    {
      type: "list",
      props: {
        title: "Características Principales",
        items: [
          "Arquitectura SaaS multi-tenant con aislamiento de inquilinos",
          "Optimización de rendimiento en Oracle (query tuning, indexación)",
          "API RESTful con documentación completa Swagger/OpenAPI",
          "Frontend React con actualizaciones en tiempo real",
          "Acceso basado en roles para administradores, clínicos y pacientes",
          "Facturación automatizada y programación de citas",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: fisiotrack2,
        alt: "Vista de Registros de Pacientes",
        caption: "Registros de Pacientes",
      },
    },
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: "ASP.NET Core, C#, Oracle Database, React, API RESTful, Swagger, Entity Framework Core, Autenticación JWT.",
      },
    },
  ],
} as const satisfies ProjectContent;
