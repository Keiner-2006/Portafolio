import fisiotrack1 from "../../../assets/images/projects/fisiotrack/fisiotrack-1.png";
import fisiotrack2 from "../../../assets/images/projects/fisiotrack/fisiotrack-2.png";

import type { ProjectContent } from "../../types";

export default {
  title: "PhysioCare – Gestión Clínica",
  theme: "dark",
  tags: ["dotnet", "react", "postgresql", "restapi", "security"],
  description:
    "Sistema integral para clínicas de fisioterapia con backend .NET 8 y frontend React 19. Centraliza pacientes, citas, terapeutas, tratamientos, pagos, documentos clínicos, recursos y reportes.<br/><br/>El backend sigue Clean Architecture con separación Domain/Application/Infrastructure/API, autenticación JWT, roles, SignalR para tiempo real y almacenamiento de documentos mediante Cloudinary.",
  source: "https://github.com/Keiner-2006/physiocare-clinic",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: fisiotrack1,
        alt: "Dashboard de PhysioCare",
        caption: "Dashboard Clínico",
      },
    },
    {
      type: "text",
      props: {
        title: "Arquitectura y Diseño",
        text: "El backend está organizado en cuatro capas —Domain, Application, Infrastructure y API— aplicando inversión de dependencias, Repository Pattern, casos de uso, DTOs y Dependency Injection. El frontend usa React Router, Context API, hooks reutilizables y una capa de servicios separada.",
      },
    },
    {
      type: "list",
      props: {
        title: "Características Principales",
        items: [
          "Gestión de pacientes e historial clínico",
          "Agenda con disponibilidad de terapeutas y recursos",
          "Planes de tratamiento y seguimiento por sesiones",
          "Pagos, facturación y dashboard ejecutivo",
          "Autenticación JWT y permisos por rol",
          "Notificaciones en tiempo real mediante SignalR",
          "Documentos clínicos almacenados con Cloudinary",
          "Suite de pruebas backend con xUnit/Moq y frontend con Vitest",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: fisiotrack2,
        alt: "Vista de pacientes de PhysioCare",
        caption: "Gestión de Pacientes",
      },
    },
    {
      type: "text",
      props: {
        title: "Stack Tecnológico",
        text: ".NET 8, ASP.NET Core, Entity Framework Core, PostgreSQL, React 19, Vite, Tailwind CSS, JWT, SignalR, Cloudinary, xUnit y Vitest.",
      },
    },
  ],
} as const satisfies ProjectContent;
