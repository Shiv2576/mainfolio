import EasyWebsiteBlocker from "@/assets/projects/easy-website-blocker.png"
import GptFileSmith from "@/assets/projects/gpt-filesmith.png"
import GptImgCaptioner from "@/assets/projects/gpt-img-captioner.png"
import NextDay from "@/assets/projects/next-day.png"
import NextWorkout from "@/assets/projects/next-workout.png"
import OneDarkModernPro from "@/assets/projects/one-dark-modern-pro.png"
import UnYellowGPT from "@/assets/projects/unyellow-gpt.png"
import weave from "@/assets/projects/weave.png"

export const projects = [
  {
    title: "LanguageApp",
    description:
      "A Mobile App to learn Mandarin Chinese like a native speaker , with supabase auth , and personlized levels built with Expo.",
    tags: ["Expo", "TypeScript", "Supabase", "OAuth", "Android", "SaaS"],
    image: UnYellowGPT,
    demo: "https://unyellowgpt.com",
    github: "https://github.com/Shiv2576/Mandarin-Language-App",
    featured: true,
    category: "Web Apps",
  },
  {
    title: "Trace Ai",
    description:
      "Trace AI is an AI-powered knowledge tool that understands what you're asking and renders the right visual automatically. Type a question in plain English and watch it transform into an interactive graph you can drag, explore, and click through.",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Clerk",
      "Prisma",
      "Redis",
      "Gorq",
    ],
    image: NextDay,
    github: "https://github.com/Shiv2576/trace-ai",
    demo: "",
    category: "Web Apps",
  },
  {
    title: "Hacker News client",
    description:
      "A mobile Hacker News client built with Expo and React Native. Clean, fast, and covers every feed you need — Top, New, Show, Ask — with a downloadable APK ready to install.",
    tags: [
      "Expo",
      "React Native",
      "TypeScript",
      "Firebase Client",
      "Tanstack Query",
    ],
    image: GptImgCaptioner,
    github: "https://github.com/aleksa-codes/gpt-flux-img-captioner",
    demo: "https://gptcaptioner.shiv.dx",
    featured: true,
    category: "AI & Tools",
  },
  {
    title: "Weave App",
    description:
      "Convert JPEG images to PDF directly on your device. No internet required, no ads, no uploads — everything stays local.",
    tags: ["Expo", "TypeScript", "React Native", "Android", "Gradle", "Hermes"],
    image: weave,
    github: "https://github.com/aleksa-codes/easy-website-gpt",
    demo: " ",
    category: "Browser Extensions",
  },
  {
    title: "Unistream",
    description:
      "Modern fitness app providing AI-tailored workout plans and integrated rest timers. Features customizable routines, circuit options, and embedded video demonstrations.",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "ChatGPT",
      "localStorage",
    ],
    image: NextWorkout,
    github: "https://github.com/aleksa-codes/next-workout",
    demo: "https://nextworkout.aleksa.codes",
    category: "AI & Tools",
  },
  {
    title: "Disperz",
    description:
      "Creative AI content generator inspired by infinite multiverses. Instantly crafts highly unique, imaginative text and documents with real-time preview and download options.",
    tags: ["Astro", "TailwindCSS", "OpenAI API"],
    image: GptFileSmith,
    github: "https://github.com/aleksa-codes/gpt-filesmith",
    demo: "https://filesmith.aleksa.codes",
    category: "AI & Tools",
  },
  {
    title: "Logbook",
    description:
      "Powerful productivity extension designed to eliminate digital distractions. Features highly customizable block lists and granular exceptions for deep, uninterrupted work sessions.",
    tags: ["React", "TypeScript", "TailwindCSS", "shadcn/ui", "Chrome API"],
    image: EasyWebsiteBlocker,
    github: "https://github.com/aleksa-codes/easy-website-blocker",
    category: "Browser Extensions",
  },
  {
    title: "Swift Practice",
    description:
      "Sleek, modern VS Code theme inspired by Atom's One Dark Pro. Delivers a refined UI and vibrant syntax highlighting for an optimal developer experience.",
    tags: [
      "VS Code",
      "Dark Theme",
      "Readability",
      "Developer Experience",
      "Syntax Highlighting",
    ],
    image: OneDarkModernPro,
    github: "https://github.com/aleksa-codes/one-dark-modern-pro",
    demo: "https://marketplace.visualstudio.com/items?itemName=aleksa-codes.one-dark-modern-pro",
    featured: true,
    category: "AI & Tools",
  },
]
