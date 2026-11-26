import fisiotrack1 from "../../../assets/images/projects/fisiotrack/fisiotrack-1.png";
import fisiotrack2 from "../../../assets/images/projects/fisiotrack/fisiotrack-2.png";

import type { ProjectContent } from "../../types";

export default {
  title: "PhysioCare – Klinikverwaltung",
  theme: "dark",
  tags: ["dotnet", "react", "postgresql", "restapi", "security"],
  description:
    "Umfassendes Verwaltungssystem für Physiotherapie-Kliniken mit .NET-8-Backend und React-19-Frontend. Patienten, Termine, Therapeuten, Behandlungspläne, Zahlungen, klinische Dokumente, Ressourcen und Berichte werden zentral verwaltet.",
  source: "https://github.com/Keiner-2006/physiocare-clinic",
  components: [
    {
      type: "media",
      props: { type: "image", src: fisiotrack1, alt: "PhysioCare Dashboard", caption: "Klinik-Dashboard" },
    },
    {
      type: "text",
      props: {
        title: "Architektur & Design",
        text: "Das Backend folgt Clean Architecture mit Domain-, Application-, Infrastructure- und API-Schichten. JWT, rollenbasierter Zugriff, SignalR und Cloudinary ergänzen die Kernarchitektur.",
      },
    },
    {
      type: "list",
      props: {
        title: "Kernfunktionen",
        items: [
          "Patienten- und klinische Verlaufsverwaltung",
          "Terminplanung und Verfügbarkeit",
          "Behandlungspläne und Sitzungen",
          "Zahlungen und Dashboard",
          "JWT und rollenbasierter Zugriff",
          "Echtzeit-Benachrichtigungen mit SignalR",
          "Dokumentenspeicherung mit Cloudinary",
        ],
      },
    },
    {
      type: "media",
      props: { type: "image", src: fisiotrack2, alt: "PhysioCare Patientenverwaltung", caption: "Patientenverwaltung" },
    },
    {
      type: "text",
      props: {
        title: "Technologie-Stack",
        text: ".NET 8, ASP.NET Core, Entity Framework Core, PostgreSQL, React 19, Vite, Tailwind CSS, JWT, SignalR, Cloudinary, xUnit und Vitest.",
      },
    },
  ],
} as const satisfies ProjectContent;
