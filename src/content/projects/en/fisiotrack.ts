import fisiotrack1 from "../../../assets/images/projects/fisiotrack/fisiotrack-1.png";
import fisiotrack2 from "../../../assets/images/projects/fisiotrack/fisiotrack-2.png";

import type { ProjectContent } from "../../types";

export default {
  title: "PhysioCare – Clinic Management",
  theme: "dark",
  tags: ["dotnet", "react", "postgresql", "restapi", "security"],
  description:
    "A complete physiotherapy clinic management system with a .NET 8 backend and React 19 frontend. It centralizes patients, appointments, therapists, treatment plans, payments, clinical documents, resources, and reporting.<br/><br/>The backend follows Clean Architecture with Domain/Application/Infrastructure/API separation, JWT authentication, roles, SignalR real-time updates, and Cloudinary document storage.",
  source: "https://github.com/Keiner-2006/physiocare-clinic",
  components: [
    {
      type: "media",
      props: { type: "image", src: fisiotrack1, alt: "PhysioCare dashboard", caption: "Clinic Dashboard" },
    },
    {
      type: "text",
      props: {
        title: "Architecture & Design",
        text: "The backend is split into Domain, Application, Infrastructure, and API layers, applying dependency inversion, repositories, use cases, DTOs, and dependency injection. The frontend uses React Router, Context API, reusable hooks, and a dedicated service layer.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Patient and clinical history management",
          "Scheduling with therapist and resource availability",
          "Treatment plans and session tracking",
          "Payments, billing, and executive dashboard",
          "JWT authentication and role-based access",
          "Real-time notifications with SignalR",
          "Clinical document storage with Cloudinary",
          "Backend and frontend automated tests",
        ],
      },
    },
    {
      type: "media",
      props: { type: "image", src: fisiotrack2, alt: "PhysioCare patient management", caption: "Patient Management" },
    },
    {
      type: "text",
      props: {
        title: "Technical Stack",
        text: ".NET 8, ASP.NET Core, Entity Framework Core, PostgreSQL, React 19, Vite, Tailwind CSS, JWT, SignalR, Cloudinary, xUnit, and Vitest.",
      },
    },
  ],
} as const satisfies ProjectContent;
