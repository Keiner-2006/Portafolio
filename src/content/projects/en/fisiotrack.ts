import fisiotrack1 from "../../../assets/images/projects/fisiotrack/fisiotrack-1.png";
import fisiotrack2 from "../../../assets/images/projects/fisiotrack/fisiotrack-2.png";

import type { ProjectContent } from "../../types";

export default {
  title: "FisioTrack – Clinic Management",
  theme: "dark",
  tags: ["dotnet", "react", "oracle", "saas", "restapi", "security"],
  description:
    "A multi-tenant SaaS platform for physiotherapy clinic management, designed to streamline patient records, appointments, billing, and clinical reporting.<br/><br/>Features Oracle database performance optimization, a RESTful API with comprehensive Swagger documentation, and a React frontend for an intuitive user experience.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: fisiotrack1,
        alt: "FisioTrack Clinic Dashboard",
        caption: "Clinic Dashboard",
      },
    },
    {
      type: "text",
      props: {
        title: "Architecture & Design",
        text: "Multi-tenant architecture with database-per-tenant isolation strategy. The API layer follows RESTful conventions with versioning, HATEOAS links, and comprehensive Swagger/OpenAPI documentation for seamless client integration.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key Features",
        items: [
          "Multi-tenant SaaS architecture with tenant isolation",
          "Oracle database performance optimization (query tuning, indexing)",
          "RESTful API with full Swagger/OpenAPI documentation",
          "React frontend with real-time updates",
          "Role-based access for administrators, clinicians, and patients",
          "Automated billing and appointment scheduling",
        ],
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: fisiotrack2,
        alt: "Patient Records View",
        caption: "Patient Records",
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Stack",
        text: "ASP.NET Core, C#, Oracle Database, React, RESTful API, Swagger, Entity Framework Core, JWT Authentication.",
      },
    },
  ],
} as const satisfies ProjectContent;
