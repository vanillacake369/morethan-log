const CONFIG = {
  // profile setting (required)
  profile: {
    name: "tony",
    image: "/notion-avatar-1706598317544.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend Developer",
    bio: "I develop everything that might change any society issue.",
    email: "lonelynight1026@gmail.com",
    linkedin: "vanillacake369",
    github: "vanillacake369",
    instagram: "iamwhtiam247",
  },
  projects: [
    {
      name: `기프티콘 입찰 거래 플랫폼`,
      href: "https://github.com/Team-BC-1/gream",
    },
  ],
  // blog setting (required)
  blog: {
    title: "vanillacake369-log",
    description: "welcome to morethan-log!",
  },

  // CONFIG configration (required)
  link: "https://tony-tech-blog.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
