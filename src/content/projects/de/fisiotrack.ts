import fisiotrack1 from "../../../assets/images/projects/fisiotrack/fisiotrack-1.png";
import fisiotrack2 from "../../../assets/images/projects/fisiotrack/fisiotrack-2.png";

import type { ProjectContent } from "../../types";

export default {
  title: "FisioTrack – Klinikverwaltung",
  theme: "dark",
  tags: ["dotnet", "react", "oracle", "saas", "restapi", "security"],
  description:
    "Eine Multi-Tenant-SaaS-Plattform für die Verwaltung physiotherapeutischer Kliniken, entwickelt für die optimierte Verwaltung von Patientenakten, Terminen, Abrechnungen und klinischen Berichten.<br/><br/>Bietet Oracle-Datenbank-Leistungsoptimierung, eine RESTful-API mit umfassender Swagger-Dokumentation und ein React-Frontend für eine intuitive Benutzererfahrung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: fisiotrack1,
        alt: "FisioTrack Klinik-Dashboard",
        caption: "Klinik-Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Architektur & Design",
        text: "Multi-Tenant-Architektur mit Datenbank-pro-Mandant-Isolationsstrategie. Die API-Schicht folgt RESTful-Konventionen mit Versionierung, HATEOAS-Links und umfassender Swagger/OpenAPI-Dokumentation für nahtlose Client-Integration.",
      },
    },
    {
      type: "list",
      props: {
        title: "Hauptfunktionen",
        items: [
          "Multi-Tenant-SaaS-Architektur mit Mandantenisolierung",
          "Oracle-Datenbank-Leistungsoptimierung (Query-Tuning, Indizierung)",
          "RESTful-API mit vollständiger Swagger/OpenAPI-Dokumentation",
          "React-Frontend mit Echtzeit-Updates",
          "Rollenbasierter Zugriff für Administratoren, Therapeuten und Patienten",
          "Automatisierte Abrechnung und Terminplanung",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: fisiotrack2,
        alt: "Patientenakten-Ansicht",
        caption: "Patientenakten",
      },
    },
    {
      type: "text",
      props: {
        title: "Technologie-Stack",
        text: "ASP.NET Core, C#, Oracle-Datenbank, React, RESTful-API, Swagger, Entity Framework Core, JWT-Authentifizierung.",
      },
    },
  ],
} as const satisfies ProjectContent;
