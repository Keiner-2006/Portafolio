export type TagVariant =
  | "dotnet"
  | "flutter"
  | "dart"
  | "react"
  | "angular"
  | "typescript"
  | "node"
  | "oracle"
  | "postgresql"
  | "redis"
  | "supabase"
  | "aws"
  | "ai"
  | "security"
  | "restapi"
  | "mvvm"
  | "hexagonal"
  | "saas"
  | "mcp"
  | "html"
  | "css"
  | "gray";

export const tagLabels = {
  dotnet: ".NET",
  flutter: "Flutter",
  dart: "Dart",
  react: "React",
  angular: "Angular",
  typescript: "TypeScript",
  node: "Node.js",
  oracle: "Oracle",
  postgresql: "PostgreSQL",
  redis: "Redis",
  supabase: "Supabase",
  aws: "AWS S3",
  ai: "AI",
  security: "Security",
  restapi: "REST API",
  mvvm: "MVVM",
  hexagonal: "Hexagonal",
  saas: "SaaS",
  mcp: "MCP",
  html: "HTML",
  css: "CSS",
  gray: "Gray",
} as const satisfies Record<TagVariant, string>;
