///////
import disperz from "@/assets/projects/disperz.png"
import hackernew from "@/assets/projects/hackernew.png"
import languageApp from "@/assets/projects/languageApp.jpg"
import logbook from "@/assets/projects/logbook.png"
import swift from "@/assets/projects/swift.jpg"
import trace from "@/assets/projects/trace.png"
import unistream from "@/assets/projects/unistream.png"
import weave from "@/assets/projects/weave.png"

export const projects = [
  {
    title: "LanguageApp",
    description:
      "A Mobile App to learn Mandarin Chinese like a native speaker , with supabase auth , and personlized levels built with Expo.",
    tags: ["Expo", "TypeScript", "Supabase", "OAuth", "Android", "SaaS"],
    image: languageApp,
    demo: "",
    github: "https://github.com/Shiv2576/Mandarin-Language-App",
    featured: true,
    category: "Web Apps",
  },
  {
    title: "Trace Ai",
    description:
      "Visulize ur every query from database schema to mindmaps, flowcharts.",
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
    image: trace,
    github: "https://github.com/Shiv2576/trace_ai",
    demo: "https://res.cloudinary.com/drlckonat/video/upload/v1774801574/Screen_Recording_2026-03-29_at_9.09.16_PM_q3b0eo.mp4",
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
    image: hackernew,
    github: "https://github.com/Shiv2576/hn-web",
    demo: "https://hn-web-five.vercel.app",
    featured: true,
    category: "AI & Tools",
  },
  {
    title: "Weave App",
    description:
      "Convert JPEG images to PDF directly on your device. No internet required, no ads, no uploads — everything stays local.",
    tags: ["Expo", "TypeScript", "React Native", "Android", "Gradle", "Hermes"],
    image: weave,
    github: "https://github.com/Shiv2576/WeaveWeb",
    demo: "https://weavemobile.netlify.app/",
    Features: true,
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
    image: unistream,
    github: "https://github.com/aleksa-codes/next-workout",
    demo: "https://nextworkout.aleksa.codes",
    category: "AI & Tools",
  },
  {
    title: "Disperz",
    description:
      "Creative AI content generator inspired by infinite multiverses. Instantly crafts highly unique, imaginative text and documents with real-time preview and download options.",
    tags: ["Astro", "TailwindCSS", "OpenAI API"],
    image: disperz,
    demo: "https://disperz.netlify.app/",
    category: "AI & Tools",
  },
  {
    title: "Logbook",
    description:
      "Powerful productivity extension designed to eliminate digital distractions. Features highly customizable block lists and granular exceptions for deep, uninterrupted work sessions.",
    tags: ["React", "TypeScript", "TailwindCSS", "shadcn/ui", "Chrome API"],
    image: logbook,
    github: "https://logbook-delta-red.vercel.app",
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
    image: swift,
    github: "https://github.com/Shiv2576/swift_practice",
    category: "AI & Tools",
  },
]
