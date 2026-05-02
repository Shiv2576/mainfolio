//src/pages/open-graph/[...route].ts

import { OGImageRoute } from "astro-og-canvas"
import { getCollection } from "astro:content"

const blogPosts = await getCollection("blog")

export const { getStaticPaths, GET } = await OGImageRoute({
  param: "route",

  pages: {
    index: {
      title: "shiv.dx",
      description:
        "Computer Science graduate and web developer specializing in performance optimization, clean UI design, and scalable architecture. Explore my work and get in touch.",
    },
    projects: {
      title: "Projects",
      description:
        "Browse my portfolio of web development projects, including side projects and open source contributions built with modern tools and best practices.",
    },
    blog: {
      title: "Blog",
      description:
        "Articles and insights on web development, software engineering, and computer science — written from hands-on experience as a developer.",
    },
    contact: {
      title: "Contact",
      description:
        "Have a project in mind or want to collaborate? Reach out for freelance work, partnership inquiries, or general questions — I'd love to hear from you.",
    },
    // Blog posts
    ...Object.fromEntries(
      blogPosts.map((post) => [
        `blog/${post.id}`,
        {
          title: post.data.title,
          description: post.data.description,
        },
      ])
    ),
  },

  getImageOptions: (path, page) => {
    const isBlog = path.startsWith("blog/")

    return {
      title: page.title,
      description: page.description,

      overlay: {
        color: [0, 0, 0],
        opacity: 0.35,
      },

      logo: {
        path: "./src/assets/logo-192x192.png",
        size: [70],
      },

      font: {
        title: {
          size: isBlog ? 56 : 64,
          families: ["Geist"],
          weight: "Bold",
          color: [255, 255, 255], // white (better contrast)
        },
        description: {
          size: 28,
          families: ["Geist"],
          color: [220, 220, 220],
        },
      },

      fonts: [
        "https://api.fontsource.org/v1/fonts/geist/latin-400-normal.ttf",
        "https://api.fontsource.org/v1/fonts/geist/latin-700-normal.ttf",
      ],

      // 👇 fallback gradient if no image
      bgGradient: [
        [15, 23, 42], // slate-900
        [30, 41, 59], // slate-800
      ],

      padding: 80,

      border: {
        color: [255, 255, 255],
        width: 6,
        side: "inline-start",
      },
    }
  },
})
