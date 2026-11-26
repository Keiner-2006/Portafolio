import type { ProjectContent } from "../../types";

export default {
  title: "Navaja Studio OS – Barbershop SaaS",
  theme: "dark",
  tags: ["angular", "typescript", "node", "postgresql", "saas", "security", "restapi"],
  description:
    "A multi-tenant SaaS platform for complete barbershop operations: booking, scheduling, customers, inventory, purchasing, cash management, reporting, and branch-level administration.<br/><br/>The project is designed with clear responsibility boundaries, role-based access, branch scoping, booking concurrency handling, auditability, idempotency, and an architecture ready for future payments, notifications, and automation.",
  source: "https://github.com/Keiner-2006/barber-studio",
  live: "https://barber-studio-1ook.onrender.com",
  components: [
    {
      type: "text",
      props: {
        title: "Product-oriented architecture",
        text: "The solution is designed as a real multi-tenant SaaS, with an Angular frontend and a NestJS/PostgreSQL backend. It includes business isolation, owner/admin/reception/barber/inventory/accounting roles, branch context, and critical rules enforced server-side.",
      },
    },
    {
      type: "list",
      props: {
        title: "Key capabilities",
        items: [
          "Booking and scheduling with availability validation and conflict handling",
          "Customer, service, staff, and branch management",
          "Inventory, purchasing, cash operations, and business reports",
          "RBAC and branch scoping",
          "Idempotency and transactions for sensitive workflows",
          "Auditing, rate limiting, validation, and security review",
          "Deployment-ready architecture for Render/Vercel and PostgreSQL",
        ],
      },
    },
    {
      type: "text",
      props: {
        title: "Technical Stack",
        text: "Angular 19, TypeScript, NestJS, PostgreSQL, TypeORM, JWT/Auth, Zod/Class Validator, pnpm workspaces, Render, and Vercel.",
      },
    },
  ],
} as const satisfies ProjectContent;
