export interface TechInfo {
  name: string
  icon: string
  color: string
  hover: string
}

// central list used by both the landing page and project cards
export const techList: TechInfo[] = [
  // Languages
  {
    name: "HTML",
    icon: "simple-icons:html5",
    color: "text-orange-600 dark:text-orange-500",
    hover: "hover:shadow-orange-500/20",
  },
  {
    name: "CSS",
    icon: "simple-icons:css",
    color: "text-[rebeccapurple] dark:text-[#663399]",
    hover: "hover:shadow-[#663399]/20",
  },
  {
    name: "JavaScript",
    icon: "simple-icons:javascript",
    color: "text-yellow-500 dark:text-yellow-400",
    hover: "hover:shadow-yellow-400/20",
  },
  {
    name: "TypeScript",
    icon: "simple-icons:typescript",
    color: "text-blue-700 dark:text-blue-500",
    hover: "hover:shadow-blue-500/20",
  },
  // Frontend
  {
    name: "React",
    icon: "simple-icons:react",
    color: "text-cyan-500 dark:text-cyan-400",
    hover: "hover:shadow-cyan-400/20",
  },
  {
    name: "Next.js",
    icon: "simple-icons:nextdotjs",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  {
    name: "Expo",
    icon: "simple-icons:expo",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  {
    name: "TanStack Query",
    icon: "simple-icons:tanstack",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  {
    name: "Astro",
    icon: "simple-icons:astro",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  {
    name: "TailwindCSS",
    icon: "simple-icons:tailwindcss",
    color: "text-sky-500 dark:text-sky-400",
    hover: "hover:shadow-sky-400/20",
  },
  {
    name: "shadcn/ui",
    icon: "simple-icons:shadcnui",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  {
    name: "Motion",
    icon: "bxl:motion-js",
    color: "text-yellow-500 dark:text-yellow-400",
    hover: "hover:shadow-yellow-400/20",
  },
  // Backend / Runtime
  {
    name: "Node.js",
    icon: "simple-icons:nodedotjs",
    color: "text-green-600 dark:text-green-500",
    hover: "hover:shadow-green-500/20",
  },
  {
    name: "Bun",
    icon: "simple-icons:bun",
    color: "text-orange-200 dark:text-orange-50",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  {
    name: "Hono.js",
    icon: "simple-icons:hono",
    color: "text-orange-600 dark:text-orange-500",
    hover: "hover:shadow-orange-500/20",
  },
  {
    name: "Socket.IO",
    icon: "bxl:socket-io",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  // Databases / ORM
  {
    name: "Drizzle ORM",
    icon: "simple-icons:drizzle",
    color: "text-lime-500 dark:text-lime-400",
    hover: "hover:shadow-lime-400/20",
  },
  {
    name: "PostgreSQL",
    icon: "simple-icons:postgresql",
    color: "text-blue-600 dark:text-blue-500",
    hover: "hover:shadow-blue-500/20",
  },
  {
    name: "SQLite",
    icon: "simple-icons:sqlite",
    color: "text-sky-600 dark:text-sky-500",
    hover: "hover:shadow-sky-500/20",
  },
  {
    name: "Supabase",
    icon: "simple-icons:supabase",
    color: "text-green-600 dark:text-green-500",
    hover: "hover:shadow-green-500/20",
  },
  {
    name: "Neon",
    icon: "bxl:neon-tech",
    color: "text-cyan-500 dark:text-cyan-400",
    hover: "hover:shadow-cyan-400/20",
  },
  {
    name: "Decap CMS",
    icon: "simple-icons:decapcms",
    color: "text-pink-600 dark:text-pink-400",
    hover: "hover:shadow-pink-400/20",
  },
  // DevOps / Cloud
  {
    name: "Cloudflare",
    icon: "simple-icons:cloudflare",
    color: "text-orange-500 dark:text-orange-400",
    hover: "hover:shadow-orange-400/20",
  },
  {
    name: "Docker",
    icon: "simple-icons:docker",
    color: "text-blue-500 dark:text-blue-400",
    hover: "hover:shadow-blue-400/20",
  },
  {
    name: "Coolify",
    icon: "simple-icons:coolify",
    color: "text-purple-600 dark:text-purple-400",
    hover: "hover:shadow-purple-400/20",
  },
  {
    name: "Netlify",
    icon: "simple-icons:netlify",
    color: "text-teal-500 dark:text-teal-400",
    hover: "hover:shadow-teal-400/20",
  },
  // AI
  {
    name: "OpenAI API",
    icon: "simple-icons:openai",
    color: "text-teal-600 dark:text-teal-500",
    hover: "hover:shadow-teal-500/20",
  },
  {
    name: "Ollama",
    icon: "simple-icons:ollama",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  {
    name: "Vercel AI SDK",
    icon: "simple-icons:vercel",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  // Auth
  {
    name: "Better Auth",
    icon: "simple-icons:betterauth",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  // Payments
  {
    name: "Polar.sh",
    icon: "iconoir:polar-sh",
    color: "text-blue-600 dark:text-blue-500",
    hover: "hover:shadow-blue-500/20",
  },
  // Tools
  {
    name: "Git",
    icon: "simple-icons:git",
    color: "text-red-600",
    hover: "hover:shadow-red-500/20",
  },
  {
    name: "VS Code",
    icon: "simple-icons:visualstudiocode",
    color: "text-blue-500 dark:text-blue-400",
    hover: "hover:shadow-blue-400/20",
  },
  {
    name: "GitHub Copilot",
    icon: "simple-icons:githubcopilot",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  {
    name: "sentry",
    icon: "simple-icons:sentry",
    color: "text-red-600 dark:text-red-500",
    hover: "hover:shadow-red-500/20",
  },
  {
    name: "Android",
    icon: "simple-icons:android",
    color: "text-green-600 dark:text-green-500",
    hover: "hover:shadow-green-500/20",
  },
  {
    name: "Hermes",
    icon: "simple-icons:hermes",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
  {
    name: "Gradle",
    icon: "simple-icons:gradle",
    color: "text-neutral-800 dark:text-neutral-200",
    hover: "dark:hover:shadow-white/10 hover:shadow-black/10",
  },
]

function normalize(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "")
}

export const techMap: Record<string, TechInfo> = techList.reduce(
  (map, tech) => {
    const key = normalize(tech.name)
    map[key] = tech
    // also store the raw lowercase for easier debugging
    map[tech.name.toLowerCase()] = tech
    return map
  },
  {} as Record<string, TechInfo>
)
