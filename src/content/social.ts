export const social = [
  { url: "mailto:keinerariasmorales@gmail.com", name: "mail" },
  { url: "https://github.com/Keiner-2006", name: "github" },
  { url: "https://www.linkedin.com/in/keiner-arias-morales-339450397", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
